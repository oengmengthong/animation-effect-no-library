const toggle = document.getElementById('toggle');
const menu = document.querySelector('.menu');
toggle.addEventListener('click', () => {
  menu.classList.toggle('open');
});
