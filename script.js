const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const music = document.getElementById("music");

/* NO button runs away */
noBtn.addEventListener("mouseenter", () => {
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * 70 + "%";
  noBtn.style.top = Math.random() * 70 + "%";
});

/* YES button */
yesBtn.addEventListener("click", () => {
  music.loop = true;
  music.play();

  document.body.innerHTML = `
    <div class="container">
      <h1>She said YES 💍💖</h1>
      <p>My heart is yours forever 🥰</p>
    </div>
  `;

  // floating hearts
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 4000);
  }, 300);
});
