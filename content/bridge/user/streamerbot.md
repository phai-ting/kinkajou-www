---
title: Connect Streamer.bot
linkTitle: Streamer.bot
weight: 3
aliases:
  - /bridge/streamerbot/
---

How to connect Kinkajou Bridge to Streamer.bot as a user.

Streamer.bot is **optional**. Bridge can run printers and OBS overlays without it. Connect Streamer.bot when you want Bridge to trigger Streamer.bot actions (`DoAction`) on printer events. Overlays still talk to Bridge’s API directly either way.

## What Bridge does

Bridge acts as a WebSocket **client** to Streamer.bot’s WebSocket Server. When a printer event occurs, Bridge calls `DoAction` with a name like `Kinkajou.print.started` and a set of arguments (printer id, name, plugin id, and event payload).

Only **one** Streamer.bot connection is configured in Bridge. It receives events from every printer — cloud-linked and standalone alike.

## Setup in Bridge

1. In Streamer.bot, enable **Servers/Clients → WebSocket Server** and note the host, port, endpoint, and password (if any).
2. In Bridge, open **Streamer.bot** in the top nav.
3. If you are not connected yet, fill in:
   - **Host** (often `127.0.0.1`)
   - **Port** (often `8080`)
   - **Endpoint** (often `/`)
   - **Password** (optional)
4. Save. Bridge stays on a **connection summary** with a status badge. Use **Edit connection** to change settings (leave the password blank to keep the current value).

If the WebSocket cannot connect, Bridge keeps the integration in an error state — fix the server settings in Streamer.bot, then edit and save again (or restart Bridge).

## Next steps

- Create matching actions in Streamer.bot — see [Streamer.bot Action docs](../../streamerbot-actions/).
- For on-stream widgets (no Streamer.bot required), see [Overlays in OBS](../overlays/) and the [overlay developer docs](../../overlay-developer/).
