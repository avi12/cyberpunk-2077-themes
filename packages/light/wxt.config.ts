import { defineConfig } from "wxt";

import { getThemeConfig } from "../../shared/theme-config";
import packageJson from "./package.json";

export default defineConfig(
  getThemeConfig({
    name: "Cyberpunk 2077 Light",
    description: "Cyberpunk 2077 light theme for your browser.",
    author: packageJson.author,
    geckoId: "cyberpunk-2077-light@avi12.com",
    colors: {
      frame: [213, 228, 240],
      frame_inactive: [197, 214, 228],
      frame_incognito: [235, 211, 216],
      frame_incognito_inactive: [235, 211, 216],
      toolbar: [213, 228, 240],
      tab_text: [42, 74, 102],
      tab_background_text: [42, 74, 102],
      tab_background_text_inactive: [42, 74, 102],
      bookmark_text: [110, 82, 0],
      toolbar_button_icon: [6, 24, 43],
      omnibox_background: [191, 235, 255],
      omnibox_text: [6, 24, 43],
      ntp_background: [213, 228, 240],
      ntp_text: [6, 24, 43],
      ntp_link: [6, 24, 43],
      ntp_header: [200, 16, 46],
      button_background: [213, 228, 240, 0]
    },
    tints: {
      buttons: [0.58, 0.9, 0.09]
    }
  })
);
