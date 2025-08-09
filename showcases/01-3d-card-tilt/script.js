const wrapper = document.querySelector('.card-wrapper');
const card = document.querySelector('.card');

function handleMove(e) {
  const rect = wrapper.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const midX = rect.width / 2;
  const midY = rect.height / 2;
  const rotateY = ((x - midX) / midX) * 15;
  const rotateX = ((y - midY) / midY) * -15;
  card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}

function reset() {
  card.style.transform = '';
}

const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

function setup() {
  if (motionQuery.matches) {
    wrapper.removeEventListener('pointermove', handleMove);
    wrapper.removeEventListener('pointerleave', reset);
    reset();
    return;
  }
  wrapper.addEventListener('pointermove', handleMove);
  wrapper.addEventListener('pointerleave', reset);
}

motionQuery.addEventListener('change', setup);
setup();
