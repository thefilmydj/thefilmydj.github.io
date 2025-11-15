<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Custom Panel</title>

<style>
  body {
    margin: 0;
    font-family: Arial;
    background: var(--bg, #000);
    transition: background 0.3s linear;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /* Moving Gradient Background */
  .live-bg {
    animation: moveBG 6s infinite alternate linear;
  }
  @keyframes moveBG {
    0% { background: linear-gradient(135deg, #ff0080, #00ddff); }
    100% { background: linear-gradient(135deg, #00ff88, #ff6600); }
  }

  /* PANEL */
  .panel {
    width: 90%;
    max-width: 420px;
    padding: 20px;
    margin-top: 40px;
    text-align: center;
    background: #111;
    border-radius: 20px;
    box-shadow: 0 0 25px rgba(255,255,255,0.25);
  }

  /* Logo */
  .logo {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 4px solid #fff;
    box-shadow: 0 0 20px white;
    animation: logoFloat 2s infinite ease-in-out;
  }
  @keyframes logoFloat {
    0% { transform: translateY(0); }
    50% { transform: translateY(-7px); }
    100% { transform: translateY(0); }
  }

  /* Name */
  .name {
    font-size: 30px;
    margin-top: 10px;
    font-weight: bold;
  }
  .t{ color:#ff5252; }
  .f{ color:#ffca28; }
  .d{ color:#00e676; }
  .u{ color:#29b6f6; }

  /* USER PHOTO */
  .user-photo {
    width: 200px;
    height: 200px;
    margin-top: 50px;
    border-radius: 50%;
    border: 5px solid white;
    box-shadow: 0 0 22px white;
    animation: photoFloat 2.5s infinite ease-in-out;
  }
  @keyframes photoFloat {
    0% { transform: translateY(0); }
    50% { transform: translateY(12px); }
    100% { transform: translateY(0); }
  }

  /* SETTINGS */
  .settings-box {
    margin-top: 30px;
    padding: 10px;
    background: #222;
    color: white;
    width: 90%;
    max-width: 420px;
    border-radius: 12px;
  }
  label { font-size: 15px; }
</style>
</head>

<body id="mainBody">

  <!-- MAIN PANEL -->
  <div class="panel">
    <img src="YOUR_LOGO.png" class="logo">

    <div class="name">
      <span class="t">the</span><span class="f">filmy</span><span class="d">dj</span><span class="u">_</span>
    </div>

    <!-- Your main links -->
    <p style="color:white; margin-top:20px; font-size:18px;">
      Study • My Ph. • Instagram • YouTube
    </p>
  </div>

  <!-- USER PHOTO -->
  <img src="your_photo.png" class="user-photo">

  <!-- SETTINGS -->
  <div class="settings-box">
    <label>Background Color Picker:</label>
    <br>
    <input type="color" id="bgPicker" />

    <br><br>

    <label>
      <input type="checkbox" id="liveBGtoggle">
      Enable Moving Gradient Background
    </label>
  </div>


<script>
  const body = document.getElementById("mainBody");
  const colorPicker = document.getElementById("bgPicker");
  const liveToggle = document.getElementById("liveBGtoggle");

  // COLOR PICKER
  colorPicker.addEventListener("input", () => {
    body.classList.remove("live-bg");
    body.style.setProperty("--bg", colorPicker.value);
  });

  // LIVE MOVING BACKGROUND
  liveToggle.addEventListener("change", () => {
    if (liveToggle.checked) {
      body.classList.add("live-bg");
    } else {
      body.classList.remove("live-bg");
    }
  });
</script>

</body>
</html>
