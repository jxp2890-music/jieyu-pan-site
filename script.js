// ===== Welcome Section Animation + Background Music =====
document.addEventListener("DOMContentLoaded", function () {
  const enterBtn = document.getElementById("enter-btn");
  const welcome = document.getElementById("welcome");
  const bgMusic = document.getElementById("bg-music");

  enterBtn.addEventListener("click", () => {
    welcome.style.opacity = "0";
    setTimeout(() => {
      welcome.style.display = "none";
      bgMusic.volume = 0.4;
      bgMusic.play().catch(() => {
        console.log("Autoplay blocked, user must interact first.");
      });
    }, 800);
  });
});
