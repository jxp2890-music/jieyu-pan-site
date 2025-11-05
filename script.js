/* script.js: bilingual toggle + music control */
document.addEventListener('DOMContentLoaded', function(){
  const langBtn = document.getElementById('langToggle');
  const musicBtn = document.getElementById('musicToggle');
  const bg = document.getElementById('bgmusic');
  let lang = 'en';

  langBtn.addEventListener('click', function(){
    lang = (lang === 'en') ? 'zh' : 'en';
    document.querySelectorAll('.en').forEach(e=> e.style.display = (lang==='en') ? '' : 'none');
    document.querySelectorAll('.cn').forEach(e=> e.style.display = (lang==='zh') ? '' : 'none');
    langBtn.textContent = (lang === 'en') ? '中文' : 'EN';
  });

  musicBtn.addEventListener('click', function(){
    if(bg.paused){
      bg.play().catch(()=>{ alert('Browser blocked autoplay. Click Play on the music control to allow.'); });
      musicBtn.textContent = 'Pause Music';
    } else {
      bg.pause();
      musicBtn.textContent = 'Play Music';
    }
  });

  // initial text state
  document.querySelectorAll('.cn').forEach(e=> e.style.display = 'none');
});
