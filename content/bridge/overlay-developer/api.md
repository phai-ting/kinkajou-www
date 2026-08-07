---
title: HTTP & WebSocket API
linkTitle: API
weight: 2
aliases:
  - /bridge/api/
  - /bridge/developer/api/
---

Local API for overlays and other tools that talk to Bridge over HTTP or WebSocket (not Streamer.bot’s own WebSocket protocol).

The API is versioned under `/v1` and defaults to binding on `127.0.0.1:29067` (NCBI taxonomy ID for the kinkajou). Override with `--port`, `KINKAJOU_BRIDGE_PORT`, or a `.env` file.

CORS is enabled with `Allow-Origin: *` so hosted OBS Browser Sources can call the local API.

Optional auth: set `KINKAJOU_BRIDGE_API_TOKEN`. HTTP clients send `Authorization: Bearer <token>`; the events WebSocket accepts the same header or a `token` query parameter.

Secret config fields are redacted as `***` in JSON responses.

## Endpoints

| Method | Path | Purpose |
| --- | --- | --- |
| `GET` | `/health` | Liveness |
| `GET` | `/v1/ui/state` | Docs URL, welcome flags, counts |
| `POST` | `/v1/ui/welcome/complete` | Mark welcome dismissed |
| `GET` | `/v1/plugins` | All plugins (`kind`: `service` \| `printer` \| `integration`) |
| `GET` | `/v1/services/plugins` | Service plugins + config schemas |
| `GET` | `/v1/services` | Connected services (redacted config + status) |
| `POST` | `/v1/services` | Connect a service |
| `DELETE` | `/v1/services/{id}` | Disconnect a service (fails if printers still reference it) |
| `GET` | `/v1/services/{id}/devices` | Devices discovered via a connected service |
| `GET` | `/v1/printers/plugins` | Printer plugins + config schemas |
| `GET` | `/v1/printers` | Printer summaries (identity + status) |
| `GET` | `/v1/printers/{id}` | Status snapshot for one printer |
| `GET` | `/v1/printers/{id}/status` | Same live status snapshot |
| `GET` | `/v1/printers/{id}/stream` | Stream / snapshot URL fields from status |
| `GET` | `/v1/printers/{id}/thumbnail` | Job preview when supported (may be `501` / `404`) |
| `POST` | `/v1/printers` | Add a printer |
| `DELETE` | `/v1/printers/{id}` | Remove a printer |
| `GET` | `/v1/integrations/plugins` | Integration plugins + schemas |
| `GET` | `/v1/integrations` | Integration instances (redacted config + status) |
| `POST` | `/v1/integrations` | Add or update Streamer.bot (singleton upsert) |
| `DELETE` | `/v1/integrations/{id}` | Remove an integration |
| `WS` | `/v1/events` | Push `PrinterEvent` JSON for printer and job changes |

## Event WebSocket

Connect to `ws://127.0.0.1:29067/v1/events`. Each message is a JSON `PrinterEvent` with `type`, `printer_id`, `printer_name`, `plugin_id`, `payload`, and `timestamp`.

Event `type` values match Streamer.bot action suffixes — see [Actions and arguments](../../streamerbot-actions/actions-and-args/).

## UI routes

| Path | Purpose |
| --- | --- |
| `/ui/welcome` | First-run greeting |
| `/ui/` | Dashboard |
| `/ui/setup?kind=service` | Services |
| `/ui/setup?kind=printer` | Printers (list, detail via `&id=…`, add via `&add=1`) |
| `/ui/setup?kind=integration` | Streamer.bot |
