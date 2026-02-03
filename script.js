document.addEventListener("DOMContentLoaded", () => {

  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const card = document.querySelector(".container");
  const music = document.getElementById("music");

  /* NO button runs away */
  noBtn.addEventListener("mouseenter", () => {
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * 70 + "%";
    noBtn.style.top = Math.random() * 70 + "%";
  });

  /* YES button */
  yesBtn.addEventListener("click", () => {

    // play music if available
    if (music) {
      music.loop = true;
      music.play().catch(() => {});
    }

    // YOUR requested content
    card.innerHTML = `
      <h1>She said YES 💍💖</h1>
      <p>“From this moment on,
it’s you and me — in every smile,
every argument, every dream, and every tomorrow 💞
I’m all yours.”</p>
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

});

