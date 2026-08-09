---
title: Available overlays
linkTitle: Catalog
weight: 1
---

Bridge serves OBS-ready widgets under `/bridge/…` on the local API (default `http://127.0.0.1:29067`). Overview and Compact use the Bridge **WebSocket** (`/v1/events`) so time remaining updates smoothly; Status and Progress poll HTTP.

Use a **separate OBS Browser Source per printer**, each with its own `printer=` id.

## Catalog

| Overlay | Browser Source URL | Recommended size | What it shows |
| --- | --- | --- | --- |
| **Overview** | `http://127.0.0.1:29067/bridge/overview/` | **520 × 280** | Name, connection, print state, job, progress bar, elapsed / remaining / est. total, temps |
| **Compact** | `http://127.0.0.1:29067/bridge/compact/` | **480 × 100** | Name, print-state badge, tall progress bar with % and remaining time on the bar |
| **Status** | `http://127.0.0.1:29067/bridge/status/` | **420 × 140** | Name, connection, print state (HTTP poll) |
| **Progress** | `http://127.0.0.1:29067/bridge/progress/` | **480 × 160** | Job name, progress bar, remaining (HTTP poll) |

![Compact overlay showing printer name, printing badge, progress percent, and remaining time](/images/overlays/compact.png)

Append `?printer=YOUR_PRINTER_ID`. Copy ready-made links from **Printers → Details** in Bridge.

## Query parameters

| Parameter | Default | Purpose |
| --- | --- | --- |
| `printer` | *(first printer)* | Printer instance id (**required** when you run more than one) |
| `theme` | `dark` | Widget appearance: `dark` or `light` |
| `host` | *(same origin when served by Bridge)* | Optional Bridge API base — only needed for custom pages not served by Bridge |
| `token` | *(none)* | Optional API token |
| `interval` | `2000` | Poll interval for Status / Progress only (ms) |

Examples:

```text
http://127.0.0.1:29067/bridge/overview/?printer=PRINTER_A_ID
http://127.0.0.1:29067/bridge/compact/?printer=PRINTER_B_ID&theme=light
```

## Time fields

Bridge exposes job timing on status as:

- `job.elapsed_seconds`
- `job.remaining_seconds`
- `job.total_seconds` (estimated)
- `job.progress` (0–100)

Overview and Compact refresh from WebSocket events and tick remaining/elapsed locally between updates. If a plugin only sends progress + remaining, the client derives the other times when possible.

## Next

- [Configure in OBS](../setup-obs/)
- [Custom overlays](../../../overlay-developer/custom/) — drop your own HTML into Bridge’s `overlays/custom` folder
- [Overlay developer docs](../../../overlay-developer/) — build with `fetch` / `WebSocket`
