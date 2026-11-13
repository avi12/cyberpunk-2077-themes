# Cyberpunk 2077 themes

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
