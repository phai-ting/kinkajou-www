---
title: Getting started
weight: 1
aliases:
  - /bridge/getting-started/
---

Install Bridge, connect a cloud service or LAN printer, then add OBS overlays and/or Streamer.bot as you need them.

**Overlays do not require Streamer.bot** — they use Bridge’s local API. Streamer.bot is an optional integration for automation when printer events fire.

## Install and run

### Windows (packaged app)

1. Download the Windows zip release, unzip it, and run `KinkajouBridge.exe`.
2. Bridge starts in the system tray and opens the local UI on first run.
3. Open the dashboard at `http://127.0.0.1:29067/ui/` (or **Open dashboard** from the tray).

Headless / background mode (no tray):

```text
KinkajouBridge.exe --service
```

### Mac / Linux (from source)

There is no Mac/Linux binary yet. Install with [uv](https://docs.astral.sh/uv/) and run from the repo — see **[Install from source (Mac / Linux)](../install-from-source/)**.

Short version:

```bash
git clone https://github.com/phai-ting/kinkajou-bridge.git
cd kinkajou-bridge
uv sync
uv run kinkajou-bridge --service   # recommended for servers / SSH
# or: uv run kinkajou-bridge       # tray when a GUI session is available
```

Then open `http://127.0.0.1:29067/ui/`.

### Port override

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
  - **Standalone / LAN** — connect directly (Bambu LAN, OctoPrint, or Moonraker / Klipper). See [Which type do I pick?](../printers/) if you are unsure (for example Snapmaker U1 → Moonraker).

After save, Bridge returns to the **printers list**. Open **Details** for status, **Remove printer**, and ready-made **overlay / Streamer.bot** connection info (printer id, API, WebSocket, Overview / Compact / Bar URLs).

### 3. Add overlays in OBS (optional)

Copy an Overview, Compact, or Bar URL from **Printers → Details**, then add Browser Sources in OBS. See [Overlays in OBS](../overlays/). No Streamer.bot connection is required for overlays.

### 4. Connect Streamer.bot (optional)

Open **Streamer.bot** and enter the WebSocket Server host, port, endpoint, and optional password from Streamer.bot → **Servers/Clients → WebSocket Server**. See [Connect Streamer.bot](../streamerbot/). Use this when you want Bridge to fire Streamer.bot actions on printer events — it is separate from overlays.

### 5. Use the local API (optional)

Overlays and other tools can call the same hub at `127.0.0.1:29067`. See [Overlay developer docs](../../overlay-developer/).

## Navigation

Every main page uses the same top nav: **Dashboard**, **Services**, **Printers**, **Streamer.bot**, and **Documentation** (opens [kinkajou.dev/bridge](https://kinkajou.dev/bridge/) in a new tab).

## Current limitations

Bridge is still early:

- Official packaged builds are **Windows-only** today; Mac/Linux run from source.
- Built-in Bambu Lab cloud discovery works for listing / adding printers from your account.
- Live Bambu MQTT, OctoPrint REST polling, and Moonraker REST polling are implemented for status/events; expect more polish across releases.
- Thumbnail retrieval may return “not implemented” until a plugin supports it.
