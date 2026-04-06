# TradingView MCP Launcher — starts TradingView Desktop with CDP on port 9222
$Port = 9222
$TvExe = "C:\Program Files\WindowsApps\TradingView.Desktop_3.0.0.7652_x64__n534cwy3pjxzj\TradingView.exe"

# Kill existing instances to free the debug port
$procs = Get-Process -Name "TradingView" -ErrorAction SilentlyContinue
if ($procs) {
    Write-Host "[TV] Killing $($procs.Count) existing TradingView process(es)..." -ForegroundColor Yellow
    $procs | Stop-Process -Force
    Start-Sleep -Seconds 2
} else {
    Write-Host "[TV] No existing TradingView processes." -ForegroundColor DarkGray
}

# Launch
Write-Host "[TV] Starting TradingView with --remote-debugging-port=$Port" -ForegroundColor Cyan
Start-Process -FilePath $TvExe -ArgumentList "--remote-debugging-port=$Port"

# Wait for CDP
Write-Host "[TV] Waiting for CDP on port $Port..." -ForegroundColor DarkGray
$attempts = 0
$maxAttempts = 15
while ($attempts -lt $maxAttempts) {
    Start-Sleep -Seconds 2
    $attempts++
    try {
        $r = Invoke-WebRequest -Uri "http://localhost:$Port/json/version" -UseBasicParsing -TimeoutSec 2 -ErrorAction Stop
        $ver = ($r.Content | ConvertFrom-Json).Browser
        Write-Host "[TV] CDP ready — $ver" -ForegroundColor Green

        # Check for chart target
        $targets = (Invoke-WebRequest -Uri "http://localhost:$Port/json/list" -UseBasicParsing -TimeoutSec 2).Content | ConvertFrom-Json
        $chart = $targets | Where-Object { $_.url -match "tradingview\.com/chart" }
        if ($chart) {
            Write-Host "[TV] Chart found: $($chart.title)" -ForegroundColor Green
        } else {
            Write-Host "[TV] No chart open yet — open a chart in TradingView to use MCP tools." -ForegroundColor Yellow
        }
        Write-Host "[TV] Ready. Use 'tv status' or 'node src/cli/index.js status' to verify." -ForegroundColor Cyan
        return
    } catch {
        Write-Host "[TV] Attempt $attempts/$maxAttempts — waiting..." -ForegroundColor DarkGray
    }
}
Write-Host "[TV] Timed out waiting for CDP on port $Port." -ForegroundColor Red