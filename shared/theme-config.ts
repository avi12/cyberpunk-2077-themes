import { cpSync, mkdirSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import type { UserConfig, UserManifest } from "wxt";

const PLACEHOLDER_OUTPUT = "placeholder.js";
const NEW_TAB_BACKGROUND = "images/new-tab-background.png";
// One 4K picture for every theme, copied into each build instead of duplicated per package
const SHARED_BACKGROUND = join(dirname(fileURLToPath(import.meta.url)), "new-tab-background.png");

const IMAGES = {
  theme_frame: "images/window-frame.png",
  theme_frame_inactive: "images/window-frame-inactive.png",
  theme_ntp_background: NEW_TAB_BACKGROUND
};

const PROPERTIES = {
  ntp_background_alignment: "center",
  ntp_background_repeat: "no-repeat"
};

type Theme = NonNullable<UserManifest["theme"]>;

interface ThemeOptions {
  name: string;
  description: string;
  author: string;
  geckoId: string;
  colors: Theme["colors"];
  tints: Theme["tints"];
}

// A theme has no code: the whole extension is its manifest and the images in public/.
export function getThemeConfig({ name, description, author, geckoId, colors, tints }: ThemeOptions) {
  const config: UserConfig = {
    manifest({ browser }) {
      return {
        name,
        description,
        icons: { 128: "icon-128.png" },
        ...(browser === "firefox" && {
          author,
          browser_specific_settings: { gecko: { id: geckoId } }
        }),
        theme: {
          images: IMAGES,
          colors,
          tints,
          properties: PROPERTIES
        }
      };
    },
    publicDir: "public",
    outDir: "dist",
    hooks: {
      "build:done"(wxt) {
        rmSync(join(wxt.config.outDir, PLACEHOLDER_OUTPUT), { force: true });
        mkdirSync(join(wxt.config.outDir, dirname(NEW_TAB_BACKGROUND)), { recursive: true });
        cpSync(SHARED_BACKGROUND, join(wxt.config.outDir, NEW_TAB_BACKGROUND));
      }
    }
  };
  return config;
}
