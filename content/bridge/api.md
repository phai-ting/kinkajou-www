---
title: HTTP & WebSocket API
linkTitle: API
weight: 4
---

Local API for tools other than Streamer.bot.

The API is versioned under `/v1` and defaults to binding on `127.0.0.1`. Exposing it on the LAN will be an explicit setting.

## Planned endpoints

| Method | Path | Purpose |
| --- | --- | --- |
| `GET` | `/v1/printers` | List printer instances |
| `GET` | `/v1/printers/{id}` | Instance identity and status |
| `GET` | `/v1/printers/{id}/status` | Live status snapshot |
| `GET` | `/v1/printers/{id}/thumbnail` | Optional job preview image |
| `GET` | `/v1/printers/{id}/stream` | Optional live stream / snapshot URLs |
| `GET` | `/v1/plugins` | Installed integrations and config schemas |
| `WS` | `/v1/events` | Push events for printer and job changes |

OpenAPI will be published with the implementation so clients can generate SDKs.
