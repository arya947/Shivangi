// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {

  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const card = document.getElementById("card");
  const music = document.getElementById("music");

  // SAFETY CHECK
  if (!yesBtn || !noBtn || !card) {
    alert("JS not connected properly");
    return;
  }

  // NO button moves
  noBtn.addEventListener("mouseenter", () => {
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * 70 + "%";
    noBtn.style.top = Math.random() * 70 + "%";
  });

  // YES button works
  yesBtn.addEventListener("click", () => {
    if (music) {
      music.loop = true;
      music.play().catch(() => {});
    }

    card.innerHTML = `
      <h1>She said YES 💍💖</h1>
      <p>My heart is yours forever 🥰</p>
    `;

    // Hearts animation
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
