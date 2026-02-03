const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const music = document.getElementById("music");
const container = document.querySelector(".container");

/* NO button runs away */
noBtn.addEventListener("mouseenter", () => {
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * 70 + "%";
  noBtn.style.top = Math.random() * 70 + "%";
});

/* YES button — THIS WILL SHOW CONTENT */
yesBtn.addEventListener("click", () => {
  music.loop = true;
  music.play();

  container.innerHTML = `
    <h1>She said YES 💍💖</h1>
    <p>My heart is yours forever 🥰</p>
  `;

  // Floating hearts
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 4000);
  }, 300);
});
