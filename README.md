<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title><span style="color:red;text-shadow:0 0 6px red;">thefilmydj_</span></title>

<style>
  :root{
    --bg1:#0f1724;
    --bg2:#1e3a5f;
    --pink:#ff1fae;
    --glass: rgba(255,255,255,0.06);
  }

  body{
    margin:0;
    font-family:Inter, Arial, sans-serif;
    color:#fff;
    background:linear-gradient(120deg,var(--bg1),var(--bg2));
    background-size:400% 400%;
    height:100vh;
    overflow-x:hidden;
  }

  /* HEADER */
  header{
    display:flex;
    align-items:center;
    gap:18px;
    padding:22px 28px;
  }

  .logo-circle{
    width:88px;
    height:88px;
    border-radius:50%;
    background:url('YOUR_LOGO_URL') center/cover;
    border:3px solid rgba(255,255,255,0.18);
  }

  /* PINK BRAND */
  .brand{
    font-size:42px;
    font-weight:900;
    letter-spacing:1px;
    color:#ff2b2b; /* RED */
    text-shadow:0 0 6px #ff2b2b; /* LOW GLOW */
  }

  h3{margin:0;margin-top:6px;font-size:16px;color:#ffd789;}

  /* MENU */
  .menu{
    display:flex;
    gap:16px;
    padding-left:26px;
    margin-top:10px;
    flex-wrap:wrap;
  }

  .menu button{
    background:rgba(255,255,255,0.05);
    border:1px solid rgba(255,255,255,0.08);
    padding:12px 20px;
    border-radius:999px;
    color:#fff;
    cursor:pointer;
    font-weight:600;
    transition:.2s;
  }
  .menu button:hover{
    transform:translateY(-5px);
    box-shadow:0 10px 25px rgba(0,0,0,.5);
  }

  /* SETTINGS BUTTON RIGHT TOP FIXED */
  .settings-btn{
    position:fixed;
    top:20px;
    right:20px;
    z-index:2000;
    font-size:28px;
    background:rgba(255,255,255,0.07);
    padding:10px 12px;
    border-radius:10px;
    cursor:pointer;
  }

  .settings-panel{
    position:fixed;
    top:70px;
    right:20px;
    width:300px;
    background:rgba(0,0,0,0.6);
    padding:14px;
    border-radius:12px;
    display:none;
    z-index:2000;
  }

  /* RIGHT PHOTO PANEL */
  .photo-box{
    width:360px;
    height:360px;
    border-radius:26px;
    background:url('YOUR_PHOTO_URL') center/cover;
    position:absolute;
    right:48px;
    top:200px;
    border:3px solid rgba(255,255,255,0.08);
    box-shadow:0 10px 40px rgba(0,0,0,.6);
  }

  /* FLOATING EMOJIS */
  .emoji{
    position:fixed;
    font-size:24px;
    opacity:.85;
    animation:floatUp linear infinite;
    bottom:-60px;
  }

  @keyframes floatUp{
    0%{transform:translateY(0) rotate(0deg);}
    100%{transform:translateY(-110vh) rotate(600deg);}
  }

  /* STUDY CARDS */
  .cards{
    position:fixed;
    left:40px;
    bottom:40px;
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(160px,1fr));
    gap:12px;
    width:420px;
  }

  .card{
    background:rgba(255,255,255,0.05);
    padding:14px;
    border-radius:14px;
    border:1px solid rgba(255,255,255,0.07);
    backdrop-filter:blur(7px);
  }

  .card h4{margin:0 0 6px;font-size:16px;}
  .card p{margin:0;font-size:13px;color:#cbd5e1;}

  /* AUDIO PLAYER */
  .music-bar{
    position:fixed;
    left:50%;
    bottom:18px;
    transform:translateX(-50%);
    background:rgba(0,0,0,0.55);
    padding:10px 20px;
    border-radius:999px;
    display:flex;
    gap:12px;
    align-items:center;
    border:1px solid rgba(255,255,255,0.07);
  }
</style>
</head>

<body>

<header>
  <div class="logo-circle"></div>
  <div>
    <div class="brand">thefilmydj_</div>
    <h3>Dnyaneshwar Jadhav</h3>
  </div>
</header>

<!-- MENU ORDER FIXED -->
<div class="menu">
  <button onclick="openStudy()">Study</button>
  <button onclick="openPh()">My Ph</button>
  <button onclick="openTab('https://youtube.com/@thefilmydj')">YouTube</button>
  <button onclick="openTab('https://instagram.com/thefilmydj_/')">Instagram</button>
  <button onclick="openContact()">Contact</button>
</div>

<!-- SETTINGS BUTTON RIGHT TOP -->
<div class="settings-btn" onclick="toggleSettings()">⚙️</div>

<!-- SETTINGS PANEL -->
<div class="settings-panel" id="settingsPanel">
  <h3>Theme Customize</h3>
  <p style="font-size:13px;margin:6px 0;">Background Gradient</p>
  <input type="color" id="g1" value="#0f1724" onchange="applyGradient()" />
  <input type="color" id="g2" value="#1e3a5f" onchange="applyGradient()" />
</div>

<!-- RIGHT PHOTO PANEL -->
<div class="photo-box"></div>

<!-- FLOATING EMOJIS (MORE ADDED) -->
<span class="emoji" style="left:10%; animation-duration:10s;">📚</span>
<span class="emoji" style="left:25%; animation-duration:12s;">😊</span>
<span class="emoji" style="left:40%; animation-duration:9s;">🎬</span>
<span class="emoji" style="left:60%; animation-duration:11s;">🔥</span>
<span class="emoji" style="left:70%; animation-duration:8s;">📘</span>
<span class="emoji" style="left:85%; animation-duration:13s;">🎧</span>
<span class="emoji" style="left:50%; animation-duration:14s;">😁</span>
<span class="emoji" style="left:33%; animation-duration:10s;">📖</span>

<!-- STUDY CARDS -->
<div class="cards">
  <div class="card"><h4>Books</h4><p>PDF • Notes • Images</p></div>
  <div class="card"><h4>Notes</h4><p>Handwritten notes</p></div>
  <div class="card"><h4>Revisions</h4><p>Quick study sets</p></div>
  <div class="card"><h4>Uploads</h4><p>Your uploads</p></div>
</div>

<!-- AUDIO BAR -->
<div class="music-bar">
  <button onclick="togglePlay()">⏯</button>
  <audio id="player" src="YOUR_AUDIO_URL"></audio>
  <span id="trackName">No Track</span>
</div>

<script>
function toggleSettings(){
  let p=document.getElementById("settingsPanel");
  p.style.display = (p.style.display==="block") ? "none" : "block";
}

function applyGradient(){
  let c1=document.getElementById("g1").value;
  let c2=document.getElementById("g2").value;
  document.body.style.background=`linear-gradient(120deg,${c1},${c2})`;
}

function openTab(url){window.open(url,'_blank');}
function openStudy(){alert("Study page coming soon — full animations add होणार.");}
function openPh(){alert("My Ph page custom तयार करू शकतो.");}
function openContact(){alert("Contact form add करतो लवकरच.");}

let player=document.getElementById("player");
let trackName=document.getElementById("trackName");

function togglePlay(){
  if(player.paused){player.play();trackName.textContent="Playing"; }
  else{player.pause();trackName.textContent="Paused"; }
}
</script>

</body>
</html>
