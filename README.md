# Cyberpunk 2077 themes

[![Chrome Web Store users](https://img.shields.io/chrome-web-store/users/fdniepnomknkniipnhignpjmblobockh?label=Cyberpunk%202077%20Dark)](https://chromewebstore.google.com/detail/fdniepnomknkniipnhignpjmblobockh)

Two browser themes in the Cyberpunk UX kit's red, cyan and teal, each a [WXT](https://wxt.dev) extension.

![Cyberpunk 2077 Dark](docs/dark.png)

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

[Apache 2.0](LICENSE). Redistributions and derivative works must keep the copyright notice and the [NOTICE](NOTICE) file, which credits Avi (avi12).

"Cyberpunk 2077" is a trademark of CD PROJEKT S.A. This is an unofficial fan project, not affiliated with or endorsed by CD PROJEKT.
