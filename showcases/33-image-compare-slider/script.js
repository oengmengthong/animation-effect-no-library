const slider = document.getElementById('slider');
const wrapper = document.querySelector('.after-wrapper');
const divider = document.getElementById('divider');

function update() {
  wrapper.style.width = slider.value + '%';
  divider.style.left = slider.value + '%';
}
slider.addEventListener('input', update);
update();
