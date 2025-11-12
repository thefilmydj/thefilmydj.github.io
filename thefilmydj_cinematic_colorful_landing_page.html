<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>thefilmydj_ — Mini Insta-like</title>
  <style>
    :root{--bg:#fafafa;--card:#fff;--muted:#8e8e8e;--accent:#0095f6}
    *{box-sizing:border-box}
    body{font-family:Inter, Arial, sans-serif;background:var(--bg);margin:0;color:#111}
    header{display:flex;align-items:center;justify-content:space-between;padding:12px 16px;background:#fff;border-bottom:1px solid #e6e6e6}
    .brand{display:flex;align-items:center;gap:12px}
    .logo{width:36px;height:36px;border-radius:8px;background:linear-gradient(135deg,#ff9a9e,#fad0c4);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700}
    nav{display:flex;gap:8px}
    .btn{padding:8px 12px;border-radius:8px;border:0;background:transparent;cursor:pointer}
    main{max-width:980px;margin:20px auto;padding:0 16px}
    .layout{display:grid;grid-template-columns:1fr 320px;gap:20px}
    .card{background:var(--card);padding:12px;border-radius:10px;border:1px solid #ececec}
    .upload-area{display:flex;flex-direction:column;gap:8px;align-items:center;justify-content:center;padding:18px;border:1px dashed #ddd;border-radius:10px}
    .uploader input{display:none}
    .upload-preview{width:100%;max-height:420px;object-fit:cover;border-radius:8px}
    .feed{display:flex;flex-direction:column;gap:12px}
    .post{background:var(--card);border-radius:10px;padding:10px;border:1px solid #ececec}
    .post video{width:100%;border-radius:8px}
    .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(100px,1fr));gap:8px}
    .profile{position:sticky;top:12px}
    .username{font-weight:700}
    .muted{color:var(--muted);font-size:13px}
    .nav-icons{display:flex;gap:10px}
    .small{font-size:14px}
    footer{padding:16px;text-align:center;color:var(--muted);font-size:13px}
    .hidden{display:none}
  </style>
</head>
<body>
  <header>
    <div class="brand">
      <div class="logo">FD</div>
      <div>
        <div style="font-weight:700">thefilmydj_</div>
        <div class="muted" style="font-size:12px">Mini Insta-like site (your copy)</div>
      </div>
    </div>
    <nav class="nav-icons">
      <button class="btn" onclick="showTab('home')">Home</button>
      <button class="btn" onclick="showTab('reels')">Reels</button>
      <button class="btn" onclick="showTab('profile')">Profile</button>
      <button class="btn" onclick="showTab('settings')">Settings</button>
    </nav>
  </header>

  <main>
    <div class="layout">

      <div>
        <!-- HOME / REELS / PROFILE area -->
        <div id="homeTab" class="card">
          <h3>Home</h3>
          <div class="card uploader">
            <div class="upload-area">
              <div class="small muted">Upload a photo or short reel (client-side preview). To save permanently add files to your GitHub repo or use server upload.</div>
              <label style="margin-top:8px;">
                <input id="fileInput" type="file" accept="video/*,image/*">
                <button class="btn">Choose file</button>
              </label>
              <div style="width:100%">
                <img id="imgPreview" class="upload-preview hidden" alt="preview">
                <video id="videoPreview" class="upload-preview hidden" controls></video>
              </div>
              <div style="display:flex;gap:8px">
                <button class="btn" onclick="publish()">Publish to Feed</button>
                <button class="btn" onclick="clearPreview()">Clear</button>
              </div>
            </div>
          </div>

          <div style="margin-top:12px">
            <h4>Feed</h4>
            <div id="feed" class="feed">
              <!-- posts will be inserted here -->
            </div>
          </div>
        </div>

        <div id="reelsTab" class="card hidden" style="margin-top:12px">
          <h3>Reels</h3>
          <div id="reels" class="grid">
            <!-- reels previews -->
          </div>
        </div>

        <div id="profileTab" class="card hidden" style="margin-top:12px">
          <h3>Profile — <span id="username">thefilmydj_</span></h3>
          <p class="muted">Your posts</p>
          <div id="profileGrid" class="grid" style="margin-top:8px">
            <!-- thumbnails inserted here -->
          </div>
        </div>

        <div id="settingsTab" class="card hidden" style="margin-top:12px">
          <h3>Settings</h3>
          <p class="muted">Change display name and some options</p>
          <label>Display name: <input id="displayName" type="text" value="thefilmydj_"></label>
          <div style="margin-top:8px">
            <button class="btn" onclick="saveSettings()">Save</button>
          </div>
        </div>
      </div>

      <aside class="profile">
        <div class="card" style="text-align:center">
          <div style="font-weight:700">thefilmydj_</div>
          <div class="muted" style="margin-top:6px">0 posts • client-side demo</div>
          <div style="margin-top:10px">
            <button class="btn" onclick="showTab('profile')">View profile</button>
          </div>
        </div>

        <div class="card" style="margin-top:12px">
          <h4>How to make uploads permanent</h4>
          <ol style="padding-left:16px">
            <li>Make a GitHub repo (example: <code>thefilmydj-site</code>).</li>
            <li>Add folder <code>assets/videos/</code> via GitHub web UI (Add file → Upload files).</li>
            <li>Upload your video files and copy the raw.githubusercontent.com link for each file.</li>
            <li>Edit this page's HTML to replace client-side blobs with your raw links.</li>
            <li>Enable GitHub Pages (Settings → Pages → branch: main → / root) to host.</li>
          </ol>
        </div>
      </aside>

    </div>
  </main>

  <footer>
    Built for you — change username in the profile tab. Videos uploaded here are only client-side previews (not saved to GitHub automatically).
  </footer>

<script>
// Simple tab switcher
function showTab(name){
  ['home','reels','profile','settings'].forEach(t=>{
    const el = document.getElementById(t+"Tab");
    if(el) el.classList.toggle('hidden', t!==name);
  });
}

// file input handling
const fileInput = document.getElementById('fileInput');
const imgPreview = document.getElementById('imgPreview');
const videoPreview = document.getElementById('videoPreview');
let currentBlobUrl = null;

fileInput.addEventListener('change', e=>{
  const f = e.target.files[0];
  if(!f) return clearPreview();
  const type = f.type;
  if(currentBlobUrl){ URL.revokeObjectURL(currentBlobUrl); currentBlobUrl = null; }
  currentBlobUrl = URL.createObjectURL(f);
  if(type.startsWith('image/')){
    videoPreview.classList.add('hidden');
    imgPreview.src = currentBlobUrl;
    imgPreview.classList.remove('hidden');
  } else if(type.startsWith('video/')){
    imgPreview.classList.add('hidden');
    videoPreview.src = currentBlobUrl;
    videoPreview.classList.remove('hidden');
  } else { clearPreview(); alert('Unsupported file type'); }
});

function clearPreview(){
  fileInput.value = '';
  imgPreview.src = '';
  videoPreview.src = '';
  imgPreview.classList.add('hidden');
  videoPreview.classList.add('hidden');
  if(currentBlobUrl){ URL.revokeObjectURL(currentBlobUrl); currentBlobUrl = null; }
}

// publish to feed (client-side only)
function publish(){
  const f = fileInput.files[0];
  if(!f){ alert('Choose a file first'); return; }
  const type = f.type;
  const url = currentBlobUrl || URL.createObjectURL(f);
  const feed = document.getElementById('feed');
  const profileGrid = document.getElementById('profileGrid');
  const reels = document.getElementById('reels');

  const post = document.createElement('div');
  post.className = 'post';
  const header = document.createElement('div');
  header.style.display='flex'; header.style.justifyContent='space-between'; header.style.alignItems='center';
  header.innerHTML = `<div style=\"font-weight:700\">thefilmydj_</div><div class=\"muted\">Just now</div>`;
  post.appendChild(header);

  if(type.startsWith('image/')){
    const im = document.createElement('img'); im.src = url; im.style.width='100%'; im.style.borderRadius='8px'; post.appendChild(im);
    // thumbnail
    const thumb = document.createElement('img'); thumb.src = url; thumb.style.width='100%'; thumb.style.borderRadius='6px'; profileGrid.prepend(thumb);
  } else {
    const v = document.createElement('video'); v.controls = true; v.src = url; post.appendChild(v);
    // reel tile
    const tile = document.createElement('video'); tile.muted=true; tile.loop=true; tile.src=url; tile.style.width='100%'; tile.style.borderRadius='6px'; reels.prepend(tile);
  }

  feed.prepend(post);
  clearPreview();
}

// settings
function saveSettings(){
  const name = document.getElementById('displayName').value || 'thefilmydj_';
  document.getElementById('username').textContent = name;
  // also change header
  document.querySelector('header .brand div').firstChild;
  alert('Saved (client-side only). To make perm change edit HTML file before publishing to GitHub.');
}

</script>
</body>
</html>
