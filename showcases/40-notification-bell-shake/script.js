const bell = document.getElementById('bell');
const badge = document.getElementById('badge');
let count = 0;

bell.addEventListener('click', () => {
  count++;
  badge.textContent = count;
  bell.classList.add('shake', 'has-badge');
  bell.addEventListener('animationend', () => bell.classList.remove('shake'), { once: true });
});
