const frame = document.querySelector('.frame');
let timer;
frame.addEventListener('mouseenter', () => {
  timer = setTimeout(() => frame.classList.add('zoom'), 150);
});
frame.addEventListener('mouseleave', () => {
  clearTimeout(timer);
  frame.classList.remove('zoom');
});
