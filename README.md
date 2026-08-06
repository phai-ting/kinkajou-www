# Kinkajou-web

Documentation site for [Project Kinkajou](https://kinkajou.dev), built with [Hugo](https://gohugo.io/) and [Hextra](https://github.com/imfing/hextra).

## Structure

| Path | Purpose |
| --- | --- |
| `content/` | Project home and tool docs |
| `content/bridge/` | Kinkajou Bridge documentation |
| `content/projects/` | Catalog of Project Kinkajou tools |
| `themes/hextra/` | Hextra theme (git submodule, pinned to `v0.12.3`) |

## Prerequisites

- [Hugo Extended](https://gohugo.io/installation/) (this repo targets recent extended builds)

## Local preview

```powershell
git submodule update --init --recursive
hugo server --buildDrafts --disableFastRender
```

Open http://localhost:1313/

## Build

```powershell
git submodule update --init --recursive
hugo --minify
```

Output is written to `public/`.
