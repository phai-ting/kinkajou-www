---
title: Configure overlays in OBS
linkTitle: Configure in OBS
weight: 2
---

These steps assume **OBS Studio**. Other apps with a Browser Source (Streamlabs Desktop, etc.) are similar.

## Before you start

1. Install and run [Kinkajou Bridge](../getting-started/).
2. Add at least one printer.
3. Keep Bridge on the same PC as OBS (default API: `http://127.0.0.1:29067`).
4. Open **Printers → Details** and copy the overlay URL (or the printer id).

## Add a Browser Source (one per printer)

1. In OBS, under **Sources**, click **+** → **Browser**.
2. Name it after the printer (for example `P1S Overview`) and click **OK**.
3. Set **URL** to the overlay from Bridge:

   **Overview:**

   ```text
   http://127.0.0.1:29067/bridge/overview/?printer=YOUR_PRINTER_ID
   Add `&theme=light` for the light appearance (default is dark).
   ```

   **Compact:**

   ```text
   http://127.0.0.1:29067/bridge/compact/?printer=YOUR_PRINTER_ID
   ```

   These Bridge URLs are same-origin with the API, so Chromium will not prompt about accessing other apps or services on this device.

4. Set size (Width × Height):

   | Overlay | Start with |
   | --- | --- |
   | Overview | **520 × 270** |
   | Compact | **520 × 100** |
   | Status | **420 × 140** |
   | Progress | **480 × 160** |

5. Check **Shutdown source when not visible** if you want to save CPU when the scene is hidden.
6. Leave **Refresh browser when scene becomes active** enabled so the WebSocket reconnects cleanly when you switch scenes.
7. Click **OK**.
8. Repeat for each additional printer with a different `printer=` id.

## Find your printer id

1. In Bridge: **Printers → Details** — copy **Printer id** (or use the pre-built overlay links).
2. Or call `GET http://127.0.0.1:29067/v1/printers` and copy each object’s `id`.
3. If you omit `printer`, the overlay uses the first printer Bridge returns — fine for a single-printer setup, ambiguous with several.

## Tips

- Use a **transparent** background in OBS; these overlays use transparent page backgrounds.
- Compact uses a colored left accent + badge so print state (printing / paused / complete / error) is readable at a glance.
- Overview and Compact listen on Bridge’s `/v1/events` WebSocket and re-fetch status when that printer changes, while ticking remaining/elapsed locally each second.
- If the widget stays empty, confirm Bridge is running and that OBS can reach `127.0.0.1:29067` (same machine).
- Custom look? See the [overlay developer docs](../../../overlay-developer/).
