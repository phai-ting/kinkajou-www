---
title: Actions and arguments
weight: 2
---

Bridge always calls one Streamer.bot action: **`Kinkajou Bridge`** (from the Kinkajou export). That router looks up a **user-created** action by name and runs it when present.

Re-importing the export updates the router without overwriting your handlers.

## User action naming

Create Streamer.bot actions with these exact names for the events you care about:

| User action name | Event | When |
| --- | --- | --- |
| `Kinkajou - Printer Connected` | `printer.connected` | Printer session connected |
| `Kinkajou - Printer Disconnected` | `printer.disconnected` | Printer session disconnected |
| `Kinkajou - Printer Error` | `printer.error` | Printer error reported |
| `Kinkajou - Printer Status` | `printer.status` | Significant status update |
| `Kinkajou - Print Started` | `print.started` | A print job begins |
| `Kinkajou - Print Paused` | `print.paused` | A print is paused |
| `Kinkajou - Print Resumed` | `print.resumed` | A print is resumed |
| `Kinkajou - Print Finished` | `print.finished` | A print completes successfully |
| `Kinkajou - Print Failed` | `print.failed` | A print fails |
| `Kinkajou - Print Cancelled` | `print.cancelled` | A print is cancelled |
| `Kinkajou - Print Layer Changed` | `print.layer_changed` | Layer change reported |
| `Kinkajou - Print Progress` | `print.progress` | Progress update |

You only need actions for events you want to handle. Missing user actions are ignored by the router.

## Arguments

Bridge passes these into **`Kinkajou Bridge`** (and your user action should receive the same args from the router):

| Argument | Meaning |
| --- | --- |
| `event_name` | Expected user action name (for example `Kinkajou - Print Started`) |
| `event_type` | Machine event id (for example `print.started`) |
| `printer_id` | Bridge printer instance id |
| `printer_name` | Display name from Bridge |
| `plugin_id` | Printer plugin id (for example `bambu`, `octoprint`, `moonraker`) |

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

- Put stream-facing logic in your `Kinkajou - …` actions; keep the exported **`Kinkajou Bridge`** action as a thin router.
- Treat missing optional args as normal (LAN printers may not have `service_instance_id`).
- Prefer Bridge’s event payload over scraping Streamer.bot globals when possible.
- For continuous on-stream UI (progress bars, elapsed / remaining / total), prefer a [Bridge overlay](../../user/overlays/) (or your own client on the Bridge API) instead of polling via Streamer.bot.
- Copy printer id and ready-made overlay URLs from **Printers → Details** in Bridge.
