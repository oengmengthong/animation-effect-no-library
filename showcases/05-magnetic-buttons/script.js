const buttons = document.querySelectorAll('.magnet');

function handleMove(e) {
  buttons.forEach(btn => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    const dist = Math.hypot(x, y);
    if (dist < 150) {
      btn.style.transform = `translate(${x / 5}px, ${y / 5}px)`;
    } else {
      btn.style.transform = '';
    }
  });
}

function reset() {
  buttons.forEach(btn => (btn.style.transform = ''));
}

const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

function setup() {
  reset();
  window.removeEventListener('pointermove', handleMove);
  if (!motionQuery.matches) {
    window.addEventListener('pointermove', handleMove);
  }
}

motionQuery.addEventListener('change', setup);
setup();
