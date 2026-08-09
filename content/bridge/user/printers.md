---
title: Add a printer
linkTitle: Printers
weight: 2
---

Bridge connects to **host software / protocols**, not every brand name by itself. When you click **Add printer**, choose the path (cloud vs LAN), then pick the type that matches how the printer talks on the network.

## Which type do I pick?

| If you have… | Choose in Bridge | Notes |
| --- | --- | --- |
| Bambu Lab (X1, P1, A1, H2, …) | **Bambu Lab** | Prefer **Cloud via service** after connecting Bambu Lab under Services. Use LAN only for LAN Only / Developer Mode. |
| OctoPrint / OctoPi | **OctoPrint** | Needs the OctoPrint URL and an Application API key. |
| Mainsail, Fluidd, or other Moonraker UI | **Moonraker (Klipper)** | Same type for any Moonraker API on your LAN. |
| Many DIY / Voron / RatRig / etc. Klipper printers | **Moonraker (Klipper)** | If you open Fluidd or Mainsail in a browser, use Moonraker. |
| Snapmaker U1 / Artisan (Moonraker) | **Moonraker (Klipper)** | Use this when the machine exposes a Moonraker API on the network (typical for Klipper-based Snapmaker hosts). |
| Other brands with OctoPrint installed | **OctoPrint** | Brand sticker does not matter — the host software does. |

If your product is not listed, ask: *“What web UI or API do I already use on my network?”* That answer is usually the Bridge type.

## Standalone connection details

- **OctoPrint** — base URL (for example `http://192.168.1.40`) and API key from OctoPrint → Settings → API.
- **Moonraker** — base URL (often `http://192.168.1.40:7125`) and API key from Moonraker when the Bridge PC is not a trusted client. Leave the key blank only if Moonraker trusts this machine.
- **Bambu LAN** — serial, printer IP, and LAN access code.

## Next

- [Getting started](../getting-started/)
- [Overlays in OBS](../overlays/)
