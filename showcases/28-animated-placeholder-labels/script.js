const form = document.querySelector('.form');
form.addEventListener('submit', e => {
  if (!form.checkValidity()) {
    e.preventDefault();
    form.classList.remove('shake');
    void form.offsetWidth;
    form.classList.add('shake');
  }
});
