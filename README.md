
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>thefilmydj_</title>
<style>
  :root{
    --bg1:#0f1724; --bg2:#1e3a5f;
    --brand-red:#ff2b2b;
    --glass: rgba(255,255,255,0.06);
    --ui-bg: rgba(0,0,0,0.55);
    --logo-scale: 1;
    --panel-translate: 0px;
    --smoke-opacity: 0;
    --site-blur: 0px;
    --site-opacity: 1;
    --site-font: "Inter", Arial, sans-serif;
  }
  *{box-sizing:border-box}
  html,body{height:100%}
  body{
    margin:0;
    font-family:var(--site-font);
    color:#fff;
    background: linear-gradient(120deg,var(--bg1),var(--bg2));
    background-size:400% 400%;
    transition: background .4s ease, filter .25s ease;
    overflow-x:hidden;
    filter: blur(var(--site-blur));
    opacity: var(--site-opacity);
  }

  /* Loader (small) */
  #loader{position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:transparent;z-index:9999;pointer-events:none}
  #loader .dot{width:10px;height:10px;margin:6px;border-radius:50%;background:#fff;animation:lds 1s infinite}
  @keyframes lds{0%{transform:scale(.6);opacity:.3}50%{transform:scale(1.2);opacity:1}100%{transform:scale(.6);opacity:.3}}

  header{
    display:flex;
    align-items:center;
    gap:18px;
    padding:18px 22px;
    position:relative;
    z-index:50;
  }

  .logo-circle{
    width:88px;height:88px;border-radius:50%;
    background: url('YOUR_LOGO_URL_HERE') center/cover;
    border:3px solid rgba(255,255,255,0.12);
    box-shadow:0 8px 28px rgba(0,0,0,.6);
    transform-origin:center;
    transition: transform .6s ease, box-shadow .3s ease;
    will-change: transform;
  }
  /* animated class toggles transform */
  .logo-animate{ animation: logoFloat 4s ease-in-out infinite; }
  @keyframes logoFloat{0%{transform:translateY(0) rotate(0) scale(var(--logo-scale));}50%{transform:translateY(-10px) rotate(-4deg) scale(calc(var(--logo-scale) + 0.02));}100%{transform:translateY(0) rotate(0) scale(var(--logo-scale));} }

  /* brand (full red, low glow) */
  .brand{
    font-size:40px;
    font-weight:900;
    color:var(--brand-red);
    letter-spacing:0.6px;
    text-shadow:0 0 6px var(--brand-red);
    line-height:1;
  }
  .brand small{display:block;font-weight:500;color:#ffd789;margin-top:6px;font-size:14px}

  /* top small controls (right) */
  .top-controls{position:fixed;top:18px;right:18px;display:flex;gap:12px;z-index:2000}
  .ctrl-btn{background:rgba(255,255,255,0.06);padding:8px 10px;border-radius:10px;cursor:pointer;border:1px solid rgba(255,255,255,0.06);font-size:18px}
  .ctrl-btn:active{transform:translateY(1px)}

  /* menu */
  .menu{display:flex;gap:12px;padding:18px 26px 10px 26px;flex-wrap:wrap}
  .menu button{background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.06);padding:10px 16px;border-radius:999px;color:white;cursor:pointer;font-weight:600}
  .menu button:hover{transform:translateY(-4px);box-shadow:0 12px 30px rgba(0,0,0,.5)}

  /* right panel */
  .photo-box{
    width:360px;height:360px;border-radius:24px;background: url('YOUR_PANEL_PHOTO_URL_HERE') center/cover;
    position: absolute; right:40px; top:200px; border:3px solid rgba(255,255,255,0.06);
    box-shadow:0 20px 60px rgba(0,0,0,0.6);
    transition: transform .8s ease, filter .4s ease;
    will-change: transform;
    overflow:hidden;
  }
  .panel-animate{ animation: panelFloat 6s ease-in-out infinite; }
  @keyframes panelFloat{0%{transform:translateY(0) rotate(0) translateX(var(--panel-translate));}50%{transform:translateY(-12px) rotate(1deg) translateX(calc(var(--panel-translate) * -1));}100%{transform:translateY(0) rotate(0) translateX(var(--panel-translate));} }

  /* neon outline */
  .photo-box::after{content:"";position:absolute;inset:0;border-radius:24px;box-shadow:inset 0 0 40px rgba(255,255,255,0.02);pointer-events:none}

  /* smoke overlay */
  .smoke{
    position:fixed;inset:0;pointer-events:none;mix-blend-mode:screen;opacity:var(--smoke-opacity);z-index:40;
    background:
      radial-gradient(closest-side, rgba(255,255,255,0.03), transparent 60%),
      radial-gradient(closest-side, rgba(255,255,255,0.02), transparent 60%),
      linear-gradient(180deg, rgba(255,255,255,0.01), rgba(255,255,255,0.02));
    animation: smokeMove 18s linear infinite;
    transform:translateZ(0);
  }
  @keyframes smokeMove{0%{background-position:0% 0%}50%{background-position:50% 100%}100%{background-position:0% 0%}}

  /* floating emojis */
  .emoji{position:fixed;font-size:24px;opacity:.95;pointer-events:none;animation:floatUp linear infinite}
  @keyframes floatUp{0%{transform:translateY(0) rotate(0)}100%{transform:translateY(-120vh) rotate(720deg)}}

  /* study cards */
  .cards{position:fixed;left:24px;bottom:24px;display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:12px;width:420px;z-index:30}
  .card{background:rgba(255,255,255,0.04);padding:12px;border-radius:12px;border:1px solid rgba(255,255,255,0.06);backdrop-filter:blur(6px)}
  .card h4{margin:0 0 6px;font-size:15px} .card p{margin:0;color:#cbd5e1;font-size:13px}

  /* contact popup */
  .contact-popup{position:fixed;inset:0;display:none;align-items:center;justify-content:center;background:rgba(0,0,0,0.6);z-index:3000}
  .popup-content{width:92%;max-width:380px;background:rgba(255,255,255,0.04);backdrop-filter:blur(10px);padding:20px;border-radius:14px;border:1px solid rgba(255,255,255,0.08)}
  .popup-content input,.popup-content textarea{width:100%;padding:10px;margin:8px 0;border-radius:8px;border:none;background:rgba(255,255,255,0.07);color:#fff}
  .popup-actions{display:flex;gap:10px}
  .btn-primary{background:var(--brand-red);border:none;color:#fff;padding:10px;border-radius:8px;cursor:pointer;font-weight:700}
  .btn-ghost{background:transparent;border:1px solid rgba(255,255,255,0.08);color:#fff;padding:10px;border-radius:8px;cursor:pointer}

  /* settings panel content */
  .settings-panel{position:fixed;top:70px;right:20px;width:340px;background:rgba(0,0,0,0.65);padding:14px;border-radius:12px;display:none;z-index:2000;color:#fff}
  .settings-row{display:flex;gap:10px;align-items:center;margin-bottom:10px}
  .label{font-size:13px;color:#d1d5db;width:120px}
  .small{font-size:13px;color:#d1d5db}

  .theme-swatch{width:44px;height:34px;border-radius:8px;cursor:pointer;border:2px solid rgba(255,255,255,0.06)}

  /* small responsive adjustments */
  @media(max-width:900px){
    .photo-box{display:none}
    .cards{position:static;width:calc(100% - 40px);left:20px;bottom:20px}
    .menu{padding-left:12px;gap:8px}
    .brand{font-size:28px}
    .top-controls{right:8px;gap:8px}
    .settings-panel{right:8px;width:92%}
  }
</style>
</head>
<body>

<!-- loader small -->
<div id="loader"><div class="dot"></div><div class="dot"></div><div class="dot"></div></div>

<header>
  <div class="logo-circle" id="logo"></div>
  <div>
    <div class="brand" id="brandText">thefilmydj_</div>
    <div style="margin-top:6px;color:#ffd789;font-size:14px">Dnyaneshwar Jadhav</div>
  </div>
</header>

<!-- top controls: audio icon, contact, settings -->
<div class="top-controls">
  <div class="ctrl-btn" id="audioTopBtn" title="Play/Pause audio">⏯</div>
  <div class="ctrl-btn" id="contactTopBtn" title="Contact">📩</div>
  <div class="ctrl-btn" id="settingsTopBtn" title="Settings">⚙️</div>
</div>

<!-- menu -->
<div class="menu" id="mainMenu">
  <button onclick="openStudy()">Study</button>
  <button onclick="openPh()">My Ph</button>
  <button onclick="openTab('https://youtube.com/@thefilmydj')">YouTube</button>
  <button onclick="openTab('https://instagram.com/thefilmydj_/')">Instagram</button>
  <button onclick="openContact()">Contact</button>
</div>

<!-- right photo panel -->
<div class="photo-box" id="panelBox"></div>

<!-- smoke overlay -->
<div class="smoke" id="smokeLayer" style="display:block"></div>

<!-- emojis -->
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Emoji Rain</title>

<style>
  .emoji-rain {
    position: absolute;
    top: -60px;
    opacity: 0.95;
    pointer-events: none;
    animation-name: fallDown;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}

@keyframes fallDown {
    0% { 
        transform: translateY(-100px) rotate(0deg); 
        opacity: 1; 
    }
    100% { 
        transform: translateY(110vh) rotate(360deg); 
        opacity: 0.3; 
    }
}
</style>
</head>

<body>

<script>

function applyEmojiSettings() {

    // Remove old emojis
    document.querySelectorAll(".emoji-rain").forEach(e => e.remove());

    let emojiText = document.getElementById("emojiInput").value.trim();
    let emojiList = emojiText.split(" ").filter(e => e.length > 0);

    let count = parseInt(document.getElementById("emojiCount").value);
    let size = document.getElementById("emojiSize").value + "px";
    let speed = document.getElementById("emojiSpeed").value;

    if (emojiList.length === 0) emojiList = ["📚", "😊", "🎬", "🔥"];

    for (let i = 0; i < count; i++) {
        let span = document.createElement("span");
        span.classList.add("emoji", "emoji-rain");

        span.innerHTML = emojiList[Math.floor(Math.random() * emojiList.length)];

        span.style.left = Math.random() * 100 + "%";
        span.style.fontSize = size;
        span.style.animationDuration = speed + "s";
        span.style.animationDelay = (Math.random() * 5) + "s";

        document.body.appendChild(span);
    }
}

</script>

</body>
</html>

<!-- study cards -->
<div class="cards" id="studyCards">
  <div class="card"><h4>Books</h4><p>PDF • Notes • Images</p></div>
  <div class="card"><h4>Notes</h4><p>Handwritten notes</p></div>
  <div class="card"><h4>Revisions</h4><p>Quick study sets</p></div>
  <div class="card"><h4>Uploads</h4><p>Your uploads</p></div>
</div>

<!-- contact popup (simple, no email) -->
<div class="contact-popup" id="contactPopup">
  <div class="popup-content">
    <h3 style="margin:0 0 8px">Contact Me</h3>
    <input id="cname" placeholder="Your name" />
    <input id="cemail" placeholder="Your email" />
    <textarea id="cmsg" placeholder="Your message"></textarea>
    <div class="popup-actions">
      <button class="btn-primary" onclick="sendMsg()">Send</button>
      <button class="btn-ghost" onclick="closeContact()">Close</button>
    </div>
  </div>
</div>

<!-- settings panel -->
<div class="settings-panel" id="settingsPanel">
  <h3 style="margin-top:0">Settings (Pro)</h3>

  <div class="settings-row">
    <div class="label">Live themes</div>
    <div style="display:flex;gap:8px;flex-wrap:wrap">
      <div class="theme-swatch" style="background:linear-gradient(120deg,#ff7e5f,#feb47b)" onclick="applyPreset(1)"></div>
      <div class="theme-swatch" style="background:linear-gradient(120deg,#00c6ff,#0072ff)" onclick="applyPreset(2)"></div>
      <div class="theme-swatch" style="background:linear-gradient(120deg,#fc00ff,#00dbde)" onclick="applyPreset(3)"></div>
      <div class="theme-swatch" style="background:linear-gradient(120deg,#000428,#004e92)" onclick="applyPreset(4)"></div>
      <div class="theme-swatch" style="background:linear-gradient(120deg,#ff1fae,#ff9fc0)" onclick="applyPreset(5)"></div>
      <div class="theme-swatch" style="background:linear-gradient(120deg,#2bffb4,#3b8bff)" onclick="applyPreset(6)"></div>
      <div class="theme-swatch" style="background:linear-gradient(120deg,#7d00ff,#00ffaa)" onclick="applyPreset(7)"></div>
    </div>
  </div>

  <div class="settings-row">
    <div class="label">Live color (start)</div>
    <input type="color" id="liveStart" value="#0f1724" />
  </div>
  <div class="settings-row">
    <div class="label">Live color (end)</div>
    <input type="color" id="liveEnd" value="#1e3a5f" />
  </div>

  <div class="settings-row">
    <div class="label">Smoke / Fog</div>
    <label class="small"><input type="checkbox" id="smokeToggle" /> Enable</label>
  </div>

  <div class="settings-row">
    <div class="label">Opacity</div>
    <input type="range" id="opacityRange" min="0.3" max="1" step="0.05" value="1" />
  </div>

  <div class="settings-row">
    <div class="label">Blur</div>
    <input type="range" id="blurRange" min="0" max="6" step="0.5" value="0" />
  </div>

  <div class="settings-row">
    <div class="label">Font family</div>
    <select id="fontPicker">
      <option value="Inter, Arial, sans-serif">Inter</option>
      <option value="Arial, Helvetica, sans-serif">Arial</option>
      <option value="'Courier New', Courier, monospace">Courier</option>
      <option value="'Poppins', sans-serif">Poppins</option>
    </select>
  </div>

  <div class="settings-row">
    <div class="label">Animations</div>
    <label class="small"><input type="checkbox" id="animToggle" checked /> Enable</label>
  </div>

  <div class="settings-row">
    <div class="label">Logo animate</div>
    <label class="small"><input type="checkbox" id="logoAnimToggle" checked /> Animate</label>
  </div>

  <div class="settings-row">
    <div class="label">Panel animate</div>
    <label class="small"><input type="checkbox" id="panelAnimToggle" checked /> Animate</label>
  </div>

   <h3 style="margin-top:10px">Emoji Controls</h3>

   <div class="settings-row">
      <div class="label">Emoji List</div>
      <input type="text" id="emojiInput" placeholder="📚 😊 🎧 🔥" style="flex:1">
    </div>

  <div class="settings-row">
      <div class="label">Emoji Count</div>
      <input type="number" id="emojiCount" min="5" max="100" value="20" style="width:80px">
    </div>

  <div class="settings-row">
      <div class="label">Emoji Size</div>
      <input type="range" id="emojiSize" min="20" max="80" value="40" />
    </div>

   <div class="settings-row">
      <div class="label">Speed</div>
      <input type="range" id="emojiSpeed" min="5" max="20" value="12" />
    </div>

  <button class="btn-primary" onclick="applyEmojiSettings()">Apply Emojis</button>

  <div style="display:flex;gap:8px;margin-top:10px">
    <button class="btn-primary" id="saveThemeBtn">Save Theme</button>
    <button class="btn-ghost" id="resetBtn">Reset</button>
  </div>

</div>

<!-- bottom music bar -->
<div class="music-bar" id="musicBar">
  <button onclick="togglePlay()" class="ctrl-btn">⏯</button>
  <audio id="player" src="YOUR_AUDIO_URL" preload="none"></audio>
  <div id="trackName">No Track</div>
</div>

<script>
/* ---------- helper open/close ---------- */
const settingsPanel = document.getElementById('settingsPanel');
const contactPopup = document.getElementById('contactPopup');
const smokeLayer = document.getElementById('smokeLayer');
const logoEl = document.getElementById('logo');
const panelBox = document.getElementById('panelBox');
const brandText = document.getElementById('brandText');
const player = document.getElementById('player');
const trackName = document.getElementById('trackName');

document.getElementById('settingsTopBtn').addEventListener('click', toggleSettings);
document.getElementById('contactTopBtn').addEventListener('click', openContact);
document.getElementById('audioTopBtn').addEventListener('click', togglePlay);

function toggleSettings(){
  settingsPanel.style.display = settingsPanel.style.display === 'block' ? 'none' : 'block';
}
function openContact(){ contactPopup.style.display = 'flex'; }
function closeContact(){ contactPopup.style.display = 'none'; }

/* contact send (no email) */
function sendMsg(){
  alert('Message Sent ✔️ (demo, no email configured)');
  closeContact();
}

/* audio */
function togglePlay(){
  if(!player.src){ alert('Add YOUR_AUDIO_URL in code to play'); return; }
  if(player.paused) { player.play(); trackName.textContent='Playing'; } 
  else { player.pause(); trackName.textContent='Paused'; }
}
player.addEventListener('ended', ()=> trackName.textContent='No Track');

/* presets */
function applyPreset(n){
  const presets = {
    1: ['#ff7e5f','#feb47b'],
    2: ['#00c6ff','#0072ff'],
    3: ['#fc00ff','#00dbde'],
    4: ['#000428','#004e92'],
    5: ['#ff1fae','#ff9fc0'],
    6: ['#2bffb4','#3b8bff'],
    7: ['#7d00ff','#00ffaa'],
  };
  const p = presets[n];
  if(p){ document.body.style.background = `linear-gradient(120deg,${p[0]},${p[1]})`; document.getElementById('liveStart').value=p[0]; document.getElementById('liveEnd').value=p[1]; saveToLocal(); }
}

/* live gradient apply */
document.getElementById('liveStart').addEventListener('input', applyLive);
document.getElementById('liveEnd').addEventListener('input', applyLive);

function applyLive(){
  const s=document.getElementById('liveStart').value;
  const e=document.getElementById('liveEnd').value;
  document.body.style.background = `linear-gradient(120deg,${s},${e})`;
  saveToLocal();
}

/* smoke toggle */
document.getElementById('smokeToggle').addEventListener('change', ()=>{
  const on = document.getElementById('smokeToggle').checked;
  document.documentElement.style.setProperty('--smoke-opacity', on ? '0.65' : '0');
  saveToLocal();
});

/* opacity & blur */
const opacityRange = document.getElementById('opacityRange');
const blurRange = document.getElementById('blurRange');
opacityRange.addEventListener('input', ()=>{ document.documentElement.style.setProperty('--site-opacity', opacityRange.value); saveToLocal(); });
blurRange.addEventListener('input', ()=>{ document.documentElement.style.setProperty('--site-blur', blurRange.value+'px'); saveToLocal(); });

/* font picker */
document.getElementById('fontPicker').addEventListener('change', (e)=>{ document.documentElement.style.setProperty('--site-font', e.target.value); document.body.style.fontFamily = e.target.value; saveToLocal(); });

/* animation toggles */
document.getElementById('animToggle').addEventListener('change', (e)=>{
  if(!e.target.checked){
    document.body.classList.add('no-anim');
    // pause animations by setting animation-play-state
    document.querySelectorAll('*').forEach(el=>el.style.animationPlayState='paused');
  } else {
    document.body.classList.remove('no-anim');
    document.querySelectorAll('*').forEach(el=>el.style.animationPlayState='running');
  }
  saveToLocal();
});

document.getElementById('logoAnimToggle').addEventListener('change', (e)=>{
  if(e.target.checked) logoEl.classList.add('logo-animate'); else logoEl.classList.remove('logo-animate');
  saveToLocal();
});
document.getElementById('panelAnimToggle').addEventListener('change', (e)=>{
  if(e.target.checked) panelBox.classList.add('panel-animate'); else panelBox.classList.remove('panel-animate');
  saveToLocal();
});

/* Save / Reset */
document.getElementById('saveThemeBtn').addEventListener('click', saveToLocal);
document.getElementById('resetBtn').addEventListener('click', ()=>{ localStorage.removeItem('thefilmy_theme'); location.reload(); });

/* Save settings to localStorage */
function saveToLocal(){
  const state = {
    bgStart: document.getElementById('liveStart').value,
    bgEnd: document.getElementById('liveEnd').value,
    smoke: document.getElementById('smokeToggle').checked,
    opacity: document.getElementById('opacityRange').value,
    blur: document.getElementById('blurRange').value,
    font: document.getElementById('fontPicker').value,
    anim: document.getElementById('animToggle').checked,
    logoAnim: document.getElementById('logoAnimToggle').checked,
    panelAnim: document.getElementById('panelAnimToggle').checked
  };
  localStorage.setItem('thefilmy_theme', JSON.stringify(state));
}

/* Load from localStorage */
function loadFromLocal(){
  const s = localStorage.getItem('thefilmy_theme');
  if(!s) return;
  try{
    const state = JSON.parse(s);
    if(state.bgStart) document.getElementById('liveStart').value = state.bgStart;
    if(state.bgEnd) document.getElementById('liveEnd').value = state.bgEnd;
    if(state.bgStart && state.bgEnd) document.body.style.background = `linear-gradient(120deg,${state.bgStart},${state.bgEnd})`;
    document.getElementById('smokeToggle').checked = !!state.smoke;
    document.documentElement.style.setProperty('--smoke-opacity', state.smoke ? '0.65' : '0');
    document.getElementById('opacityRange').value = state.opacity || 1;
    document.documentElement.style.setProperty('--site-opacity', state.opacity || 1);
    document.getElementById('blurRange').value = state.blur || 0;
    document.documentElement.style.setProperty('--site-blur', (state.blur || 0)+'px');
    if(state.font) { document.getElementById('fontPicker').value = state.font; document.body.style.fontFamily = state.font; }
    document.getElementById('animToggle').checked = state.anim !== false;
    document.getElementById('logoAnimToggle').checked = !!state.logoAnim;
    document.getElementById('panelAnimToggle').checked = !!state.panelAnim;
    if(state.logoAnim) logoEl.classList.add('logo-animate'); else logoEl.classList.remove('logo-animate');
    if(state.panelAnim) panelBox.classList.add('panel-animate'); else panelBox.classList.remove('panel-animate');
    if(!state.anim){ document.querySelectorAll('*').forEach(el=>el.style.animationPlayState='paused'); }
  }catch(e){ console.warn(e) }
}

/* initialize small UI & behavior */
window.addEventListener('load', ()=>{
  // hide loader
  const l = document.getElementById('loader'); if(l) l.style.display='none';
  // load settings
  loadFromLocal();
  // initialize track text
  try{ updateTrackNameFromSrc(); }catch(e){}
});

/* update track name from audio src */
function updateTrackNameFromSrc(){
  if(!player.src){ trackName.textContent='No Track'; return; }
  const parts = player.src.split('/');
  let name = parts[parts.length-1] || player.src;
  name = decodeURIComponent(name).replace(/[-_]/g,' ');
  trackName.textContent = name;
}

/* small helpers */
function openTab(url){ window.open(url,'_blank') }
function openStudy(){ alert('Study page: coming soon (will open study UI)') }
function openPh(){ alert('My Ph: coming soon') }

/* Make top buttons work: contact popup and settings toggle already bound above */
document.getElementById('contactTopBtn').addEventListener('click', openContact);
document.getElementById('settingsTopBtn').addEventListener('click', toggleSettings);
document.getElementById('audioTopBtn').addEventListener('click', togglePlay);

/* Make top contact button also available (click area) */
document.getElementById('contactTopBtn').style.display='inline-block';

</script>
</body>
</html>
