const btn = document.getElementById('go');
const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');
let particles = [];

function resize() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}
window.addEventListener('resize', resize);
resize();

function createConfetti(x, y) {
  for (let i = 0; i < 100; i++) {
    particles.push({
      x,
      y,
      vx: (Math.random() - 0.5) * 6,
      vy: Math.random() * -3 - 2,
      color: `hsl(${Math.random() * 360}, 100%, 50%)`,
      size: Math.random() * 6 + 2,
      life: 100
    });
  }
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;
    p.vy += 0.05;
    p.life--;
    ctx.fillStyle = p.color;
    ctx.fillRect(p.x, p.y, p.size, p.size);
  });
  particles = particles.filter(p => p.life > 0);
  requestAnimationFrame(update);
}
update();

btn.addEventListener('click', e => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const rect = e.target.getBoundingClientRect();
  createConfetti(rect.left + rect.width / 2, rect.top + rect.height / 2);
});
