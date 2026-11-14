import { defineConfig } from "wxt";

import { getThemeConfig } from "../../shared/theme-config";
import packageJson from "./package.json";

export default defineConfig(
  getThemeConfig({
    name: "Cyberpunk 2077 Dark",
    description: "Cyberpunk 2077 dark theme for your browser.",
    author: packageJson.author,
    geckoId: "cyberpunk-2077-dark@avi12.com",
    colors: {
      frame: [2, 4, 6],
      frame_inactive: [1, 2, 3],
      frame_incognito: [10, 5, 8],
      frame_incognito_inactive: [10, 5, 8],
      toolbar: [5, 8, 12],
      tab_text: [0, 166, 166],
      tab_background_text: [0, 166, 166],
      tab_background_text_inactive: [0, 166, 166],
      bookmark_text: [255, 213, 64],
      toolbar_button_icon: [86, 254, 255],
      omnibox_background: [2, 48, 56],
      omnibox_text: [86, 254, 255],
      ntp_background: [5, 8, 12],
      ntp_text: [255, 213, 64],
      ntp_link: [86, 254, 255],
      ntp_header: [247, 41, 68],
      button_background: [5, 8, 12, 0]
    },
    tints: {
      buttons: [0.5, 1, 0.67]
    }
  })
);
