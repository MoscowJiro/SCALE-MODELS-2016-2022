param([ValidateSet('all','pdf','png')][string]$Mode='all',[ValidateRange(1,32)][int]$Page=0)
$root=Split-Path -Parent $MyInvocation.MyCommand.Path
$bundle='C:\Users\86137\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\node_modules'
if(Test-Path -LiteralPath $bundle){$env:NODE_PATH=$bundle}
try{Invoke-WebRequest -Uri 'http://127.0.0.1:8765' -TimeoutSec 2 | Out-Null}catch{throw 'Start the local server first: node work/server.js'}
Push-Location $root
try{if($Page){node work/export.js $Page}else{node work/export.js $Mode};if($LASTEXITCODE -ne 0){throw 'Export failed. Install Playwright with npm install if it is unavailable.'}}finally{Pop-Location}
