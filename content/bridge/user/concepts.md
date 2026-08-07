---
title: Concepts
weight: 2
aliases:
  - /bridge/concepts/
---

Core ideas behind Kinkajou Bridge.

## Project vs product

- **Project Kinkajou** — the overall project and this documentation site
- **Kinkajou Bridge** — the local printer hub application

## Three plugin kinds

Bridge is organized around three kinds of plugins:

| Kind | Role | Built-in examples |
| --- | --- | --- |
| **Service** | Account / hub connection (auth + device discovery) | Bambu Lab cloud (`bambu_cloud`) |
| **Printer** | One device session (status + events) | Bambu (`bambu`), OctoPrint (`octoprint`) |
| **Integration** | Outbound consumer of Bridge events | Streamer.bot (`streamerbot`) |

You typically connect a **service** once, then add one or more **printers** from that account — or add standalone LAN printers without a service. **Streamer.bot** is a single global integration that receives events from every printer.

## Connection modes (printers)

Printer plugins that support cloud accounts use `connection_mode`:

- **`service`** — credentials and device list come from a linked service instance
- **`lan`** — talk to the device directly on your network

Older configs that used `cloud` are migrated to `service` automatically.

## Capabilities

Plugins may optionally expose:

- Job **thumbnail** / cover image
- Live camera **stream URL** and snapshot URL (URL only; Bridge does not re-encode video)

## Clients

Bridge is API-first. **Streamer.bot** is an optional built-in integration for automation. **Overlays and other tools** use the same local HTTP and WebSocket API (default `127.0.0.1:29067`) and do not require Streamer.bot.
