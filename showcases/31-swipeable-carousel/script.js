const carousel = document.getElementById('carousel');
let isDown = false;
let startX;
let scrollLeft;

carousel.addEventListener('pointerdown', e => {
  isDown = true;
  startX = e.pageX - carousel.offsetLeft;
  scrollLeft = carousel.scrollLeft;
  carousel.setPointerCapture(e.pointerId);
});
carousel.addEventListener('pointerleave', () => isDown = false);
carousel.addEventListener('pointerup', () => isDown = false);
carousel.addEventListener('pointermove', e => {
  if (!isDown) return;
  const x = e.pageX - carousel.offsetLeft;
  carousel.scrollLeft = scrollLeft + (startX - x);
});
