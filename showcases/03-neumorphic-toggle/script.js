const toggle = document.querySelector('.toggle');

toggle.addEventListener('click', () => {
  const isOn = toggle.getAttribute('aria-checked') === 'true';
  toggle.setAttribute('aria-checked', String(!isOn));
});
