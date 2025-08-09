const target = document.querySelector('.stagger');
const text = target.textContent.trim();
target.setAttribute('aria-label', text);
target.textContent = '';

text.split('').forEach((ch, i) => {
  const span = document.createElement('span');
  span.textContent = ch === ' ' ? '\u00A0' : ch;
  span.style.setProperty('--i', i);
  target.appendChild(span);
});

const motion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (motion.matches) {
  target.classList.add('ready');
} else {
  requestAnimationFrame(() => target.classList.add('ready'));
}
