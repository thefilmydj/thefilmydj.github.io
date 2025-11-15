<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>thefilmydj_</title>
<style>
  body {
    margin: 0;
    font-family: Arial, sans-serif;
    background: #f5f5f5;
  }
  .logo-circle {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background: url('1713568659017.jpg');
    background-size: cover;
    animation: float 3s ease-in-out infinite;
    margin: 20px;
  }
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-8px); }
    100% { transform: translateY(0px); }
  }
  header {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 20px;
  }
  h1 span {
    color: #ff4d4d;
  }
  .menu {
    display: flex;
    gap: 20px;
    padding: 20px;
  }
  .menu button {
    padding: 12px 22px;
    border-radius: 25px;
    border: 2px solid #1a1a1a;
    cursor: pointer;
    background: #fff;
    transition: 0.3s;
  }
  .menu button:hover {
    transform: scale(1.1);
  }
  .panel {
    width: 350px;
    height: 350px;
    background: #0f597d;
    border-radius: 40px;
    float: right;
    margin: 40px;
    padding: 20px;
    animation: float 3s ease-in-out infinite;
    background-image: url('assets/me.png');
    background-size: cover;
    background-position: center;
  }
  .links {
    position: absolute;
    bottom: 40px;
    left: 40px;
  }
  a {
    color: #0f3d63;
    text-decoration: none;
    font-size: 18px;
  }
</style>
</head>
<body>
<header>
  <div class="20240313_134001.png"></div>
  <h1>the<span>film</span>ydj_</h1>
</header>

<div class="menu">
  <button onclick="openTab('https://instagram.com/thefilmydj_/')">My Insta</button>
  <button onclick="openTab('https://youtube.com/@thefilmydj')">My YouTube</button>
  <button onclick="openTab('study.html')">Study material</button>
  <button onclick="openTab('projects.html')">My projects</button>
</div>

<div class="panel"></div>

<div class="links">
  <p>Contact: <a href="mailto:djjadhavdnyaneshwar@gmail.com">djjadhavdnyaneshwar@gmail.com</a></p>
</div>

<script>
function openTab(url) {
  window.open(url, '_blank');
}
</script>

</body>
</html>
