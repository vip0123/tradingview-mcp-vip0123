# Setup Guide

Step-by-step guide for AI agents (Claude Code, VS Code Copilot) or manual setup of the TradingView MCP server. If a user asks you to install or set up this project, follow these steps exactly.

## Step 1: Clone and Install

```bash
git clone https://github.com/vip0123/tradingview-mcp-vip0123.git
cd tradingview-mcp-vip0123
npm install
```

If the user specifies a different install path, use that instead.

## Step 2: Set Up Rules

Copy the example rules file and open it for the user to fill in:

```bash
cp rules.example.json rules.json
```

Tell the user: "Open `rules.json` and fill in your watchlist (the symbols you trade), your bias criteria (what makes something bullish/bearish for you), and your risk rules. This is what the morning brief uses every day."

## Step 3: Add to MCP Config

### Claude Code

Add the server to `~/.claude/.mcp.json` (global) or `.mcp.json` (project-level):

```json
{
  "mcpServers": {
    "tradingview": {
      "command": "node",
      "args": ["FULL_PATH_TO/tradingview-mcp-vip0123/src/server.js"]
    }
  }
}
```

Replace `FULL_PATH_TO` with the actual path. Use forward slashes on Mac/Linux, backslashes or double-backslashes on Windows.

### VS Code Copilot

Already configured — `.vscode/mcp.json` is included. Just open this folder in VS Code and Copilot will auto-detect the MCP server.

If the config file already exists and has other servers, merge the `tradingview` entry into the existing `mcpServers` object. Do not overwrite other servers.

## Step 4: Launch TradingView Desktop

TradingView Desktop must be running with Chrome DevTools Protocol enabled.

**Windows (recommended):**
```powershell
.\TradingView.ps1
```
This script auto-detects TradingView (including Microsoft Store version), kills existing instances, launches with CDP on port 9222, waits for readiness, and validates the chart target.

Alternative: `scripts\launch_tv_debug.bat`

**Mac:**
```bash
./scripts/launch_tv_debug_mac.sh
```

**Linux:**
```bash
./scripts/launch_tv_debug_linux.sh
```

**From MCP (any platform):**
After the MCP server is connected, use the `tv_launch` tool — it auto-detects TradingView on Mac, Windows, and Linux.

## Step 5: Restart Your AI Tool

The MCP server only loads on startup:

- **Claude Code**: Exit (Ctrl+C), relaunch
- **VS Code Copilot**: Reload window (Ctrl+Shift+P → "Developer: Reload Window")

The tradingview MCP server should connect automatically.

## Step 6: Verify Connection

Use the `tv_health_check` tool, or from terminal:

```bash
tv status
# or: tv tv_health_check
```

Expected response:

```json
{
  "success": true,
  "cdp_connected": true,
  "chart_symbol": "...",
  "api_available": true
}
```

If `cdp_connected: false`, TradingView is not running with `--remote-debugging-port=9222`.

## Step 7: Run Your First Morning Brief

Ask your AI: *"Run morning_brief and give me my session bias"*

It will scan your watchlist, read indicators, apply `rules.json` criteria, and print bias for each symbol.

To save it: *"Save this brief using session_save"*

To retrieve tomorrow: *"Get yesterday's session using session_get"*

## Step 8: Install CLI (Optional)

To use the `tv` CLI command globally:

```bash
cd tradingview-mcp-vip0123
npm link
```

Then both CLI names and MCP tool names work from anywhere:

```bash
tv status              # CLI shorthand
tv tv_health_check     # MCP tool name — same result
tv chart_get_state     # MCP tool name
tv state               # CLI shorthand — same result
```

## Troubleshooting

| Problem | Solution |
|---------|----------|
| `cdp_connected: false` | Launch TradingView with `--remote-debugging-port=9222` |
| `ECONNREFUSED` | TradingView isn't running or port 9222 is blocked |
| MCP server not showing | Check config syntax, restart Claude Code / reload VS Code |
| `tv` command not found | Run `npm link` from the project directory |
| Windows Store TradingView won't launch | Use `TradingView.ps1` (auto-detects Store apps) |
| Port 9222 already in use | Kill all TradingView processes first, then relaunch |
| Tools return stale data | TradingView may still be loading — wait a few seconds |
| Pine Editor tools fail | Open the Pine Editor panel first (`ui_open_panel pine-editor open`) |

## What to Read Next

- `rules.json` — Your personal trading rules (fill this in before using morning_brief)
- `COMMANDS.md` — Complete mapping of all 81 MCP tool names to CLI commands
- `CLAUDE.md` — Decision tree for which tool to use when (auto-loaded by Claude Code)
- `README.md` — Full tool reference including morning brief workflow
- `RESEARCH.md` — Research context and open questions
