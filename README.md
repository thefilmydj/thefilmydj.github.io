<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>the filmy dj_</title>

<style>
    body {
        margin: 0;
        font-family: Arial, sans-serif;
        background: linear-gradient(120deg, #0f1724, #1e3a5f);
        color: white;
        overflow-x: hidden;
        height: 100vh; /* FULL SCREEN FIX */
        transition: background 0.4s ease;
    }

    /* Animations */
    @keyframes shake {
        0% { transform: translateY(0); }
        50% { transform: translateY(-6px); }
        100% { transform: translateY(0); }
    }

    @keyframes liveGradient {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }

    /* Header */
    header {
        display: flex;
        align-items: center;
        gap: 20px;
        padding: 30px;
    }

    .logo-circle {
        width: 90px;
        height: 90px;
        border-radius: 50%;
        background: url('YOUR_LOGO_URL') center/cover; /* PANEL PHOTO FIX */
        animation: shake 2s infinite;
        border: 3px solid rgba(255,255,255,0.25);
    }

    h1 { font-size: 44px; font-weight: bold; }
    .t { color: #ff3b3b; margin-right: 8px; }
    .film { color: #25d366; margin-right: 8px; }
    .dj { color: #f1c40f; margin-right: 2px; }
    .uscore { color: #00aaff; }

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
        background: rgba(255,255,255,0.2);
        color: white;
        font-size: 18px;
        transition: 0.3s;
    }

    .menu button:hover {
        transform: scale(1.12);
        background: rgba(255,255,255,0.35);
    }

    /* Photo */
    .photo-box {
        width: 370px;
        height: 370px;
        background: url('YOUR_PHOTO_URL') center/cover;
        border-radius: 40px;
        position: absolute;
        right: 60px;
        top: 300px;
        animation: shake 2.3s infinite;
        border: 4px solid rgba(255,255,255,0.22);
    }

    /* SETTINGS */
    .settings-btn {
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 1000;
        font-size: 26px;
        background: rgba(255,255,255,0.3);
        padding: 10px 14px;
        border-radius: 50%;
        cursor: pointer;
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
        z-index: 1000;
        color: white;
        backdrop-filter: blur(8px);
    }
</style>
</head>

<body>

<header>
    <div class="logo-circle"></div>

    <!-- FIXED SPACING → the filmy dj_ -->
    <h1>
        <span class="t">thefilmydj_</span>
    </h1>
</header>

<h3 style="margin-left:40px;">Dnyaneshwar Jadhav</h3>

<!-- Menu -->
<div class="menu">
    <button onclick="openTab('https://instagram.com/thefilmydj_/')">Instagram</button>
    <button onclick="openTab('https://youtube.com/@thefilmydj')">YouTube</button>
    <button onclick="openTab('study.html')">Study</button>
    <button onclick="openTab('projects.html')">My Ph</button>
    <button onclick="openTab('reels.html')">Reels</button>
</div>

<div class="photo-box"></div>

<!-- SETTINGS BUTTON -->
<div class="settings-btn" onclick="toggleSettings()">⚙️</div>

<!-- SETTINGS PANEL -->
<div class="settings-panel" id="settingsPanel">
    <h3>Background Controls</h3>

    <p>Live Moving BG</p>
    <button onclick="startMovingBG()">Start</button>
    <button onclick="stopMovingBG()">Stop</button>

    <br><br>
    <p>Solid Color</p>
    <input type="color" id="solid" onchange="changeBG(this.value)">

    <br><br>
    <p>Gradient</p>
    <input type="color" id="g1" value="#ff0080" onchange="applyGradient()">
    <input type="color" id="g2" value="#00bfff" onchange="applyGradient()">
</div>

<script>
function openTab(url) { window.open(url, "_blank"); }

function toggleSettings() {
    let panel = document.getElementById("settingsPanel");
    panel.style.display = (panel.style.display === "block") ? "none" : "block";
}

function changeBG(color) {
    document.body.style.background = color;
    document.body.style.animation = "none";
}

function applyGradient() {
    let c1 = document.getElementById("g1").value;
    let c2 = document.getElementById("g2").value;
    document.body.style.background = `linear-gradient(120deg, ${c1}, ${c2})`;
    document.body.style.animation = "none";
}

function startMovingBG() {
    document.body.style.background =
        "linear-gradient(270deg,#ff0080,#00bfff,#7d00ff)";
    document.body.style.backgroundSize = "600% 600%";
    document.body.style.animation = "liveGradient 8s infinite";
}

function stopMovingBG() {
    document.body.style.animation = "none";
}
</script>

</body>
</html>
