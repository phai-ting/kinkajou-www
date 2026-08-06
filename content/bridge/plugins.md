---
title: Plugin author guide
linkTitle: Plugins
weight: 5
---

How to add printer support to Kinkajou Bridge.

Integrations are Python packages that implement a plugin contract and declare a **config schema**. Kinkajou Bridge renders the settings UI from that schema, stores secrets, and runs the session.

## Contract (planned)

Plugins provide:

- Identity (`id`, display name)
- `config_schema` — fields the core UI should collect
- `verify` / `connect` / `disconnect`
- Normalized status and an event stream
- Optional capabilities: thumbnail, live stream URL

Packaging and entry-point discovery details will be filled in when the Bridge core is scaffolded.
