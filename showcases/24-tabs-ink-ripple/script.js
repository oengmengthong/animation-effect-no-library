const tabs = document.querySelectorAll('.tabs button');
const panels = document.querySelectorAll('.panel');
const motion = window.matchMedia('(prefers-reduced-motion: reduce)');

tabs.forEach(btn => {
  btn.addEventListener('click', e => {
    panels.forEach(p => p.classList.toggle('active', p.id === btn.dataset.target));
    tabs.forEach(b => b.setAttribute('aria-selected', b === btn));
    if (!motion.matches) {
      const rect = btn.getBoundingClientRect();
      btn.style.setProperty('--x', `${e.clientX - rect.left}px`);
      btn.style.setProperty('--y', `${e.clientY - rect.top}px`);
      btn.classList.remove('ripple');
      void btn.offsetWidth;
      btn.classList.add('ripple');
    }
  });
  btn.addEventListener('transitionend', () => btn.classList.remove('ripple'));
});
