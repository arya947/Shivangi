const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const music = document.getElementById("bgMusic");

/* prepare audio */
music.volume = 1;
music.loop = true;

/* NO button runs away */
noBtn.addEventListener("mouseover", () => {
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * 80 + "vw";
  noBtn.style.top = Math.random() * 80 + "vh";
});

/* YES button — GUARANTEED audio */
yesBtn.addEventListener("click", () => {
  music.muted = false;
  music.play();

  setTimeout(() => {
    document.body.innerHTML = `
      <div class="container">
        <h1>She said YES 💍💖</h1>
        <p>My heart is yours forever 🥰</p>
      </div>
    `;
  }, 200);
});
