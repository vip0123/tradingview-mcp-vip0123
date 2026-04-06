# TradingView MCP — Command Reference

Complete mapping of all 81 MCP tool names to their CLI equivalents.  
Both forms are fully supported — use whichever fits your workflow.

```
MCP:  tv tv_health_check
CLI:  tv status
```

---

## Health & Connection

| MCP Tool Name | CLI Command | Description |
|---|---|---|
| `tv_health_check` | `tv status` | Check CDP connection and return chart state |
| `tv_launch` | `tv launch` | Launch TradingView Desktop with remote debugging |
| `tv_discover` | `tv discover` | Report available TradingView API paths and methods |
| `tv_ui_state` | `tv ui-state` | Get current UI state (panels, buttons) |

## Chart

| MCP Tool Name | CLI Command | Description |
|---|---|---|
| `chart_get_state` | `tv state` | Get chart state (symbol, timeframe, indicators) |
| `chart_set_symbol` | `tv symbol <sym>` | Change chart symbol |
| `chart_set_timeframe` | `tv timeframe <tf>` | Change chart timeframe/resolution |
| `chart_set_type` | `tv type <type>` | Change chart type (Candles, Line, etc.) |
| `chart_get_visible_range` | `tv range` | Get visible date range (unix timestamps) |
| `chart_set_visible_range` | `tv range --from <ts> --to <ts>` | Zoom to specific date range |
| `chart_scroll_to_date` | `tv scroll <date>` | Jump chart to center on a date |
| `chart_manage_indicator` | `tv indicator add/remove` | Add or remove indicator on chart |
| `symbol_info` | `tv info` | Get metadata about current symbol |
| `symbol_search` | `tv search <query>` | Search for symbols by name |

## Data & Quotes

| MCP Tool Name | CLI Command | Description |
|---|---|---|
| `quote_get` | `tv quote` | Real-time quote (price, OHLC, volume) |
| `data_get_ohlcv` | `tv ohlcv` | OHLCV bar data (use `--summary` for compact) |
| `data_get_study_values` | `tv values` | Current values from all visible indicators |
| `data_get_pine_lines` | `tv data lines` | Price levels drawn by Pine `line.new()` |
| `data_get_pine_labels` | `tv data labels` | Text labels drawn by Pine `label.new()` |
| `data_get_pine_tables` | `tv data tables` | Table data from Pine `table.new()` |
| `data_get_pine_boxes` | `tv data boxes` | Box zones from Pine `box.new()` |
| `data_get_strategy_results` | `tv data strategy` | Strategy performance metrics |
| `data_get_trades` | `tv data trades` | Trade list from Strategy Tester |
| `data_get_equity` | `tv data equity` | Equity curve from Strategy Tester |
| `data_get_indicator` | `tv data indicator` | Indicator info and input values |
| `depth_get` | `tv data depth` | Order book / DOM data |

## Pine Script

| MCP Tool Name | CLI Command | Description |
|---|---|---|
| `pine_get_source` | `tv pine get` | Get Pine source from editor |
| `pine_set_source` | `tv pine set` | Set Pine source in editor |
| `pine_smart_compile` | `tv pine compile` | Smart compile with error check |
| `pine_compile` | `tv pine raw-compile` | Raw compile / add to chart |
| `pine_analyze` | `tv pine analyze` | Static analysis (offline, no connection) |
| `pine_check` | `tv pine check` | Server-side compile check |
| `pine_save` | `tv pine save` | Save current Pine Script |
| `pine_new` | `tv pine new` | Create new blank script |
| `pine_open` | `tv pine open` | Open saved script by name |
| `pine_list_scripts` | `tv pine list` | List saved Pine Scripts |
| `pine_get_errors` | `tv pine errors` | Get compilation errors |
| `pine_get_console` | `tv pine console` | Read console/log output |

## Screenshots

| MCP Tool Name | CLI Command | Description |
|---|---|---|
| `capture_screenshot` | `tv screenshot` | Screenshot the chart |

## Replay

| MCP Tool Name | CLI Command | Description |
|---|---|---|
| `replay_start` | `tv replay start` | Enter replay mode at a date |
| `replay_step` | `tv replay step` | Advance one bar |
| `replay_stop` | `tv replay stop` | Return to realtime |
| `replay_status` | `tv replay status` | Current replay state |
| `replay_autoplay` | `tv replay autoplay` | Toggle autoplay |
| `replay_trade` | `tv replay trade` | Execute buy/sell/close in replay |

## Drawing

| MCP Tool Name | CLI Command | Description |
|---|---|---|
| `draw_shape` | `tv draw shape` | Draw a shape/line on chart |
| `draw_list` | `tv draw list` | List all drawings |
| `draw_get_properties` | `tv draw get` | Get drawing properties |
| `draw_remove_one` | `tv draw remove` | Remove drawing by ID |
| `draw_clear` | `tv draw clear` | Remove all drawings |

## Alerts

| MCP Tool Name | CLI Command | Description |
|---|---|---|
| `alert_create` | `tv alert create` | Create a price alert |
| `alert_list` | `tv alert list` | List active alerts |
| `alert_delete` | `tv alert delete` | Delete alerts |

## Watchlist

| MCP Tool Name | CLI Command | Description |
|---|---|---|
| `watchlist_get` | `tv watchlist get` | Get all watchlist symbols |
| `watchlist_add` | `tv watchlist add` | Add symbol to watchlist |

## Indicators

| MCP Tool Name | CLI Command | Description |
|---|---|---|
| `indicator_set_inputs` | `tv indicator set` | Change indicator inputs |
| `indicator_toggle_visibility` | `tv indicator toggle` | Show/hide indicator |

## Layout

| MCP Tool Name | CLI Command | Description |
|---|---|---|
| `layout_list` | `tv layout list` | List saved layouts |
| `layout_switch` | `tv layout switch` | Switch to saved layout |

## UI Automation

| MCP Tool Name | CLI Command | Description |
|---|---|---|
| `ui_click` | `tv ui click` | Click element by label/text |
| `ui_open_panel` | `tv ui panel` | Open/close/toggle panels |
| `ui_fullscreen` | `tv ui fullscreen` | Toggle fullscreen |
| `ui_keyboard` | `tv ui keyboard` | Press keys/shortcuts |
| `ui_type_text` | `tv ui type` | Type text into input |
| `ui_hover` | `tv ui hover` | Hover over element |
| `ui_scroll` | `tv ui scroll` | Scroll chart/page |
| `ui_mouse_click` | `tv ui mouse` | Click at x,y coordinates |
| `ui_find_element` | `tv ui find` | Find elements by selector |
| `ui_evaluate` | `tv ui eval` | Execute JS in page context |

## Panes

| MCP Tool Name | CLI Command | Description |
|---|---|---|
| `pane_list` | `tv pane list` | List chart panes |
| `pane_set_layout` | `tv pane layout` | Change grid layout |
| `pane_focus` | `tv pane focus` | Focus pane by index |
| `pane_set_symbol` | `tv pane symbol` | Set symbol on pane |

## Tabs

| MCP Tool Name | CLI Command | Description |
|---|---|---|
| `tab_list` | `tv tab list` | List open tabs |
| `tab_new` | `tv tab new` | Open new tab |
| `tab_close` | `tv tab close` | Close current tab |
| `tab_switch` | `tv tab switch` | Switch to tab by index |

## Morning Brief

| MCP Tool Name | CLI Command | Description |
|---|---|---|
| `morning_brief` | `tv brief` | Scan watchlist for session brief |
| `session_save` | `tv session save` | Save today's brief |
| `session_get` | `tv session get` | Retrieve saved brief |

## Batch

| MCP Tool Name | CLI Command | Description |
|---|---|---|
| `batch_run` | *(MCP only)* | Run action across multiple symbols/timeframes |

## Streaming (CLI only)

These are CLI-only commands with no MCP equivalent:

| CLI Command | Description |
|---|---|
| `tv stream quote` | Stream real-time quotes |
| `tv stream bars` | Stream OHLCV bars |
| `tv stream values` | Stream indicator values |
| `tv stream lines` | Stream Pine lines |
| `tv stream labels` | Stream Pine labels |
| `tv stream tables` | Stream Pine tables |
| `tv stream all` | Stream everything |

---

## Quick Examples

```bash
# Using MCP tool names from the terminal
tv tv_health_check
tv chart_get_state
tv quote_get
tv data_get_pine_lines --study-filter "Supertrend"
tv pine_get_errors
tv capture_screenshot --region chart

# Using CLI shorthand (same results)
tv status
tv state
tv quote
tv data lines --study-filter "Supertrend"
tv pine errors
tv screenshot --region chart
```

## Architecture

```
CLI (tv command)          MCP Server (@modelcontextprotocol/sdk)
      │                              │
      ├── router.js ← aliases.js    ├── tools/*.js (server.tool registrations)
      ├── commands/*.js              │
      │                              │
      └────────── core/*.js ─────────┘
                     │
              connection.js (CDP)
                     │
           TradingView Desktop (port 9222)
```

Both CLI and MCP share the same `core/` layer. The alias system maps MCP tool names
to CLI commands so either naming convention works from the terminal.
