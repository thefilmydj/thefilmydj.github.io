<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>thefilmydj_</title>
<style>
    body {
        margin: 0;
        font-family: Arial, sans-serif;
        background: linear-gradient(120deg, #0f1724, #1e3a5f);
        color: white;
        overflow-x: hidden;
        transition: background 0.4s ease;
    }

    /* Floating & Shake Animations */
    @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0px); }
    }
    @keyframes shake {
        0% { transform: translateY(0); }
        50% { transform: translateY(-6px); }
        100% { transform: translateY(0); }
    }

    header {
        display: flex;
        align-items: center;
        gap: 20px;
        padding: 30px;
        position: relative;
        z-index: 5;
    }

    .logo-circle {
        width: 90px;
        height: 90px;
        border-radius: 50%;
        background: url('YOUR_LOGO_URL');
        background-size: cover;
        animation: shake 2.2s infinite ease-in-out;
        box-shadow: 0 0 15px rgba(0,0,0,0.5);
        border: 3px solid rgba(255,255,255,0.25);
    }

    h1 { font-size: 44px; font-weight: bold; }
    .t { color: #ff3b3b; }
    .film { color: #25d366; }
    .my { color: #9b59b6; }
    .dj { color: #f1c40f; }
    .uscore { color: #00aaff; }

    h3 {
        margin-top: -10px;
        margin-left: 20px;
        font-size: 20px;
        color: #ffd789;
    }

    /* Menu */
    .menu {
        display: flex;
        gap: 25px;
        padding-left: 40px;
        margin-top: 20px;
    }

    .menu button {
        padding: 15px 30px;
        border-radius: 30px;
        border: 2px solid #00ffbb;
        cursor: pointer;
        background: rgba(255, 255, 255, 0.2);
        color: white;
        font-size: 18px;
        transition: 0.3s;
        animation: shake 2.5s infinite ease-in-out;
    }

    .menu button:hover {
        transform: scale(1.12);
        background: rgba(255,255,255,0.35);
    }

    /* Photo Panel */
    .photo-box {
        width: 370px;
        height: 370px;
        background: url('YOUR_PHOTO_URL');
        background-size: cover;
        background-position: center;
        border-radius: 40px;
        position: absolute;
        right: 60px;
        top: 300px;
        animation: shake 2.3s infinite ease-in-out;
        box-shadow: 0 0 25px rgba(0,0,0,0.55);
        border: 4px solid rgba(255,255,255,0.22);
    }

    /* Color Picker Panel */
    .color-panel {
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(255,255,255,0.15);
        padding: 20px;
        border-radius: 20px;
        backdrop-filter: blur(8px);
        box-shadow: 0 0 15px rgba(0,0,0,0.4);
    }

    .color-panel input {
        margin-top: 10px;
        width: 100%;
    }
    .settings-btn {
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 9999;
        font-size: 26px;
        background: rgba(255,255,255,0.3);
        padding: 10px 14px;
        border-radius: 50%;
        cursor: pointer;
        backdrop-filter: blur(6px);
    } {
        position: fixed;
        top: 20px;
        right: 20px;
        font-size: 26px;
        background: rgba(255,255,255,0.2);
        padding: 10px 14px;
        border-radius: 50%;
        cursor: pointer;
        backdrop-filter: blur(6px);
    }

    .settings-panel {
        position: fixed;
        top: 80px;
        right: 20px;
        width: 230px;
        background: rgba(0,0,0,0.55);
        padding: 20px;
        border-radius: 18px;
        display: none;
        z-index: 9999;
        color: white;
        backdrop-filter: blur(8px);
    } {
        position: fixed;
        top: 70px;
        right: 20px;
        width: 220px;
        background: rgba(255,255,255,0.15);
        padding: 20px;
        border-radius: 15px;
        display: none;
        backdrop-filter: blur(8px);
    }

    /* Animated Dynamic Gradient */
    @keyframes liveGradient {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }
    /* Auto Color Rotate Animation */
    @keyframes autoColors {
        0% { filter: hue-rotate(0deg); }
        50% { filter: hue-rotate(180deg); }
        100% { filter: hue-rotate(360deg); }
    }

    .auto-rotate {
        animation: autoColors 6s infinite linear;
    }

    /* Floating Bubbles */
    .bubble {
        position: fixed;
        bottom: -50px;
        width: 25px;
        height: 25px;
        background: rgba(255,255,255,0.25);
        border-radius: 50%;
        animation: rise 12s infinite ease-in;
        filter: blur(2px);
    }

    @keyframes rise {
        0% { transform: translateY(0) scale(1); opacity: 1; }
        100% { transform: translateY(-1200px) scale(1.8); opacity: 0; }
    }

    /* Glow Wave Effect for Buttons */
    .menu button {
        position: relative;
        overflow: hidden;
    }

    .menu button::after {
        content: "";
        position: absolute;
        top: 0; left: -100%;
        width: 100%; height: 100%;
        background: rgba(255,255,255,0.4);
        transform: skewX(-25deg);
        transition: 0.35s;
    }

    .menu button:hover::after {
        left: 200%;
    }

    /* 3D Shine on Logo */
    .logo-circle {
        position: relative;
    }
    .logo-circle::after {
        content: "";
        position: absolute;
        top: 0; left: 0;
        width: 100%; height: 100%;
        background: linear-gradient(120deg, rgba(255,255,255,0.25), transparent);
        transform: translateX(-100%);
        animation: shineLogo 3s infinite;
        border-radius: 50%;
    }
    @keyframes shineLogo {
        0% { transform: translateX(-100%); }
        50% { transform: translateX(120%); }
        100% { transform: translateX(-100%); }
    }
</style>
</head>
<body>

<header>
    <div class="logo-circle"></div>
    <h1>
        <span class="t">the&nbsp;</span> <span class="film">filmy&nbsp;</span> <span class="dj">dj&nbsp;</span> <span class="uscore">_</span>
    </h1>
</header>
<h3>Dnyaneshwar Jadhav</h3>

<div class="menu">
    <button onclick="openTab('https://instagram.com/thefilmydj_/')">My Instagram</button>
    <button onclick="openTab('https://youtube.com/@thefilmydj')">My YouTube</button>
    <button onclick="openTab('study.html')">Study Material</button>
    <button onclick="openTab('projects.html')">My Projects</button>
    <button onclick="openTab('reels.html')">My Reels</button>
</div>

<div class="photo-box"></div>

<!-- Background Color Controls -->
<!-- Settings Panel -->
<div class="settings-btn" onclick="toggleSettings()">⚙️</div>
<div class="settings-panel" id="settingsPanel">
    <h3>Background Settings</h3>

    <label>Live Moving Gradient</label>
    <button onclick="startMovingBG()">Start</button>
    <button onclick="stopMovingBG()">Stop</button>

    <br><br>

    <label>Pick Solid Color</label>
    <input type="color" id="solid" onchange="changeBG(this.value)">

    <br><br>

    <label>Gradient Color 1</label>
    <input type="color" id="g1" value="#ff0080" onchange="applyGradient()">

    <label>Gradient Color 2</label>
    <input type="color" id="g2" value="#00bfff" onchange="applyGradient()">
</div>

<script>
function openTab(url) { window.open(url, '_blank'); }

function changeBG(color) {
    document.body.style.background = color;
}

function applyGradient() {
    let c1 = document.getElementById("g1").value;
    let c2 = document.getElementById("g2").value;
    document.body.style.background = `linear-gradient(120deg, ${c1}, ${c2})`;
}
function toggleSettings() {
    let panel = document.getElementById("settingsPanel");
    if (panel.style.display === "block") {
        panel.style.display = "none";
    } else {
        panel.style.display = "block";
    }
} else {
        p.style.display = "block";
    }
}

let moving = false;
let oldBG = document.body.style.background;

function startMovingBG() {
    moving = true;
    document.body.style.background = "linear-gradient(270deg, #ff0080, #00bfff, #7d00ff)";
    document.body.style.backgroundSize = "600% 600%";
    document.body.style.animation = "liveGradient 8s ease infinite";
}

function stopMovingBG() {
    moving = false;
    document.body.style.animation = "none";
}

</script>

<script>
// Auto rotating color mode
function enableAutoColors() {
    document.body.classList.add("auto-rotate");
}
function disableAutoColors() {
    document.body.classList.remove("auto-rotate");
}

// Add floating bubbles
for (let i = 0; i < 12; i++) {
    let b = document.createElement('div');
    b.className = 'bubble';
    b.style.left = Math.random() * 100 + 'vw';
    b.style.animationDelay = Math.random() * 6 + 's';
    b.style.animationDuration = 10 + Math.random() * 10 + 's';
    document.body.appendChild(b);
}
</script>
</body>
</html>
