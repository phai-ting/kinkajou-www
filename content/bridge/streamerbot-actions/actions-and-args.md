---
title: Actions and arguments
weight: 2
---

Bridge forwards printer events as Streamer.bot `DoAction` calls named `Kinkajou.{event_type}`.

## Action naming

Create Streamer.bot actions with these exact names so Bridge can invoke them:

| Action name | When |
| --- | --- |
| `Kinkajou.printer.connected` | Printer session connected |
| `Kinkajou.printer.disconnected` | Printer session disconnected |
| `Kinkajou.printer.error` | Printer error reported |
| `Kinkajou.printer.status` | Significant status update |
| `Kinkajou.print.started` | A print job begins |
| `Kinkajou.print.paused` | A print is paused |
| `Kinkajou.print.resumed` | A print is resumed |
| `Kinkajou.print.finished` | A print completes successfully |
| `Kinkajou.print.failed` | A print fails |
| `Kinkajou.print.cancelled` | A print is cancelled |
| `Kinkajou.print.layer_changed` | Layer change reported |
| `Kinkajou.print.progress` | Progress update |

## Common arguments

Bridge always passes:

| Argument | Meaning |
| --- | --- |
| `printer_id` | Bridge printer instance id |
| `printer_name` | Display name from Bridge |
| `plugin_id` | Printer plugin id (for example `bambu`, `octoprint`) |
| `event_type` | Same string as the action suffix (for example `print.started`) |

Plus any fields from the event **payload** when present, which may include:

| Argument | Meaning |
| --- | --- |
| `service_instance_id` | Linked cloud service instance, when applicable |
| `connection_mode` | `service` or `lan` |
| `state` / `print_state` | Normalized print state |
| `progress` | Job progress (0–100) |
| `remaining_seconds` | Estimated time remaining |
| `elapsed_seconds` | Time spent on the current job |
| `total_seconds` | Estimated total job duration |
| `job_name` | Current job / file name |

## Tips for action authors

- Keep one thin “router” action per event, then call shared sub-actions for OBS, TTS, chat, etc.
- Treat missing optional args as normal (LAN printers may not have `service_instance_id`).
- Prefer Bridge’s event payload over scraping Streamer.bot globals when possible.
- For continuous on-stream UI (progress bars, elapsed / remaining / total), prefer a [Bridge overlay](../../user/overlays/) (or your own client on the Bridge API) instead of polling via Streamer.bot.
- Copy printer id and ready-made overlay URLs from **Printers → Details** in Bridge.
