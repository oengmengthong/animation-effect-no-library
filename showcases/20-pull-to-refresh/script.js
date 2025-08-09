const pull = document.getElementById('pull');
const pullText = document.getElementById('pullText');
let startY = null;
let currentY = 0;
const threshold = 80;
let refreshing = false;

window.addEventListener('pointerdown', e => {
  if (window.scrollY === 0 && !refreshing) {
    startY = e.clientY;
  }
});

window.addEventListener('pointermove', e => {
  if (startY !== null && !refreshing) {
    currentY = e.clientY - startY;
    if (currentY > 0) {
      e.preventDefault();
      const translate = Math.min(currentY, threshold + 40) - 50;
      pull.style.transform = `translateY(${translate}px)`;
    }
  }
}, { passive: false });

window.addEventListener('pointerup', () => {
  if (startY !== null && !refreshing) {
    if (currentY > threshold) {
      doRefresh();
    } else {
      reset();
    }
  }
  startY = null;
  currentY = 0;
});

function reset() {
  pull.style.transition = 'transform 0.3s';
  pull.style.transform = 'translateY(-100%)';
  pull.addEventListener('transitionend', () => {
    pull.style.transition = '';
  }, { once: true });
}

function doRefresh() {
  refreshing = true;
  pullText.textContent = 'Refreshing...';
  pull.style.transition = 'transform 0.3s';
  pull.style.transform = 'translateY(0)';
  setTimeout(() => {
    pullText.textContent = 'Done';
    setTimeout(() => {
      reset();
      pullText.textContent = '↓ Pull to refresh';
      refreshing = false;
    }, 500);
  }, 800);
}
