---
title: Custom overlays
weight: 2
---

Bridge can serve **your own** HTML/CSS/JS overlays from a folder on disk. Drop a folder in, point OBS at the URL — no rebuild of Bridge required.

## Where to put files

On first launch Bridge creates:

```text
%USERPROFILE%\.kinkajou-bridge\overlays\custom\
```

(or `$HOME/.kinkajou-bridge/overlays/custom/` on macOS/Linux)

That folder includes **`Put custom overlays here.txt`** with the same instructions. Open it in Explorer/Finder when you need the path.

Create one subdirectory per overlay:

```text
.kinkajou-bridge/overlays/custom/
  Put custom overlays here.txt
  my-overlay/
    index.html
    overlay.css      # optional
    overlay.js       # optional
```

## URL

```text
http://127.0.0.1:29067/bridge/custom/<folder-name>/?printer=YOUR_PRINTER_ID
```

Example:

```text
http://127.0.0.1:29067/bridge/custom/my-overlay/?printer=abc123&theme=light
```

Same query parameters as the built-ins: `printer`, `theme`, `token`, `interval` (see the [catalog](../../user/overlays/catalog/)).

## Minimal page

Use Bridge’s shared helper with an **absolute** path (relative `../_shared/` only works for built-in overlays under `/bridge/`):

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>My overlay</title>
    <script src="/bridge/_shared/bridge-client.js"></script>
  </head>
  <body>
    <div id="name">—</div>
    <div id="state">—</div>
    <script>
      KinkajouBridge.watchPrinter({
        onUpdate(update) {
          const status = update.status || {};
          document.getElementById("name").textContent =
            (update.printer && update.printer.name) || "Printer";
          document.getElementById("state").textContent =
            status.print_state || "unknown";
        },
        onError(err) {
          document.getElementById("state").textContent = err.message || String(err);
        },
      });
    </script>
  </body>
</html>
```

You can also skip the helper and call the [HTTP & WebSocket API](../api/) with plain `fetch` / `WebSocket`.

## Tips

- Copy a built-in overlay from the Bridge package (`overview`, `compact`, `status`, `progress`) as a starting point, then simplify.
- Keep secrets out of overlay files; if you set an API token, pass `?token=…` on the Browser Source URL.
- Custom overlays survive Bridge upgrades because they live in your data directory, not inside the app install.
- Hosting the page somewhere else (GitHub Pages, a CDN) still works via CORS — use `?host=http://127.0.0.1:29067` so the page knows where Bridge is.
