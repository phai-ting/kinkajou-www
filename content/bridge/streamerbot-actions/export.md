---
title: Streamer.bot export
weight: 3
---

The **`Kinkajou Bridge`** router action (C# source + Streamer.bot `.sb` import) lives in the Bridge repo:

**[github.com/phai-ting/kinkajou-bridge/tree/main/streamerbot](https://github.com/phai-ting/kinkajou-bridge/tree/main/streamerbot)**

## Quick start

1. Download or open [`KinkajouBridge.sb`](https://github.com/phai-ting/kinkajou-bridge/blob/main/streamerbot/KinkajouBridge.sb).
2. In Streamer.bot, use **Import** and load that file.
3. Create your own actions named like `Kinkajou - Print Started` for events you care about — see [Actions and arguments](../actions-and-args/).

Re-importing the export only refreshes the router; it does not overwrite your `Kinkajou - …` handlers.
