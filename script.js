const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");

const music = new Audio("love.mp3");
music.loop = true;
music.volume = 1;

/* NO button runs away */
noBtn.addEventListener("mouseover", () => {
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * 80 + "vw";
  noBtn.style.top = Math.random() * 80 + "vh";
});

/* YES click */
yesBtn.addEventListener("click", () => {
  music.play().then(() => {
    // wait a moment before changing DOM
    setTimeout(() => {
      document.body.innerHTML = `
        <div class="container">
          <h1>She said YES 💍💖</h1>
          <p>My heart is yours forever 🥰</p>
        </div>
      `;
    }, 300);
  }).catch(err => {
    console.log("Audio error:", err);
  });
});
