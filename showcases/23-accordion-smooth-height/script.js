const items = document.querySelectorAll('.item');
const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
items.forEach(item => {
  const btn = item.querySelector('button');
  const panel = item.querySelector('.panel');
  btn.addEventListener('click', () => {
    const open = item.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
    panel.style.maxHeight = open ? panel.scrollHeight + 'px' : 0;
    if (motion.matches) {
      panel.style.transition = 'none';
    }
  });
});
