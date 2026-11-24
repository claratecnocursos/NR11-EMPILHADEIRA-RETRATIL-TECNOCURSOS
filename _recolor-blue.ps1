$path = Join-Path $PSScriptRoot 'question-screen.css'
$c = [IO.File]::ReadAllText($path)

# Sombras / overlays do verde antigo
$c = $c.Replace('rgba(30, 82, 20,', 'rgba(2, 132, 199,')
$c = $c.Replace('rgba(242, 255, 243,', 'rgba(240, 249, 255,')

# Paleta :root — azul claro + azul um pouco mais escuro
$root = @'
/* QuestionScreen - azul claro #56d5ff / #38bdf8 e azul mais escuro #0284c7 / #0369a1 */

:root {
  --qs-green: #0369a1;
  --qs-green-2: #0284c7;
  --qs-green-3: #0c4a6e;
  --qs-green-4: #082f49;
  --qs-navy: #0c4a6e;
  --qs-navy-2: #0284c7;
  --qs-navy-3: #0369a1;
  --qs-red: #0369a1;
  --qs-red-dk: #0284c7;
  --qs-red-lt: #56d5ff;
  --qs-pink: #38bdf8;
  --qs-pink-dk: #00bbf9;
  --qs-nok: #C45A7A;
  --qs-nok-dk: #A34462;
  --qs-ok: #0284c7;
  --qs-ok-dk: #0369a1;
  --qs-ink: #0c4a6e;
  --qs-muted: #38bdf8;
  --qs-paper: #ffffff;
  --qs-soft: #e0f2fe;
  --qs-font-h: 'Montserrat', sans-serif;
  --qs-font-b: 'Open Sans', sans-serif;
  --qs-radius: 22px;
  --qs-radius-sm: 14px;
}
'@

$c = [regex]::Replace($c, '(?s)/\* QuestionScreen.*?\n:root \{.*?\n\}', $root.TrimEnd())

# Fundo da sessão — azul claro dominante
$c = [regex]::Replace($c, '(?s)(\.qs-app \{[^}]*?background:\s*)[^;]+;', @'
$1
    radial-gradient(ellipse 72% 58% at 100% 0%, rgba(125, 211, 252, 0.65) 0%, transparent 44%),
    radial-gradient(ellipse 58% 48% at 0% 100%, rgba(56, 189, 248, 0.5) 0%, transparent 52%),
    linear-gradient(168deg, #0284c7 0%, #38bdf8 48%, #7dd3fc 100%);
'@)

# Hex verdes → azuis (mais escuros primeiro para não colidir)
$map = [ordered]@{
  '#040c04' = '#041428'
  '#061006' = '#061830'
  '#081408' = '#082038'
  '#081806' = '#082840'
  '#0a1a08' = '#0a3050'
  '#0c180c' = '#0c2848'
  '#0c2208' = '#0c3a60'
  '#0c280c' = '#0c3860'
  '#0e240a' = '#0e4068'
  '#0e3010' = '#0e4a78'
  '#0e3812' = '#0e5288'
  '#102810' = '#103858'
  '#121a10' = '#122840'
  '#123212' = '#124a78'
  '#142e0c' = '#144a78'
  '#162816' = '#163850'
  '#16360c' = '#165088'
  '#163e10' = '#165a98'
  '#1a3a10' = '#1a6298'
  '#1c4210' = '#1c6aa8'
  '#1e3324' = '#1e3a58'
  '#1e420e' = '#1e72b0'
  '#214e14' = '#2178b8'
  '#234018' = '#234860'
  '#243018' = '#243850'
  '#244422' = '#245070'
  '#245816' = '#2480c0'
  '#2a5414' = '#2a7ab0'
  '#2a7018' = '#2a90c8'
  '#2c681c' = '#2c88c0'
  '#2c7014' = '#2c90c8'
  '#314628' = '#314860'
  '#3a7a28' = '#3a9ad0'
  '#4a8c34' = '#4aacd8'
  '#4e9a28' = '#4eb8e0'
  '#5a8a2a' = '#5ab8e0'
  '#5c9816' = '#5cc0e8'
  '#62b030' = '#62c8f0'
  '#67b51c' = '#67d0f5'
  '#74c41e' = '#74d8fa'
  '#7cffb2' = '#7ce8ff'
  '#a6e84a' = '#a6e8ff'
  '#a8e24e' = '#a8e4ff'
  '#c6e4c4' = '#c6e4f0'
  '#c6e6c0' = '#c6e8f4'
  '#c6f27a' = '#c6f0ff'
  '#c8f078' = '#c8f2ff'
  '#c9d6c4' = '#c9d6e4'
  '#d4f0a4' = '#d4f0ff'
  '#d7e4c4' = '#d7e4f0'
  '#ddf7a8' = '#ddf7ff'
  '#e4eee1' = '#e4eef8'
  '#e5f7c6' = '#e5f7ff'
  '#e6f0e3' = '#e6f0f8'
  '#e6f3e2' = '#e6f3fa'
  '#e7f8c4' = '#e7f8ff'
  '#e8f1e5' = '#e8f1fa'
  '#e8f4e4' = '#e8f4fc'
  '#e8f8ca' = '#e8f8ff'
  '#e9f8cc' = '#e9f8ff'
  '#eef7f3' = '#eef7fc'
  '#f2fff3' = '#f2faff'
  '#f4f8f1' = '#f4f8fc'
  '#f4faee' = '#f4fafc'
  '#f4fbe8' = '#f4fbfe'
  '#f6fbf1' = '#f6fbfe'
  '#f7fcec' = '#f7fcfe'
  '#f8fdee' = '#f8fdfe'
  '#fafef5' = '#fafefe'
  '#1f9d55' = '#0284c7'
  '#167a41' = '#0369a1'
  '#059669' = '#0284c7'
  '#047857' = '#0369a1'
  '#2bb673' = '#38bdf8'
  '#34d399' = '#7dd3fc'
  '#0a3d5c' = '#0369a1'
  '#0d3558' = '#0284c7'
  '#082038' = '#0c4a6e'
  '#050b1c' = '#082f49'
  '#042033' = '#0c4a6e'
  '#0a1628' = '#0c4a6e'
  '#0077a8' = '#0284c7'
}

foreach ($k in $map.Keys) {
  $c = $c.Replace($k, $map[$k])
  $c = $c.Replace($k.ToUpper(), $map[$k])
}

# Home background
$c = $c.Replace('background: #082f49;', 'background: #0c4a6e;')

[IO.File]::WriteAllText($path, $c)
Write-Output 'recolor done'
