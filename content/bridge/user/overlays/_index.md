---
title: Overlays in OBS
linkTitle: Overlays
weight: 4
sidebar:
  open: true
---

Show live printer status on stream with Bridge’s built-in overlays as OBS Browser Sources. Widgets are served by Bridge on your PC (same origin as the API), so Chromium does not prompt to access other apps or your local network.

**Overlays do not require Streamer.bot.** They read status from Bridge’s local API. Streamer.bot is a separate, optional Bridge integration for automation (`DoAction` on printer events).

{{< cards >}}
  {{< card link="catalog/" title="Available overlays" icon="template" >}}
  {{< card link="setup-obs/" title="Configure in OBS" icon="desktop-computer" >}}
{{< /cards >}}

## Quick path

1. Add a printer in Bridge (**Printers**).
2. Open **Details** and copy an **Overview** or **Compact** URL (for example `http://127.0.0.1:29067/bridge/overview/?printer=…`).
3. Follow [Configure in OBS](setup-obs/) — one Browser Source per printer if you run several.

Building your own widgets? See [Overlay developer docs](../../overlay-developer/). Want Streamer.bot alerts instead of (or in addition to) overlays? See [Connect Streamer.bot](../streamerbot/).
