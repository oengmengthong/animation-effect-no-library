const links = document.querySelectorAll('#toc a');
const sections = Array.from(links).map(l => document.querySelector(l.getAttribute('href')));
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const index = sections.indexOf(entry.target);
    if (entry.isIntersecting) {
      links.forEach(l => l.classList.remove('active'));
      links[index].classList.add('active');
    }
  });
}, { rootMargin: '-50% 0px -50% 0px' });
sections.forEach(sec => observer.observe(sec));
