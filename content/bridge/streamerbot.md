---
title: Streamer.bot
weight: 3
---

How Kinkajou Bridge connects to Streamer.bot.

Bridge acts as a WebSocket **client** to Streamer.bot’s server and can:

- Call `DoAction` when printer events occur (print started, finished, failed, and so on)
- Pass normalized arguments such as `printer_id`, `printer_name`, `state`, `progress`, and `remaining_seconds`
- Optionally react to Streamer.bot events (for example chat commands that query status)

Detailed action mapping and variable lists will be documented here as the adapter is implemented.
