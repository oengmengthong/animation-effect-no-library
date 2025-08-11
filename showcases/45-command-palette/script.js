const overlay = document.querySelector('.overlay');
const input = overlay.querySelector('input');
const items = Array.from(overlay.querySelectorAll('li'));
const openBtn = document.getElementById('open');
const motion = window.matchMedia('(prefers-reduced-motion: reduce)');

function openPalette() {
  overlay.hidden = false;
  input.value = '';
  items.forEach((li, i) => {
    li.style.transitionDelay = motion.matches ? '0ms' : `${i * 50}ms`;
    li.classList.add('show');
    li.style.display = 'block';
  });
  input.focus();
}
function closePalette() {
  overlay.hidden = true;
  items.forEach(li => li.classList.remove('show'));
}
openBtn.addEventListener('click', openPalette);
document.addEventListener('keydown', e => {
  if ((e.key === 'k' && (e.metaKey || e.ctrlKey))) {
    e.preventDefault();
    openPalette();
  }
  if (e.key === 'Escape') closePalette();
});
overlay.addEventListener('click', e => {
  if (e.target === overlay) closePalette();
});
input.addEventListener('input', () => {
  const q = input.value.toLowerCase();
  items.forEach(li => {
    li.style.display = li.textContent.toLowerCase().includes(q) ? 'block' : 'none';
  });
});
