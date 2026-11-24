/**
 * Gera MP3s de narração a partir das transcripts do question-screen-data.js
 * via o proxy TecnoCursos (texttospeech.escolatecnocursos.cloud).
 *
 * Uso:
 *   node generate-qs-audios-proxy.js --module=1
 *   node generate-qs-audios-proxy.js nr11-m1-capa nr11-m1-cartao
 *   node generate-qs-audios-proxy.js --module=1 --dry-run
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = __dirname;
const DATA_PATH = path.join(ROOT, 'question-screen-data.js');
const OUTPUT_DIR = path.join(ROOT, 'audios');
const API_BASE = 'https://texttospeech.escolatecnocursos.cloud';

function loadEnvFile() {
  for (const filename of ['.env', '.env.local']) {
    const envPath = path.join(ROOT, filename);
    if (!fs.existsSync(envPath)) continue;
    for (const line of fs.readFileSync(envPath, 'utf8').split('\n')) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const eq = trimmed.indexOf('=');
      if (eq === -1) continue;
      const key = trimmed.slice(0, eq).trim();
      const value = trimmed.slice(eq + 1).trim().replace(/^["']|["']$/g, '');
      if (!process.env[key]) process.env[key] = value;
    }
  }
}

function loadSession() {
  const code = fs.readFileSync(DATA_PATH, 'utf8');
  const sandbox = { window: {}, console };
  vm.runInNewContext(code, sandbox, { filename: 'question-screen-data.js' });
  return sandbox.window.QUESTION_SCREEN_SESSION;
}

function parseArgs(argv) {
  const options = { module: null, dryRun: false, ids: [] };
  for (const arg of argv) {
    if (arg === '--dry-run') options.dryRun = true;
    else if (arg.startsWith('--module=')) options.module = Number(arg.slice('--module='.length));
    else if (!arg.startsWith('-')) options.ids.push(arg.replace(/^--slide=/, ''));
  }
  return options;
}

function collectSlides(session, options) {
  const out = [];
  (session.modules || []).forEach(function (mod) {
    if (options.module != null && Number(mod.id) !== options.module) return;
    (mod.screens || []).forEach(function (screen) {
      if (options.ids.length && options.ids.indexOf(screen.id) === -1) return;
      const text = String(screen.transcript || '').replace(/\s+/g, ' ').trim();
      if (!text) return;
      out.push({
        id: screen.id,
        title: screen.title || screen.question || screen.id,
        text: text,
        file: path.join('audios', screen.id.toLowerCase() + '.mp3')
      });
    });
  });
  return out;
}

async function login() {
  const res = await fetch(`${API_BASE}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: process.env.AUTH_USERNAME,
      password: process.env.AUTH_PASSWORD
    })
  });
  if (!res.ok) throw new Error(`Login falhou (${res.status}): ${await res.text()}`);
  const data = await res.json();
  return data.token;
}

async function synthesize(text, token) {
  const res = await fetch(`${API_BASE}/api/tts`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ text })
  });
  if (!res.ok) throw new Error(`TTS falhou (${res.status}): ${await res.text()}`);
  return Buffer.from(await res.arrayBuffer());
}

async function main() {
  loadEnvFile();
  const options = parseArgs(process.argv.slice(2));
  if (options.module == null && !options.ids.length) {
    console.error('Informe --module=N ou ids. Ex.: node generate-qs-audios-proxy.js --module=1');
    process.exit(1);
  }
  if (!options.dryRun && (!process.env.AUTH_USERNAME || !process.env.AUTH_PASSWORD)) {
    console.error('Defina AUTH_USERNAME e AUTH_PASSWORD no .env');
    process.exit(1);
  }

  const session = loadSession();
  const slides = collectSlides(session, options);
  if (!slides.length) {
    console.error('Nenhuma tela encontrada com transcript.');
    process.exit(1);
  }

  console.log(`Telas: ${slides.length}`);
  slides.forEach(function (s) {
    console.log(`- ${s.id} (${s.text.length} chars)`);
  });

  if (options.dryRun) {
    console.log('\nDry-run: nenhum áudio gerado.');
    return;
  }

  console.log('\nAutenticando no proxy...');
  const token = await login();
  console.log('Login ok.\n');

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  for (const slide of slides) {
    process.stdout.write(`▶ ${slide.id}... `);
    try {
      const audio = await synthesize(slide.text, token);
      const outputPath = path.join(ROOT, slide.file);
      fs.writeFileSync(outputPath, audio);
      console.log(`ok (${audio.length} bytes) -> ${slide.file}`);
    } catch (error) {
      console.log('falhou');
      console.error(`  ${error.message}`);
    }
  }
}

main().catch(function (error) {
  console.error(error);
  process.exit(1);
});
