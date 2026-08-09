---
title: Overview
weight: 1
---

Kinkajou Bridge connects to Streamer.bot as a WebSocket **client**. When a printer event occurs, Bridge calls `DoAction` on a single exported action — **`Kinkajou Bridge`** — and passes `event_name` (plus printer/context args).

That router looks for a **user-created** action with the matching name (for example `Kinkajou - Print Started`) and runs it. Your automation lives in those user actions so re-importing the Kinkajou export does not overwrite them.

## Responsibilities

| Layer | Role |
| --- | --- |
| **Bridge** | Watches printers; sends `DoAction` to `Kinkajou Bridge` |
| **`Kinkajou Bridge` action** | Export-owned router; dispatches by `event_name` |
| **Your `Kinkajou - …` actions** | Stream-facing logic (alerts, OBS, chat, …) |
| **Overlays** | Usually read Bridge’s HTTP/WS API directly (see [Overlay developer docs](../../overlay-developer/)) |

## Prerequisites

1. Bridge is connected to Streamer.bot (user setup: [Connect Streamer.bot](../../user/streamerbot/)).
2. Import the [Kinkajou Streamer.bot export](https://github.com/phai-ting/kinkajou-bridge/tree/main/streamerbot) (provides the **`Kinkajou Bridge`** router action).
3. At least one printer is configured in Bridge.
4. You created user actions for the events you care about (see [Actions and arguments](../actions-and-args/)).
