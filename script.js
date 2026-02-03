const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

/* Prepare music */
const music = new Audio("love.mp3");
music.loop = true;

/* NO button runs away */
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);
  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

/* YES = love + music */
yesBtn.addEventListener("click", () => {
  music.play();

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
  heart.classList.add("heart");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.bottom = "0px";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 4000);
}, 300);
