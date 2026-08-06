---
title: Concepts
weight: 2
---

Core ideas behind Kinkajou Bridge.

## Project vs product

- **Project Kinkajou** — the overall project and this documentation site
- **Kinkajou Bridge** — the printer hub application

## Integrations vs instances

- An **integration** is a vendor/protocol plugin (for example Bambu Lab or Snapmaker U1).
- A **printer instance** is one configured device. You can run many instances across different vendors.

## Capabilities

Plugins may optionally expose:

- Job **thumbnail** / cover image
- Live camera **stream URL** and snapshot URL (URL only; no re-encoding)

## Clients

Bridge is API-first. Streamer.bot is a first-class built-in adapter; other tools use the same local HTTP and WebSocket API.
