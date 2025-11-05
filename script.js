// ===== 欢迎页按钮控制背景音乐播放 =====
const enterBtn = document.getElementById('enter-btn');
const bgMusic = document.getElementById('bg-music');
const welcome = document.getElementById('welcome');

if (enterBtn) {
  enterBtn.addEventListener('click', () => {
    bgMusic.play().catch(() => {});
    welcome.style.display = 'none';
  });
}

// ===== 手机汉堡导航控制 =====
(function() {
  const htmlEl = document.documentElement;
  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');

  if (!navToggle) return;

  navToggle.addEventListener('click', () => {
    htmlEl.classList.toggle('nav-open');
  });

  mainNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      setTimeout(() => htmlEl.classList.remove('nav-open'), 100);
    });
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('header')) {
      htmlEl.classList.remove('nav-open');
    }
  });
})();
