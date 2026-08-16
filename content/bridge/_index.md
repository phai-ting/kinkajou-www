---
title: Kinkajou Bridge
linkTitle: Overview
cascade:
  type: docs
---

**Kinkajou Bridge** is a local multi-printer hub that connects 3D printers to Streamer.bot and other tools through a shared HTTP and WebSocket API. Windows users can install a packaged app; Mac and Linux users run Bridge from source.

<div class="hx:my-6">
{{< hextra/hero-button text="Download" link="https://github.com/phai-ting/kinkajou-bridge/releases" >}}
</div>

## What it does

- Connects **services** (for example Bambu Lab cloud), **printers** (cloud or LAN), and **integrations** (Streamer.bot)
- Supports multiple printers and mixed connection paths at once
- Fires Streamer.bot `DoAction` on **`Kinkajou Bridge`** (with `event_name` / printer args) when Streamer.bot is connected
- Serves OBS overlays and a local API so on-stream widgets, bots, and other apps use the same hub
- Runs as a system tray app and optionally headless (`--service`)

**Streamer.bot is optional.** Bridge can integrate with Streamer.bot for automation, but built-in and custom **overlays talk to Bridge directly** — they do not require Streamer.bot.

## Documentation

Pick the section that matches what you are building or using:

{{< cards >}}
  {{< card link="user/" title="User docs" subtitle="Install Bridge, connect services, printers, Streamer.bot, and OBS overlays" icon="user" >}}
  {{< card link="bridge-developer/" title="Bridge developer docs" subtitle="Extend Bridge with service, printer, and integration plugins" icon="puzzle" >}}
  {{< card link="overlay-developer/" title="Overlay developer docs" subtitle="Build overlays and clients on the local API" icon="desktop-computer" >}}
  {{< card link="streamerbot-actions/" title="Streamer.bot Action docs" subtitle="Write Streamer.bot actions that work with Bridge" icon="play" >}}
{{< /cards >}}
