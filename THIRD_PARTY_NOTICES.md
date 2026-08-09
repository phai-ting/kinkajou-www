# Third-party notices — kinkajou.dev (Kinkajou-web)

This documentation site’s original content and configuration are licensed under
the MIT License — see [`LICENSE`](LICENSE). It also includes or loads third-party
software and fonts as described below.

## Hextra (Hugo theme)

This site uses the [Hextra](https://github.com/imfing/hextra) theme (vendored under
`themes/hextra/`).

- License: MIT
- Copyright: Copyright (c) 2023 Xin
- Full text: [`themes/hextra/LICENSE`](themes/hextra/LICENSE)

The MIT license requires that the copyright notice and permission notice be
included in all copies or substantial portions of the Software. Keeping
`themes/hextra/LICENSE` in the repository satisfies that requirement for the
theme sources shipped with this site.

## Roboto (web font)

The site loads **Roboto** from Google Fonts for UI typography
(`layouts/_partials/custom/head-end.html`).

- Font software: Roboto
- Copyright: Copyright 2011 The Roboto Project Authors (https://github.com/googlefonts/roboto-classic)
- License: SIL Open Font License, Version 1.1  
  https://openfontlicense.org  
  https://github.com/google/fonts/blob/main/ofl/roboto/OFL.txt

Roboto is served via Google Fonts’ CDN (not redistributed as font files in this
repository). If you vendor Roboto font files into this project later, keep the
OFL copyright notice and license text with those files.

## Hugo and other build tools

Site builds use [Hugo](https://gohugo.io/) and related tooling on developer
machines / CI. Those tools are not redistributed as part of the published static
site HTML. See each tool’s upstream license for details.
