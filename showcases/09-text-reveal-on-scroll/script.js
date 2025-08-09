const blocks = document.querySelectorAll('.reveal');
const motion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (motion.matches) {
  blocks.forEach(b => b.classList.add('visible'));
} else {
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  blocks.forEach(b => io.observe(b));
}
