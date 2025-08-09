const btn = document.getElementById('burger');

btn.addEventListener('click', () => {
  const open = btn.classList.toggle('open');
  btn.setAttribute('aria-expanded', open);
});
