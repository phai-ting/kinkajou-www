---
title: Overview
weight: 1
---

Overlays and companion apps talk to Bridge over the local HTTP and WebSocket API (default `127.0.0.1:29067`). Bridge is the hub; your overlay stays a thin client. CORS allows browser sources hosted elsewhere to call that local API.

Ready-made OBS overlays are published from the **Kinkajou Overlays** site (`overlays.kinkajou.dev`), including **Overview** and **Compact** widgets that use the events WebSocket for live timing. This section is for building your own or understanding the API those overlays use.

## Typical uses

- Live print progress, temperatures, and job name on stream
- Elapsed / remaining / estimated total time from `job.*` fields
- Status badges that react to print started / finished / failed
- Thumbnails or camera snapshot URLs when a printer plugin exposes them

## Where to start

1. Run Bridge and add at least one printer (see [User docs](../../user/getting-started/)). Copy the printer id from **Printers → Details**.
2. Either use a hosted overlay from [overlays.kinkajou.dev](https://overlays.kinkajou.dev/bridge/), or call the [HTTP & WebSocket API](../api/) from your own page.
3. Prefer the event WebSocket (`/v1/events`) for live updates; use REST for one-shot reads. You do not need a special Kinkajou JS SDK — browser `fetch` / `WebSocket` (or any HTTP client you already use) is enough.

Streamer.bot is a separate path: Bridge pushes `DoAction` into Streamer.bot. Overlays should use the API directly unless you intentionally route everything through Streamer.bot.
