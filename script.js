// ===== CORAÇÕES FLUTUANTES =====
const heartsContainer = document.getElementById('heartsContainer');
const heartSymbols = ['♥', '❤', '💕', '💗', '💖', '💓'];

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('floating-heart');
  heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

  const size = Math.random() * 14 + 8;
  const left = Math.random() * 100;
  const duration = Math.random() * 8 + 10;
  const delay = Math.random() * 4;
  const color = Math.random() > 0.5 ? 'var(--rose)' : 'var(--pink)';

  heart.style.cssText = `
    left: ${left}%;
    font-size: ${size}px;
    color: ${color};
    animation-duration: ${duration}s;
    animation-delay: ${delay}s;
    filter: drop-shadow(0 0 4px rgba(181, 57, 90, 0.4));
  `;

  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), (duration + delay) * 1000);
}

setInterval(createHeart, 800);
for (let i = 0; i < 6; i++) setTimeout(createHeart, i * 300);

// ===== PÉTALAS CAINDO =====
const petalsContainer = document.getElementById('petalsContainer');

function createPetal() {
  const petal = document.createElement('div');
  petal.classList.add('petal');

  const left = Math.random() * 100;
  const duration = Math.random() * 6 + 8;
  const delay = Math.random() * 5;
  const size = Math.random() * 8 + 8;
  const hue = Math.random() > 0.4 ? '#e8758a' : '#b5395a';

  petal.style.cssText = `
    left: ${left}%;
    width: ${size}px;
    height: ${size}px;
    background: radial-gradient(ellipse, ${hue}cc, ${hue}66);
    animation-duration: ${duration}s;
    animation-delay: ${delay}s;
  `;

  petalsContainer.appendChild(petal);
  setTimeout(() => petal.remove(), (duration + delay) * 1000);
}

setInterval(createPetal, 1200);
for (let i = 0; i < 4; i++) setTimeout(createPetal, i * 400);

// ===== SCROLL REVEAL =====
const sections = document.querySelectorAll('.menu-section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      animateItems(entry.target);
    }
  });
}, { threshold: 0.08 });

sections.forEach(section => observer.observe(section));

function animateItems(section) {
  section.querySelectorAll('.menu-item').forEach(item => {
    const delay = parseInt(item.dataset.delay || 0);
    item.style.opacity = '0';
    item.style.transform = 'translateY(24px)';
    item.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
    setTimeout(() => {
      item.style.opacity = '1';
      item.style.transform = 'translateY(0)';
    }, delay + 200);
  });
}

// ===== IMAGENS — marca como carregada =====
document.querySelectorAll('.item-image img').forEach(img => {
  if (img.complete) {
    img.classList.add('loaded');
  } else {
    img.addEventListener('load', () => img.classList.add('loaded'));
  }
});

// ===== SPARKLE AO CLICAR =====
const sparkleSymbols = ['✦', '✧', '★', '✨', '💫', '·'];

document.addEventListener('click', e => {
  for (let i = 0; i < 5; i++) {
    const spark = document.createElement('div');
    spark.classList.add('sparkle');
    spark.textContent = sparkleSymbols[Math.floor(Math.random() * sparkleSymbols.length)];

    const angle = (Math.PI * 2 * i) / 5;
    const dist = Math.random() * 40 + 20;
    spark.style.cssText = `
      left: ${e.clientX + Math.cos(angle) * dist}px;
      top: ${e.clientY + Math.sin(angle) * dist}px;
      font-size: ${Math.random() * 10 + 8}px;
    `;

    document.body.appendChild(spark);
    setTimeout(() => spark.remove(), 800);
  }
});

// ===== TÍTULO: LUZ PULSANTE =====
const title = document.querySelector('.title');
if (title) {
  let intensity = 0, dir = 1;
  setInterval(() => {
    intensity += dir * 2;
    if (intensity >= 100) dir = -1;
    if (intensity <= 0) dir = 1;
    title.style.textShadow = `0 0 ${30 + intensity * 0.3}px rgba(181, 57, 90, ${0.3 + intensity * 0.003})`;
  }, 50);
}
