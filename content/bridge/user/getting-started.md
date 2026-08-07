---
title: Getting started
weight: 1
aliases:
  - /bridge/getting-started/
---

Install Bridge, connect a cloud service or LAN printer, and optionally link Streamer.bot.

## Install and run

1. Install the Windows app (embedded Python runtime; no separate Python install required for release builds).
2. Start Bridge. By default it runs in the system tray and opens the local UI on first run.
3. Open the dashboard in your browser at `http://127.0.0.1:29067/ui/` (or use **Open dashboard** from the tray).

Headless / background mode (no tray):

```text
kinkajou-bridge --service
```

Override the listen port with `--port` or `KINKAJOU_BRIDGE_PORT` if **29067** is already in use.

## First-run welcome

If you have no printers yet and have not dismissed welcome, Bridge shows a short welcome screen with links to **Printers**, **Services**, and **Streamer.bot**. You can also choose **I'll do this later** and go straight to the dashboard.

## Recommended setup order

### 1. Connect a service (optional, for cloud printers)

Open **Services** in the top nav.

- If nothing is connected, Bridge shows the **Bambu Lab** connect form (display name, cloud access token, region: Global or China).
- After a successful connect, you stay on a **connected summary** with a **Disconnect** button. Disconnect is blocked while any printers still reference that service — remove those printers first.

Cloud device listing uses your Bambu Lab account token. Keep the token private.

### 2. Add a printer

Open **Printers**.

- If you already have printers, Bridge shows summary cards (connection, print state, progress, temps) with **Details** and **Add printer**.
- If you have none (or you click **Add printer**), choose a path:
  - **Cloud via service** — requires a connected service. Pick a device from the account list; serial is filled in for you. Each Bambu serial can only be added once.
  - **Standalone / LAN** — connect directly (Bambu LAN needs serial, IP, and access code; OctoPrint needs base URL and API key).

After save, Bridge returns to the **printers list**. Open **Details** for status, **Remove printer**, and ready-made **overlay / Streamer.bot** connection info (printer id, API, WebSocket, Overview and Compact URLs).

### 3. Connect Streamer.bot (optional)

Open **Streamer.bot** and enter the WebSocket Server host, port, endpoint, and optional password from Streamer.bot → **Servers/Clients → WebSocket Server**. See [Connect Streamer.bot](../streamerbot/).

### 4. Add overlays in OBS (optional)

Copy an Overview or Compact URL from **Printers → Details**, then add Browser Sources in OBS. Full steps and sizing live on the overlay site — see [Overlays in OBS](../overlays/).

### 5. Use the local API (optional)

Overlays and other tools can call the same hub at `127.0.0.1:29067`. See [Overlay developer docs](../../overlay-developer/).

## Navigation

Every main page uses the same top nav: **Dashboard**, **Services**, **Printers**, **Streamer.bot**, and **Documentation** (opens [kinkajou.dev/bridge](https://kinkajou.dev/bridge/) in a new tab).

## Current limitations

Bridge is still early:

- Built-in Bambu Lab cloud discovery works for listing / adding printers from your account.
- Live MQTT and OctoPrint telemetry are still stubbed in places — expect connection and status scaffolding to improve over releases.
- Thumbnail retrieval may return “not implemented” until a plugin supports it.
