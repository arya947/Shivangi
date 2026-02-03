const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);
  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div class="container">
      <h1>Yayyy! 💖🥰</h1>
      <p>You just made my day 💘</p>
    </div>
  `;
});

/* Hearts animation */
setInterval(() => {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.bottom = "0px";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
}, 300);
