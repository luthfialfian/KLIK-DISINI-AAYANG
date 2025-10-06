// Floating hearts
for (let i = 0; i < 10; i++) {
    const h = document.createElement('div');
    h.classList.add('heart');
    h.style.left = Math.random() * 100 + 'vw';
    h.style.animationDuration = (Math.random() * 5 + 6) + 's';
    h.style.opacity = Math.random();
    document.body.appendChild(h);
  }
  
  // Confetti (lebih sedikit & lembut)
  const colors = ['#f48fb1', '#ce93d8', '#ba68c8', '#ffb3d1'];
  for (let i = 0; i < 40; i++) {
    const conf = document.createElement('div');
    conf.classList.add('confetti');
    conf.style.left = Math.random() * 100 + 'vw';
    conf.style.background = colors[Math.floor(Math.random() * colors.length)];
    conf.style.animationDuration = (Math.random() * 4 + 4) + 's';
    conf.style.width = conf.style.height = (Math.random() * 5 + 3) + 'px';
    conf.style.opacity = Math.random() * 0.8 + 0.2;
    conf.style.position = 'fixed';
    conf.style.top = '-10px';
    conf.style.borderRadius = '2px';
    conf.style.animation = `fall ${conf.style.animationDuration} linear infinite`;
    document.body.appendChild(conf);
  }
  
  // Gallery fade-in
  const cards = document.querySelectorAll('.card');
  window.addEventListener('scroll', () => {
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        card.classList.add('show');
      }
    });
  });
  
  // Music toggle
  const music = document.getElementById('bgMusic');
  function toggleMusic() {
    if (music.paused) {
      music.play();
    } else {
      music.pause();
    }
  }
  
  // Scroll to top
  const toTop = document.getElementById('toTop');
  window.addEventListener('scroll', () => {
    toTop.style.display = (window.scrollY > 300) ? 'block' : 'none';
  });
  
  // Landing page hide
  const landing = document.getElementById('landing');
  document.getElementById('enterBtn').onclick = () => {
    landing.style.opacity = '0';
    setTimeout(() => landing.remove(), 800);
  };
  document.getElementById('skipBtn').onclick = () => {
    landing.style.opacity = '0';
    setTimeout(() => landing.remove(), 800);
  };
  
  // Sakura petals
  const sakura = document.getElementById('sakuraLayer');
  function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    petal.style.position = 'fixed';
    petal.style.width = petal.style.height = (Math.random() * 10 + 6) + 'px';
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.top = '-10px';
    petal.style.borderRadius = '50%';
    petal.style.background = 'rgba(255,182,193,0.8)';
    petal.style.animation = `fall ${7 + Math.random() * 5}s linear infinite`;
    sakura.appendChild(petal);
    setTimeout(() => petal.remove(), 12000);
  }
  setInterval(createPetal, 800);
  
  // Balloons
  const balloonLayer = document.getElementById('balloonLayer');
  function createBalloon() {
    const b = document.createElement('div');
    b.classList.add('balloon');
    const size = Math.random() * 40 + 30;
    b.style.width = size + 'px';
    b.style.height = size * 1.1 + 'px';
    b.style.borderRadius = '50%';
    b.style.position = 'fixed';
    b.style.bottom = '-60px';
    b.style.left = Math.random() * 100 + 'vw';
    b.style.background = ['#f48fb1', '#ce93d8', '#ffb3d1'][Math.floor(Math.random() * 3)];
    b.style.opacity = 0.8;
    b.style.animation = `rise ${8 + Math.random() * 5}s linear`;
    balloonLayer.appendChild(b);
    setTimeout(() => b.remove(), 14000);
  }
  setInterval(createBalloon, 4000);
  
  // Particles background
  const canvas = document.getElementById('particles');
  const ctx = canvas.getContext('2d');
  
  function resize() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();
  
  const particles = [];
  for (let i = 0; i < 50; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 0.5,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3
    });
  }
  
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += p.dx;
      p.y += p.dy;
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;
      ctx.beginPath();
      ctx.fillStyle = 'rgba(255,255,255,0.5)';
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    });
    requestAnimationFrame(animate);
  }
  animate();
  