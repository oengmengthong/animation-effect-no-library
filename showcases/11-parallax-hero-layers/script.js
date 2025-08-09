const layers = document.querySelectorAll('.layer');
const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let scrollY = window.pageYOffset;

function update() {
  layers.forEach(layer => {
    const speed = parseFloat(layer.dataset.speed);
    const x = (window.innerWidth / 2 - mouseX) * speed / 20;
    const y = scrollY * speed + (window.innerHeight / 2 - mouseY) * speed / 20;
    layer.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  });
}

function handleMouse(e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
  requestAnimationFrame(update);
}

function handleScroll() {
  scrollY = window.pageYOffset;
  requestAnimationFrame(update);
}

function setup() {
  if (motionQuery.matches) {
    document.removeEventListener('mousemove', handleMouse);
    window.removeEventListener('scroll', handleScroll);
    layers.forEach(layer => (layer.style.transform = ''));
    return;
  }
  document.addEventListener('mousemove', handleMouse);
  window.addEventListener('scroll', handleScroll);
  update();
}

motionQuery.addEventListener('change', setup);
setup();
