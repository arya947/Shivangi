const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const music = document.getElementById("bgMusic");

/* NO button moves */
noBtn.addEventListener("mouseover", () => {
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * 80 + "vw";
  noBtn.style.top = Math.random() * 80 + "vh";
});

/* YES button — music + message */
yesBtn.addEventListener("click", () => {
  music.volume = 1;
  music.loop = true;
  music.play();   // ✅ works on GitHub Pages

  document.body.innerHTML = `
    <div class="container">
      <h1>She said YES 💍💖</h1>
      <p>My heart is yours forever 🥰</p>
    </div>
  `;
});

/* Floating hearts */
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 4000);
}, 300);
