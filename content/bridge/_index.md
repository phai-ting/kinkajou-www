---
title: Kinkajou Bridge
linkTitle: Overview
cascade:
  type: docs
---

**Kinkajou Bridge** is a local Windows app that connects 3D printers to Streamer.bot and other tools through a shared HTTP and WebSocket API.

## What it does

- Connects **services** (for example Bambu Lab cloud), **printers** (cloud or LAN), and **integrations** (Streamer.bot)
- Supports multiple printers and mixed connection paths at once
- Fires Streamer.bot `DoAction` calls from printer events (`Kinkajou.{event_type}`)
- Exposes a local API so overlays, bots, and other apps can use the same hub
- Runs as a system tray app and optionally headless (`--service`)

## Documentation

Pick the section that matches what you are building or using:

{{< cards >}}
  {{< card link="user/" title="User docs" subtitle="Install Bridge, connect services, printers, and Streamer.bot" icon="user" >}}
  {{< card link="bridge-developer/" title="Bridge developer docs" subtitle="Extend Bridge with service, printer, and integration plugins" icon="puzzle" >}}
  {{< card link="overlay-developer/" title="Overlay developer docs" subtitle="Build overlays and clients on the local API" icon="desktop-computer" >}}
  {{< card link="streamerbot-actions/" title="Streamer.bot Action docs" subtitle="Write Streamer.bot actions that work with Bridge" icon="play" >}}
{{< /cards >}}
