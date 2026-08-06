---
title: Kinkajou Bridge
linkTitle: Overview
cascade:
  type: docs
---

**Kinkajou Bridge** is a local Windows service that connects 3D printers to Streamer.bot and other tools through a shared HTTP and WebSocket API.

## What it does

- Talks to printers through pluggable integrations (Bambu Lab first; more via community plugins)
- Supports multiple printers and mixed brands at once
- Fires Streamer.bot actions from printer events
- Exposes a local API so overlays, bots, and other apps can use the same hub
- Runs as a system tray app and optionally as a Windows service

## In this section

{{< cards >}}
  {{< card link="getting-started/" title="Getting started" icon="sparkles" >}}
  {{< card link="concepts/" title="Concepts" icon="light-bulb" >}}
  {{< card link="streamerbot/" title="Streamer.bot" icon="play" >}}
  {{< card link="api/" title="HTTP & WebSocket API" icon="code" >}}
  {{< card link="plugins/" title="Plugin author guide" icon="puzzle" >}}
{{< /cards >}}
