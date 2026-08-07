---
title: Overview
weight: 1
---

Kinkajou Bridge connects to Streamer.bot as a WebSocket **client**. When a printer event occurs, Bridge calls `DoAction` with a predictable action name (`Kinkajou.{event_type}`) and argument set.

Your job on the Streamer.bot side is to create matching actions (and optional C# / sub-actions) that use those arguments for alerts, OBS changes, chat responses, and so on.

## Responsibilities

| Layer | Role |
| --- | --- |
| **Bridge** | Watches printers; sends `DoAction` into Streamer.bot |
| **Streamer.bot actions** | React to those calls; own stream-facing logic |
| **Overlays** | Usually read Bridge’s HTTP/WS API directly (see [Overlay developer docs](../../overlay-developer/)) |

## Prerequisites

1. Bridge is connected to Streamer.bot (user setup: [Connect Streamer.bot](../../user/streamerbot/)).
2. At least one printer is configured in Bridge.
3. Streamer.bot has actions named for the events you care about (see [Actions and arguments](../actions-and-args/)).
