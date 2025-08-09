const tabs = Array.from(document.querySelectorAll('.tab'));
const underline = document.querySelector('.underline');

function setUnderline(el) {
  underline.style.transform = `translateX(${el.offsetLeft}px)`;
  underline.style.width = `${el.offsetWidth}px`;
}

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    setUnderline(tab);
  });
});

const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
function setup() {
  if (motionQuery.matches) {
    underline.style.transition = 'none';
  }
}
motionQuery.addEventListener('change', setup);
setup();
setUnderline(document.querySelector('.tab.active'));
