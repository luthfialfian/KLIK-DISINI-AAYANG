/* ===== Efek tambahan interaktif & animasi lembut ===== */

// Efek sparkle di background (bintang kecil lembut)
function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle-dot');
    sparkle.style.left = Math.random() * 100 + 'vw';
    sparkle.style.top = Math.random() * 100 + 'vh';
    sparkle.style.width = sparkle.style.height = (Math.random() * 4 + 2) + 'px';
    sparkle.style.opacity = Math.random() * 0.8 + 0.2;
    document.body.appendChild(sparkle);
  
    setTimeout(() => sparkle.remove(), 4000);
  }
  setInterval(createSparkle, 800);
  
  // CSS untuk sparkle (dibuat langsung via JS biar fleksibel)
  const sparkleStyle = document.createElement('style');
  sparkleStyle.innerHTML = `
    .sparkle-dot {
      position: fixed;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(255,192,203,0.9), rgba(255,182,193,0));
      animation: sparkleFloat 4s ease-in-out infinite;
      z-index: 2;
      pointer-events: none;
    }
    @keyframes sparkleFloat {
      0%, 100% { transform: translateY(0) scale(1); opacity: 0.5; }
      50% { transform: translateY(-6px) scale(1.3); opacity: 1; }
    }
  `;
  document.head.appendChild(sparkleStyle);
  
  // Animasi muncul saat scroll (reveal)
  const revealEls = document.querySelectorAll('.reveal');
  function handleReveal() {
    revealEls.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add('active');
      }
    });
  }
  window.addEventListener('scroll', handleReveal);
  handleReveal();
  
  // Efek hover romantis di card
  const galleryCards = document.querySelectorAll('.card');
  galleryCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transition = 'transform 0.4s ease, box-shadow 0.4s ease';
      card.style.boxShadow = '0 15px 30px rgba(255,182,193,0.4)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
    });
  });
  
  // Animasi floating halus di background (bokeh tambahan)
  function createBokeh() {
    const dot = document.createElement('div');
    dot.classList.add('bokeh-float');
    dot.style.left = Math.random() * 100 + 'vw';
    dot.style.top = Math.random() * 100 + 'vh';
    dot.style.width = dot.style.height = (Math.random() * 20 + 10) + 'px';
    document.body.appendChild(dot);
  
    setTimeout(() => dot.remove(), 12000);
  }
  setInterval(createBokeh, 2500);
  
  const bokehStyle = document.createElement('style');
  bokehStyle.innerHTML = `
    .bokeh-float {
      position: fixed;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(255,182,193,0.3), transparent);
      animation: bokehDrift 12s ease-in-out infinite;
      pointer-events: none;
      z-index: 1;
    }
    @keyframes bokehDrift {
      0% { transform: translateY(0) scale(1); opacity: 0.6; }
      50% { transform: translateY(-40px) scale(1.3); opacity: 1; }
      100% { transform: translateY(0) scale(1); opacity: 0.6; }
    }
  `;
  document.head.appendChild(bokehStyle);
  
  // Efek masuk lembut saat pertama kali buka halaman
  window.addEventListener('load', () => {
    document.querySelectorAll('header, .gallery, .message, footer').forEach(el => {
      el.classList.add('fade-in');
    });
  });
  