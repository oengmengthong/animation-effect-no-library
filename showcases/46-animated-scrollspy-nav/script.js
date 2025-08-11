const links = document.querySelectorAll('.spy a');
const indicator = document.querySelector('.indicator');
const sections = document.querySelectorAll('.panel');
const motion = window.matchMedia('(prefers-reduced-motion: reduce)');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({behavior: motion.matches ? 'auto' : 'smooth'});
  });
});

function moveIndicator(link) {
  const rect = link.getBoundingClientRect();
  indicator.style.width = rect.width + 'px';
  indicator.style.transform = `translateX(${link.offsetLeft}px)`;
}

window.addEventListener('load', () => moveIndicator(links[0]));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const active = document.querySelector(`.spy a[href="#${entry.target.id}"]`);
      moveIndicator(active);
    }
  });
}, {threshold: 0.6});

sections.forEach(sec => observer.observe(sec));
