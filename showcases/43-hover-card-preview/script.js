const card = document.querySelector('.card');
let intent;
card.addEventListener('mouseenter', () => {
  intent = setTimeout(() => card.classList.add('show'), 200);
});
card.addEventListener('mouseleave', () => {
  clearTimeout(intent);
  card.classList.remove('show');
});
card.addEventListener('focus', () => {
  intent = setTimeout(() => card.classList.add('show'), 200);
});
card.addEventListener('blur', () => {
  clearTimeout(intent);
  card.classList.remove('show');
});
