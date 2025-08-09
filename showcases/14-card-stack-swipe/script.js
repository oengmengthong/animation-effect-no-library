const deck = document.querySelector('.deck');
const cards = Array.from(deck.querySelectorAll('.card'));
let active = null;
let startX = 0;
let currentX = 0;

function pointerDown(e) {
  active = e.currentTarget;
  startX = e.clientX;
  active.setPointerCapture(e.pointerId);
  active.style.transition = 'none';
}

function pointerMove(e) {
  if (!active) return;
  currentX = e.clientX - startX;
  active.style.transform = `translateX(${currentX}px) rotate(${currentX / 20}deg)`;
}

function pointerUp(e) {
  if (!active) return;
  active.releasePointerCapture(e.pointerId);
  const threshold = deck.offsetWidth / 3;
  active.style.transition = 'transform 0.3s ease';
  if (Math.abs(currentX) > threshold) {
    const dir = currentX > 0 ? 1 : -1;
    active.style.transform = `translateX(${dir * deck.offsetWidth * 1.5}px) rotate(${dir * 45}deg)`;
    active.addEventListener('transitionend', () => active.remove(), { once: true });
  } else {
    active.style.transform = '';
  }
  active = null;
}

cards.forEach(card => {
  card.addEventListener('pointerdown', pointerDown);
  card.addEventListener('pointermove', pointerMove);
  card.addEventListener('pointerup', pointerUp);
  card.addEventListener('pointercancel', pointerUp);
});

const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
function setup() {
  if (motionQuery.matches) {
    cards.forEach(card => {
      card.removeEventListener('pointerdown', pointerDown);
      card.removeEventListener('pointermove', pointerMove);
      card.removeEventListener('pointerup', pointerUp);
      card.removeEventListener('pointercancel', pointerUp);
      card.style.transition = 'none';
      card.style.transform = '';
    });
  }
}
motionQuery.addEventListener('change', setup);
setup();
