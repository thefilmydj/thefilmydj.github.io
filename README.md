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
    position:relative;
  }
  .logo-animate{ animation: logoFloat 4s ease-in-out infinite; }
  @keyframes logoFloat{0%{transform:translateY(0) rotate(0) scale(var(--logo-scale));}50%{transform:translateY(-10px) rotate(-4deg) scale(calc(var(--logo-scale) + 0.02));}100%{transform:translateY(0) rotate(0) scale(var(--logo-scale));} }

  .brand{
    font-size:40px;
    font-weight:900;
    color:var(--brand-red);
    letter-spacing:0.6px;
    text-shadow:0 0 6px var(--brand-red);
    line-height:1;
  }
  .brand small{display:block;font-weight:500;color:#ffd789;margin-top:6px;font-size:14px}

  .top-controls{position:fixed;top:18px;right:18px;display:flex;gap:12px;z-index:2000}
  .ctrl-btn{background:rgba(255,255,255,0.06);padding:8px 10px;border-radius:10px;cursor:pointer;border:1px solid rgba(255,255,255,0.06);font-size:18px}
  .ctrl-btn:active{transform:translateY(1px)}

  .menu{display:flex;gap:12px;padding:18px 26px 10px 26px;flex-wrap:wrap}
  .menu button{background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.06);padding:10px 16px;border-radius:999px;color:white;cursor:pointer;font-weight:600}
  .menu button:hover{transform:translateY(-4px);box-shadow:0 12px 30px rgba(0,0,0,.5)}

  /* right panel (used for photo and music logo) */
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

  /* music logo overlay inside photo-box */
  .music-logo{
    position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);
    width:120px;height:120px;border-radius:50%;background:linear-gradient(135deg,#ff7e5f,#feb47b);display:flex;align-items:center;justify-content:center;font-size:44px;color:#fff;box-shadow:0 12px 40px rgba(0,0,0,0.5);cursor:pointer;border:4px solid rgba(255,255,255,0.12)
  }

  .smoke{position:fixed;inset:0;pointer-events:none;mix-blend-mode:screen;opacity:var(--smoke-opacity);z-index:40;background:radial-gradient(closest-side, rgba(255,255,255,0.03), transparent 60%), radial-gradient(closest-side, rgba(255,255,255,0.02), transparent 60%), linear-gradient(180deg, rgba(255,255,255,0.01), rgba(255,255,255,0.02));animation: smokeMove 18s linear infinite;transform:translateZ(0);} @keyframes smokeMove{0%{background-position:0% 0%}50%{background-position:50% 100%}100%{background-position:0% 0%}}

  .emoji{position:fixed;font-size:24px;opacity:.95;pointer-events:none;animation:floatUp linear infinite}
  @keyframes floatUp{0%{transform:translateY(0) rotate(0)}100%{transform:translateY(-120vh) rotate(720deg)}}

  .cards{position:fixed;left:24px;bottom:24px;display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:12px;width:420px;z-index:30}
  .card{background:rgba(255,255,255,0.04);padding:12px;border-radius:12px;border:1px solid rgba(255,255,255,0.06);backdrop-filter:blur(6px)}
  .card h4{margin:0 0 6px;font-size:15px} .card p{margin:0;color:#cbd5e1;font-size:13px}

  .contact-popup{position:fixed;inset:0;display:none;align-items:center;justify-content:center;background:rgba(0,0,0,0.6);z-index:3000}
  .popup-content{width:92%;max-width:380px;background:rgba(255,255,255,0.04);backdrop-filter:blur(10px);padding:20px;border-radius:14px;border:1px solid rgba(255,255,255,0.08)}
  .popup-content input,.popup-content textarea{width:100%;padding:10px;margin:8px 0;border-radius:8px;border:none;background:rgba(255,255,255,0.07);color:#fff}

  .settings-panel{position:fixed;top:70px;right:20px;width:380px;background:rgba(0,0,0,0.65);padding:14px;border-radius:12px;display:none;z-index:2000;color:#fff}
  .settings-row{display:flex;gap:10px;align-items:center;margin-bottom:10px}
  .label{font-size:13px;color:#d1d5db;width:120px}
  .small{font-size:13px;color:#d1d5db}
  .theme-swatch{width:44px;height:34px;border-radius:8px;cursor:pointer;border:2px solid rgba(255,255,255,0.06)}

  /* player modal (full colorful gradient) */
  .player-modal{position:fixed;inset:0;display:none;align-items:center;justify-content:center;z-index:4000}
  .player-bg{position:absolute;inset:0;background:radial-gradient(circle at 20% 20%, rgba(255,126,95,0.15), transparent 10%), radial-gradient(circle at 80% 80%, rgba(0,198,255,0.12), transparent 10%);backdrop-filter:blur(8px);}
  .player-card{position:relative;z-index:2;width:92%;max-width:980px;height:78vh;border-radius:18px;overflow:hidden;display:flex;gap:20px}
  .player-left{flex:1;display:flex;flex-direction:column;padding:28px;background:linear-gradient(135deg, rgba(255,255,255,0.03), rgba(0,0,0,0.05));}
  .player-cover{height:48%;border-radius:12px;background:linear-gradient(135deg,#ff7e5f,#feb47b);display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:800}
  .player-controls{display:flex;gap:12px;align-items:center;margin-top:18px}
  .btn{padding:10px 14px;border-radius:10px;border:none;cursor:pointer;font-weight:700}
  .btn-ghost{background:transparent;border:1px solid rgba(255,255,255,0.08);color:#fff}
  .btn-primary{background:linear-gradient(90deg,#ff7e5f,#feb47b);color:#000}
  .progress{height:8px;background:rgba(255,255,255,0.08);border-radius:999px;overflow:hidden}
  .progress > i{display:block;height:100%;width:0%;background:linear-gradient(90deg,#7d00ff,#00ffaa)}

  .player-right{width:360px;background:linear-gradient(90deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01));padding:18px;overflow:auto}
  .track-list{list-style:none;padding:0;margin:0}
  .track-list li{padding:10px;border-radius:8px;margin-bottom:8px;cursor:pointer;border:1px solid rgba(255,255,255,0.03);display:flex;justify-content:space-between;align-items:center}
  .track-list li.active{background:linear-gradient(90deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));border:1px solid rgba(255,255,255,0.06)}
  .track-list li .meta{max-width:220px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
  .playlist-input{width:100%;height:120px;padding:8px;border-radius:8px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.04);color:#fff}

  @media(max-width:900px){
    .photo-box{display:none}
    .cards{position:static;width:calc(100% - 40px);left:20px;bottom:20px}
    .menu{padding-left:12px;gap:8px}
    .brand{font-size:28px}
    .top-controls{right:8px;gap:8px}
    .settings-panel{right:8px;width:92%}
    .player-card{flex-direction:column;height:86vh}
    .player-right{width:100%;height:38vh}
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

<div class="top-controls">
  <div class="ctrl-btn" id="audioTopBtn" title="Open Player">🎵</div>
  <div class="ctrl-btn" id="contactTopBtn" title="Contact">📩</div>
  <div class="ctrl-btn" id="settingsTopBtn" title="Settings">⚙️</div>
</div>

<div class="menu" id="mainMenu">
  <button onclick="openStudy()">Study</button>
  <button onclick="openPh()">My Ph</button>
  <button onclick="openTab('https://youtube.com/@thefilmydj')">YouTube</button>
  <button onclick="openTab('https://instagram.com/thefilmydj_/')">Instagram</button>
  <button onclick="openContact()">Contact</button>
</div>

<div class="photo-box" id="panelBox">
  <div class="music-logo" id="musicLogo" title="Open Music Player">&#127925;</div>
</div>

<div class="smoke" id="smokeLayer" style="display:block"></div>

<span class="emoji" style="left:6%; animation-duration:12s">📚</span>
<span class="emoji" style="left:18%; animation-duration:10s">😊</span>
<span class="emoji" style="left:30%; animation-duration:14s">📖</span>
<span class="emoji" style="left:44%; animation-duration:11s">🎬</span>
<span class="emoji" style="left:52%; animation-duration:13s">🎧</span>
<span class="emoji" style="left:66%; animation-duration:9s">🔥</span>
<span class="emoji" style="left:78%; animation-duration:15s">📘</span>
<span class="emoji" style="left:88%; animation-duration:12s">😁</span>

<div class="cards" id="studyCards">
  <div class="card"><h4>Books</h4><p>PDF • Notes • Images</p></div>
  <div class="card"><h4>Notes</h4><p>Handwritten notes</p></div>
  <div class="card"><h4>Revisions</h4><p>Quick study sets</p></div>
  <div class="card"><h4>Uploads</h4><p>Your uploads</p></div>
</div>

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

<div class="settings-panel" id="settingsPanel">
  <h3 style="margin-top:0">Settings (Pro)</h3>

  <div class="settings-row">
    <div class="label">Live themes</div>
    <div style="display:flex;gap:8px;flex-wrap:wrap">
      <div class="theme-swatch" style="background:linear-gradient(120deg,#ff7e5f,#feb47b)" onclick="applyPreset(1)"></div>
      <div class="theme-swatch" style="background:linear-gradient(120deg,#00c6ff,#0072ff)" onclick="applyPreset(2)"></div>
      <div class="theme-swatch" style="background:linear-gradient(120deg,#fc00ff,#00dbde)" onclick="applyPreset(3)"></div>
      <div class="theme-swatch" style="background:linear-gradient(120deg,#000428,#004e92)" onclick="applyPreset(4)"></div>
    </div>
  </div>

  <div class="settings-row">
    <div class="label">Paste playlist</div>
  </div>
  <div style="margin-bottom:8px">
    <div style="font-size:13px;color:#cbd5e1;margin-bottom:6px">Paste up to 30 lines. Each line either a direct URL or <code>Song Name|https://...</code></div>
    <textarea id="playlistPaste" class="playlist-input" placeholder="Example:
Song One|https://example.com/song1.mp3
https://example.com/song2.mp3
Song Three|https://example.com/song3.mp3"></textarea>
  </div>
  <div style="display:flex;gap:8px;margin-top:6px">
    <button class="btn-primary" onclick="loadPlaylistFromTextarea()">Load Playlist</button>
    <button class="btn-ghost" onclick="clearPlaylist()">Clear Playlist</button>
  </div>

  <div style="height:8px"></div>
  <div style="display:flex;gap:8px;margin-top:10px">
    <button class="btn-primary" id="saveThemeBtn">Save Theme</button>
    <button class="btn-ghost" id="resetBtn">Reset</button>
  </div>
</div>

<!-- player modal -->
<div class="player-modal" id="playerModal">
  <div class="player-bg" id="playerBg"></div>
  <div class="player-card" role="dialog" aria-modal="true">
    <div class="player-left">
      <div class="player-cover" id="playerCover">thefilmydj_</div>
      <div style="margin-top:14px;font-size:18px" id="nowTitle">No track</div>
      <div style="margin-top:6px;color:#cbd5e1;font-size:13px" id="nowArtist">-</div>

      <div class="player-controls">
        <button class="btn btn-ghost" id="prevBtn">⏮</button>
        <button class="btn btn-primary" id="playBtn">⏯</button>
        <button class="btn btn-ghost" id="nextBtn">⏭</button>
        <button class="btn btn-ghost" id="loopBtn">🔁</button>
        <button class="btn btn-ghost" id="shuffleBtn">🔀</button>
      </div>

      <div style="margin-top:18px">
        <div class="progress"><i id="progressBar"></i></div>
        <div style="display:flex;justify-content:space-between;font-size:12px;margin-top:6px"><span id="curTime">0:00</span><span id="durTime">0:00</span></div>
      </div>

      <div style="margin-top:auto;color:#cbd5e1;font-size:13px">Tip: Close the player — music keeps playing. To stop, use pause.</div>
    </div>

    <div class="player-right">
      <div style="display:flex;gap:8px;align-items:center;margin-bottom:10px">
        <input id="searchTrack" placeholder="Search track..." style="flex:1;padding:8px;border-radius:8px;border:1px solid rgba(255,255,255,0.04);background:transparent;color:#fff" />
        <button class="btn btn-ghost" id="closePlayer">Close</button>
      </div>

      <ul class="track-list" id="trackList"></ul>
    </div>
  </div>
</div>

<!-- global hidden audio (stays outside modal so music continues when modal closed) -->
<audio id="globalPlayer" preload="auto"></audio>

<script>
/* ---------- elements ---------- */
const settingsPanel = document.getElementById('settingsPanel');
const contactPopup = document.getElementById('contactPopup');
const smokeLayer = document.getElementById('smokeLayer');
const logoEl = document.getElementById('logo');
const panelBox = document.getElementById('panelBox');
const brandText = document.getElementById('brandText');
const musicLogo = document.getElementById('musicLogo');
const playerModal = document.getElementById('playerModal');
const globalPlayer = document.getElementById('globalPlayer');
const trackListEl = document.getElementById('trackList');
const playBtn = document.getElementById('playBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const loopBtn = document.getElementById('loopBtn');
const shuffleBtn = document.getElementById('shuffleBtn');
const nowTitle = document.getElementById('nowTitle');
const nowArtist = document.getElementById('nowArtist');
const progressBar = document.getElementById('progressBar');
const curTime = document.getElementById('curTime');
const durTime = document.getElementById('durTime');
const searchTrack = document.getElementById('searchTrack');
const playlistPaste = document.getElementById('playlistPaste');

/* ---------- playlist data (load from localStorage or empty) ---------- */
let playlist = [];
let currentIndex = -1;
let isLoop = false;
let isShuffle = false;

function loadPlaylistFromStorage(){
  const p = localStorage.getItem('thefilmy_playlist');
  if(!p) return;
  try{ playlist = JSON.parse(p); renderTrackList(); }catch(e){console.warn(e)}
}

function savePlaylistToStorage(){ localStorage.setItem('thefilmy_playlist', JSON.stringify(playlist)); }

/* parse textarea lines */
function loadPlaylistFromTextarea(){
  const txt = playlistPaste.value.trim();
  if(!txt) return alert('Paste at least one URL or name|url');
  const lines = txt.split('
').map(l=>l.trim()).filter(Boolean).slice(0,30);
  const parsed = [];
  for(const line of lines){
    if(line.includes('|')){
      const [name,url] = line.split('|').map(s=>s.trim()); parsed.push({name, url});
    } else {
      // try to infer name from url
      const url = line;
      const name = (url.split('/').pop() || url).split('?')[0];
      parsed.push({name, url});
    }
  }
  playlist = parsed;
  savePlaylistToStorage();
  renderTrackList();
  alert('Playlist loaded ('+playlist.length+' tracks)');
}

function clearPlaylist(){ if(confirm('Clear playlist?')){ playlist=[]; savePlaylistToStorage(); renderTrackList(); playlistPaste.value=''; } }

function renderTrackList(filter=''){
  trackListEl.innerHTML='';
  playlist.forEach((t,i)=>{
    if(filter && !(t.name||t.url).toLowerCase().includes(filter.toLowerCase())) return;
    const li = document.createElement('li');
    li.dataset.index = i;
    if(i===currentIndex) li.classList.add('active');
    const meta = document.createElement('div'); meta.className='meta'; meta.textContent = t.name || t.url;
    const play = document.createElement('div'); play.textContent='▶'; play.style.opacity='0.8';
    li.appendChild(meta); li.appendChild(play);
    li.addEventListener('click', ()=> playIndex(i, true));
    trackListEl.appendChild(li);
  });
}

/* player functions */
function playIndex(i, openModal=false){
  if(!playlist[i]) return;
  currentIndex = i;
  globalPlayer.src = playlist[i].url;
  globalPlayer.play().catch(()=>{});
  nowTitle.textContent = playlist[i].name || playlist[i].url.split('/').pop();
  nowArtist.textContent = '';
  updateActiveListItem();
  updatePlayButton();
  if(openModal) openPlayerModal();
}

function updateActiveListItem(){
  document.querySelectorAll('.track-list li').forEach(li=>li.classList.remove('active'));
  const el = document.querySelector(`.track-list li[data-index="${currentIndex}"]`);
  if(el) el.classList.add('active');
}

function playNext(){
  if(isShuffle){ currentIndex = Math.floor(Math.random()*playlist.length); }
  else { currentIndex = (currentIndex+1) % playlist.length; }
  playIndex(currentIndex);
}
function playPrev(){ currentIndex = (currentIndex-1 + playlist.length) % playlist.length; playIndex(currentIndex); }

function updatePlayButton(){ playBtn.textContent = globalPlayer.paused ? '⏯' : '⏸'; }

globalPlayer.addEventListener('play', ()=> updatePlayButton());
globalPlayer.addEventListener('pause', ()=> updatePlayButton());
globalPlayer.addEventListener('timeupdate', ()=>{
  if(globalPlayer.duration){
    const pct = (globalPlayer.currentTime / globalPlayer.duration) * 100;
    progressBar.style.width = pct + '%';
    curTime.textContent = formatTime(globalPlayer.currentTime);
    durTime.textContent = formatTime(globalPlayer.duration);
  }
});
globalPlayer.addEventListener('ended', ()=>{
  if(isLoop) { globalPlayer.currentTime = 0; globalPlayer.play(); }
  else playNext();
});

function formatTime(s){
  const m = Math.floor(s/60); const sec = Math.floor(s%60); return m+':'+(sec<10?('0'+sec):sec);
}

/* controls bindings */
playBtn.addEventListener('click', ()=>{ if(globalPlayer.paused) globalPlayer.play(); else globalPlayer.pause(); });
nextBtn.addEventListener('click', playNext);
prevBtn.addEventListener('click', playPrev);
loopBtn.addEventListener('click', ()=>{ isLoop = !isLoop; loopBtn.style.opacity = isLoop ? '1' : '0.6'; savePlayerState(); });
shuffleBtn.addEventListener('click', ()=>{ isShuffle = !isShuffle; shuffleBtn.style.opacity = isShuffle ? '1' : '0.6'; savePlayerState(); });

/* progress click to seek (on player-left progress bar) */
const progressOuter = document.querySelector('.progress');
progressOuter.addEventListener('click', (e)=>{
  if(!globalPlayer.duration) return;
  const rect = progressOuter.getBoundingClientRect();
  const x = e.clientX - rect.left; const pct = x / rect.width; globalPlayer.currentTime = pct * globalPlayer.duration;
});

/* search */
searchTrack.addEventListener('input', (e)=>{ renderTrackList(e.target.value); });

/* open / close modal */
function openPlayerModal(){ playerModal.style.display='flex'; document.body.style.overflow='hidden'; }
function closePlayerModal(){ playerModal.style.display='none'; document.body.style.overflow=''; }

musicLogo.addEventListener('click', ()=> openPlayerModal());
document.getElementById('audioTopBtn').addEventListener('click', ()=> openPlayerModal());
document.getElementById('closePlayer').addEventListener('click', ()=> closePlayerModal());

/* settings + contact */
document.getElementById('settingsTopBtn').addEventListener('click', toggleSettings);
document.getElementById('contactTopBtn').addEventListener('click', openContact);
function toggleSettings(){ settingsPanel.style.display = settingsPanel.style.display === 'block' ? 'none' : 'block'; }
function openContact(){ contactPopup.style.display = 'flex'; }
function closeContact(){ contactPopup.style.display = 'none'; }
function sendMsg(){ alert('Message Sent ✔️ (demo, no email configured)'); closeContact(); }

/* presets from earlier code */
function applyPreset(n){
  const presets = {1:['#ff7e5f','#feb47b'],2:['#00c6ff','#0072ff'],3:['#fc00ff','#00dbde'],4:['#000428','#004e92']};
  const p = presets[n]; if(p){ document.body.style.background = `linear-gradient(120deg,${p[0]},${p[1]})`; saveTheme(); }
}

/* Save/Load theme */
function saveTheme(){ const state = { bgStart: document.getElementById('liveStart')?.value, bgEnd: document.getElementById('liveEnd')?.value }; localStorage.setItem('thefilmy_theme', JSON.stringify(state)); }
function loadTheme(){ try{ const s = localStorage.getItem('thefilmy_theme'); if(!s) return; const st=JSON.parse(s); if(st.bgStart && st.bgEnd) document.body.style.background = `linear-gradient(120deg,${st.bgStart},${st.bgEnd})`; }catch(e){} }

/* persistence for player state */
function savePlayerState(){ localStorage.setItem('thefilmy_player_state', JSON.stringify({isLoop,isShuffle,currentIndex})); }
function loadPlayerState(){ try{ const s = localStorage.getItem('thefilmy_player_state'); if(!s) return; const st = JSON.parse(s); isLoop = !!st.isLoop; isShuffle = !!st.isShuffle; if(typeof st.currentIndex === 'number') currentIndex = st.currentIndex; loopBtn.style.opacity = isLoop ? '1':'0.6'; shuffleBtn.style.opacity = isShuffle ? '1':'0.6'; }catch(e){} }

/* init on load */
window.addEventListener('load', ()=>{
  document.getElementById('loader').style.display='none';
  loadTheme(); loadPlaylistFromStorage(); loadPlayerState(); renderTrackList();
  // if there's a saved currentIndex, set nowTitle
  if(currentIndex>=0 && playlist[currentIndex]) nowTitle.textContent = playlist[currentIndex].name || playlist[currentIndex].url;
});

/* helper open tab */
function openTab(url){ window.open(url,'_blank') }
function openStudy(){ alert('Study page: coming soon (will open study UI)') }
function openPh(){ alert('My Ph: coming soon') }

</script>
</body>
</html>
