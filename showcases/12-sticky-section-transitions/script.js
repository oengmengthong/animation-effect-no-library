const wrapper = document.querySelector('.wrapper');
const scenes = Array.from(document.querySelectorAll('.scene'));

function handleScroll() {
  const start = wrapper.offsetTop;
  const progress = (window.scrollY - start) / window.innerHeight;
  scenes.forEach((scene, i) => {
    const offset = progress - i;
    const opacity = 1 - Math.min(Math.abs(offset), 1);
    scene.style.opacity = opacity;
    scene.style.transform = `translateY(${offset * -50}%) scale(${1 - Math.abs(offset) * 0.2})`;
  });
}

const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

function setup() {
  if (motionQuery.matches) {
    window.removeEventListener('scroll', handleScroll);
    scenes.forEach((scene, i) => {
      scene.style.transform = '';
      scene.style.opacity = i === 0 ? 1 : 0;
    });
  } else {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
  }
}

motionQuery.addEventListener('change', setup);
setup();
