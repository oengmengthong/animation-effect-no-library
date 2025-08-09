const fab = document.querySelector('.fab');
const mainBtn = document.querySelector('.fab-main');

mainBtn.addEventListener('click', () => {
  const open = fab.classList.toggle('open');
  mainBtn.setAttribute('aria-expanded', open);
});

document.addEventListener('click', (e) => {
  if (!fab.contains(e.target)) {
    fab.classList.remove('open');
    mainBtn.setAttribute('aria-expanded', 'false');
  }
});
