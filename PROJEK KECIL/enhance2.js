/* ===== Efek Parallax + Musik Interaktif ===== */

// Parallax lembut saat scroll
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const header = document.querySelector('header');
    const gallery = document.querySelector('.gallery');
    const message = document.querySelector('.message');
  
    if (header) header.style.transform = `translateY(${scrollY * 0.3}px)`;
    if (gallery) gallery.style.transform = `translateY(${scrollY * 0.1}px)`;
    if (message) message.style.transform = `translateY(${scrollY * 0.15}px)`;
  });
  
  // Efek sinar halus di seluruh halaman
  const lightLayer = document.createElement('div');
  lightLayer.className = 'light-overlay';
  document.body.appendChild(lightLayer);
  
  const lightStyle = document.createElement('style');
  lightStyle.innerHTML = `
    .light-overlay {
      position: fixed;
      inset: 0;
      pointer-events: none;
      background: radial-gradient(circle at 50% 50%, rgba(255,255,255,0.2), transparent 60%);
      animation: lightMove 8s ease-in-out infinite alternate;
      z-index: 3;
      mix-blend-mode: soft-light;
    }
    @keyframes lightMove {
      0% { background-position: 40% 60%; opacity: 0.4; }
      50% { background-position: 60% 40%; opacity: 0.6; }
      100% { background-position: 50% 50%; opacity: 0.5; }
    }
  `;
  document.head.appendChild(lightStyle);
  
  // ===== Musik Interaktif =====
  const bgMusic = document.getElementById('bgMusic');
  
  // Kontrol volume lewat scroll mouse
  window.addEventListener('wheel', (e) => {
    if (!bgMusic) return;
    if (e.deltaY < 0) {
      bgMusic.volume = Math.min(bgMusic.volume + 0.05, 1);
    } else {
      bgMusic.volume = Math.max(bgMusic.volume - 0.05, 0);
    }
  });
  
  // Tambahkan kontrol volume visual
  const volumeSlider = document.createElement('input');
  volumeSlider.type = 'range';
  volumeSlider.min = 0;
  volumeSlider.max = 1;
  volumeSlider.step = 0.01;
  volumeSlider.value = 0.6;
  volumeSlider.className = 'volume-slider';
  document.body.appendChild(volumeSlider);
  
  volumeSlider.addEventListener('input', () => {
    bgMusic.volume = volumeSlider.value;
  });
  
  // Style slider
  const sliderStyle = document.createElement('style');
  sliderStyle.innerHTML = `
    .volume-slider {
      position: fixed;
      bottom: 25px;
      left: 25px;
      width: 120px;
      height: 5px;
      accent-color: #ec407a;
      background: linear-gradient(90deg, #f48fb1, #ec407a);
      border-radius: 10px;
      outline: none;
      opacity: 0.8;
      transition: opacity 0.4s, transform 0.4s;
      z-index: 999;
    }
    .volume-slider:hover {
      opacity: 1;
      transform: scale(1.05);
    }
  `;
  document.head.appendChild(sliderStyle);
  
  // Volume otomatis naik pelan saat masuk
  if (bgMusic) {
    bgMusic.volume = 0;
    let fade = setInterval(() => {
      if (bgMusic.volume < 0.6) {
        bgMusic.volume = Math.min(bgMusic.volume + 0.01, 0.6);
      } else {
        clearInterval(fade);
      }
    }, 200);
  }
  
  // ===== Efek sentuhan romantis tambahan =====
  document.addEventListener('mousemove', (e) => {
    const glow = document.createElement('div');
    glow.className = 'cursor-glow';
    glow.style.left = e.pageX + 'px';
    glow.style.top = e.pageY + 'px';
    document.body.appendChild(glow);
    setTimeout(() => glow.remove(), 800);
  });
  
  const cursorStyle = document.createElement('style');
  cursorStyle.innerHTML = `
    .cursor-glow {
      position: absolute;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(255,192,203,0.7), transparent);
      pointer-events: none;
      transform: translate(-50%, -50%);
      animation: glowFade 0.8s ease-out forwards;
      z-index: 999;
    }
    @keyframes glowFade {
      from { opacity: 1; transform: scale(1); }
      to { opacity: 0; transform: scale(2); }
    }
  `;
  document.head.appendChild(cursorStyle);
  