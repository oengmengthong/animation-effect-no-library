const menu = document.querySelector('.menu');
let visible = false;
document.addEventListener('contextmenu', e => {
  e.preventDefault();
  menu.style.top = e.pageY + 'px';
  menu.style.left = e.pageX + 'px';
  menu.classList.add('show');
  visible = true;
});
document.addEventListener('click', () => {
  if (visible) {
    menu.classList.remove('show');
    visible = false;
  }
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    menu.classList.remove('show');
    visible = false;
  }
});
