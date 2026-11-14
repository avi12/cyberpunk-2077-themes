# Cyberpunk 2077 themes

[![Chrome Web Store users](https://img.shields.io/chrome-web-store/users/fdniepnomknkniipnhignpjmblobockh?label=Chrome%20Web%20Store%20(dark))](https://chromewebstore.google.com/detail/fdniepnomknkniipnhignpjmblobockh) [![Firefox Add-ons users](https://img.shields.io/amo/users/cyberpunk-2077-dark@avi12.com?label=Firefox%20Add-ons%20(dark))](https://addons.mozilla.org/firefox/addon/cyberpunk-2077-dark@avi12.com/)

Two browser themes in the Cyberpunk UX kit's red, cyan and teal, each a [WXT](https://wxt.dev) extension.

> **Not affiliated.** This is an unofficial fan project. It is not affiliated with, endorsed by or sponsored by CD PROJEKT S.A. or CD PROJEKT RED. "Cyberpunk 2077" is a trademark of CD PROJEKT S.A.

![Cyberpunk 2077 Dark](https://github.com/user-attachments/assets/8a8fb1cc-1493-4f8d-907e-670e6a6451b1)

For the full browser Cyberpunk overhaul, use [Edge+](https://github.com/avi12/edge-plus) with [Cyberpunk 2077 New Tab](https://github.com/avi12/cyberpunk-2077-new-tab)

| Package          | Theme                |
| ---------------- | -------------------- |
| `packages/dark`  | Cyberpunk 2077 Dark  |
| `packages/light` | Cyberpunk 2077 Light |

## Build

```
pnpm install
pnpm ext:build   # packages/<theme>/dist/chrome-mv3, load it unpacked
pnpm ext:zip     # builds first, then zips for the stores
```

A theme has no code: each package's `wxt.config.ts` manifest is the whole theme (colours, tints, images) and `public/images/` holds the frame pictures, and `shared/new-tab-background.png` is the one 4K new tab picture both themes copy into their build.

## License

[Apache 2.0](LICENSE). Redistributions and derivative works must keep the copyright notice and the [NOTICE](NOTICE) file, which credits [Avi](https://avi12.com).

## Support

[GitHub Sponsors](https://github.com/sponsors/avi12) or [PayPal](https://www.paypal.com/paypalme/avi12).
