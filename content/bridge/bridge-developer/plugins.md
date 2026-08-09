---
title: Plugin author guide
linkTitle: Plugins
weight: 1
aliases:
  - /bridge/plugins/
  - /bridge/developer/plugins/
---

How to extend Kinkajou Bridge with Python plugins.

Plugins declare a **config schema**. Bridge renders the settings UI from that schema, stores secrets (redacted as `***` in API responses), and runs the session.

## Plugin kinds

| Kind | Entry point group | Contract |
| --- | --- | --- |
| Service | `kinkajou_bridge.services` | `ServicePlugin` — account auth + `list_devices()` |
| Printer | `kinkajou_bridge.printers` | `PrinterPlugin` — one device session + event stream |
| Integration | `kinkajou_bridge.integrations` | `IntegrationPlugin` — consume Bridge events (e.g. Streamer.bot) |

A single package can register into one or more groups. Legacy printer entry points under `kinkajou_bridge.plugins` are still loaded.

## What each contract provides

### ServicePlugin

- Identity: `id`, `name`, `config_schema`
- `verify` / `connect` / `disconnect` / `get_status`
- `list_devices()` → discovered devices (id, name, serial, model, …)

### PrinterPlugin

- Identity: `id`, `name`, `config_schema`
- `compatible_service_ids` — which service plugin ids this printer can bind to
- `supports_standalone` — whether LAN / direct connect is allowed without a service
- `verify` / `connect` / `disconnect` / `get_status`
- `events()` — async iterator of normalized `PrinterEvent` values

### IntegrationPlugin

- Identity: `id`, `name`, `config_schema`
- `verify` / `connect` / `disconnect` / `get_status`
- `handle_event(event)` — called for each printer event Bridge publishes

## Config schema

Schemas are declarative (`ConfigSchema` / `ConfigField`): string, number, boolean, secret, and select fields, with optional `visible_when`, hints, and setup help. Bridge uses them for Services, Printers, and Streamer.bot forms.

## Packaging

Ship a Python package that registers entry points, for example in `pyproject.toml`:

```toml
[project.entry-points."kinkajou_bridge.printers"]
myprinter = "my_package.plugin:MyPrinterPlugin"
```

Built-ins today: `bambu_cloud` (service), `bambu`, `octoprint`, and `moonraker` (printers), `streamerbot` (integration).

## Events

Normalized event types include:

- `printer.connected`, `printer.disconnected`, `printer.error`, `printer.status`
- `print.started`, `print.paused`, `print.resumed`, `print.finished`, `print.failed`, `print.cancelled`
- `print.layer_changed`, `print.progress`

The Streamer.bot integration forwards these as `DoAction` names `Kinkajou.{event_type}` (for example `Kinkajou.print.started`).
