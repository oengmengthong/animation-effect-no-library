const sections = document.querySelectorAll('.reveal');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
  sections.forEach(section => section.classList.add('visible'));
} else {
  const observer = new IntersectionObserver((entries, obs) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    }
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -10% 0px'
  });

  sections.forEach(section => observer.observe(section));
}
