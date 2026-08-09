---
title: Install from source (Mac / Linux)
linkTitle: Mac / Linux
weight: 2
---

Windows users can use the [zipped EXE build](../getting-started/). On **macOS** and **Linux**, run Bridge from source with [uv](https://docs.astral.sh/uv/) (or another Python 3.12+ environment).

There is no official Mac/Linux binary yet — the Windows release package will not run on these platforms.

## Prerequisites

- [uv](https://docs.astral.sh/uv/) (recommended), or Python **3.12+** with pip
- Git
- A desktop session if you want the **system tray** icon (optional)

### Linux tray extras (optional)

Tray mode uses [pystray](https://github.com/moses-palmer/pystray). On many desktops you need AppIndicator support, for example:

- Debian / Ubuntu: `gir1.2-appindicator3-0.1` (or Ayatana AppIndicator packages)
- Fedora: `libayatana-appindicator-gtk3`

If tray setup is awkward, use **`--service`** (API only) — the web UI still works in your browser.

## Install

```bash
git clone https://github.com/phai-ting/kinkajou-bridge.git
cd kinkajou-bridge
uv sync
```

## Run

**Preferred on servers / SSH / headless Linux:**

```bash
uv run kinkajou-bridge --service
```

**Desktop session (tray when available):**

```bash
uv run kinkajou-bridge
```

With no GUI session (for example SSH without a display), Bridge starts **headless automatically**. Pass `--tray` only if you want to force tray mode.

Then open:

- Dashboard: `http://127.0.0.1:29067/ui/`
- First-run welcome (if shown): `http://127.0.0.1:29067/ui/welcome`

Override host/port if needed:

```bash
uv run kinkajou-bridge --service --port 9000
# or
export KINKAJOU_BRIDGE_PORT=9000
uv run kinkajou-bridge --service
```

## Data directory

Config and state live under:

```text
~/.kinkajou-bridge/
```

Custom overlays: `~/.kinkajou-bridge/overlays/custom/`.

## After Bridge is running

Same as on Windows: connect a service or add a LAN printer, then optionally OBS overlays and Streamer.bot. Continue with [Getting started](../getting-started/).

## Notes

- Only one Bridge instance runs per user data directory. Starting a second copy opens the existing dashboard.
- Streamer.bot is Windows-centric; Mac/Linux users typically use Bridge for overlays and the local API.
- Building a native Mac `.app` from Windows is not supported; Mac binaries must be built on macOS (or CI).
