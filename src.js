/* ---------- MUSIC SYSTEM ---------- */

// STEP 1: YOUR SONG LIST (इथे unlimited paste कर)
const songs = [
  "https://example.com/song1.mp3",
  "https://example.com/song2.mp3",
  "https://example.com/song3.mp3"
];
// इथे SONG URL paste करायच्या ↑↑↑ (Unlimited)

let index = 0;
const music = document.getElementById("musicPlayer");
const titleBox = document.getElementById("musicTitle");

/* Open Music Page */
document.getElementById("musicBtn").addEventListener("click", ()=>{
  document.getElementById("musicPage").style.display = "flex";
  loadSong(index);
});

/* Close */
function closeMusicPage(){
  document.getElementById("musicPage").style.display = "none";
  music.pause();
}

/* Load Song */
function loadSong(i){
  music.src = songs[i];
  const name = songs[i].split("/").pop().replace(/[-_]/g," ");
  titleBox.textContent = name;
  music.play();
}

/* Play / Pause */
function toggleMusic(){
  if(music.paused) music.play();
  else music.pause();
}

/* Next */
function nextSong(){
  index = (index + 1) % songs.length;
  loadSong(index);
}

/* Previous */
function prevSong(){
  index = (index - 1 + songs.length) % songs.length;
  loadSong(index);
}

/* Loop */
function loopSong(){
  music.loop = !music.loop;
  alert(music.loop ? "Loop ON" : "Loop OFF");
}

/* Auto Next */
music.addEventListener("ended", ()=>{
  if(!music.loop){
    nextSong();
  }
});
