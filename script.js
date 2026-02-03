const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");

/* Create music object */
const music = new Audio("love.mp3");
music.loop = true;
music.volume = 1;

/* 🔑 IMPORTANT: unlock audio on first click anywhere */
document.body.addEventListener("click", () => {
  if (music.paused) music.play();
}, { once: true });

/* NO button runs away */
noBtn.addEventListener("mouseover", () => {
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * 80 + "vw";
  noBtn.style.top = Math.random() * 80 + "vh";
});

/* YES button */
yesBtn.addEventListener("click", () => {
  music.play();

  setTimeout(() => {
    document.body.innerHTML = `
      <div class="container">
        <h1>She said YES 💍💖</h1>
        <p>My heart is yours forever 🥰</p>
      </div>
    `;
  }, 300);
});
