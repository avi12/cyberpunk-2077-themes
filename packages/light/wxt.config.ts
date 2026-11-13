import { rmSync } from "node:fs";
import { join } from "node:path";

import { defineConfig } from "wxt";

import theme from "./manifest.json";

const PLACEHOLDER_OUTPUT = "placeholder.js";

// A theme has no code: the whole extension is this manifest and the images in public/.
export default defineConfig({
  manifest: theme,
  publicDir: "public",
  outDir: "dist",
  hooks: {
    "build:done"(wxt) {
      rmSync(join(wxt.config.outDir, PLACEHOLDER_OUTPUT), { force: true });
    }
  }
});
