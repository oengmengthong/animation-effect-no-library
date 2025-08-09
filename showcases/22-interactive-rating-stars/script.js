const stars = document.querySelectorAll('.star');
const rating = document.querySelector('.rating');
const out = document.getElementById('out');
stars.forEach((star, i) => {
  star.style.setProperty('--i', i);
  star.addEventListener('mouseenter', () => {
    stars.forEach((s, j) => {
      s.classList.toggle('hover', j <= i);
    });
  });
  star.addEventListener('click', () => {
    stars.forEach((s, j) => s.classList.toggle('selected', j <= i));
    out.textContent = `Rating: ${i + 1}`;
  });
});
rating.addEventListener('mouseleave', () => {
  stars.forEach(s => s.classList.remove('hover'));
});

const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
if (motion.matches) rating.dataset.motion = 'no';
