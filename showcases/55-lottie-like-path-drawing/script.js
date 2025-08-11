const path = document.querySelector('path');
const length = path.getTotalLength();
path.style.strokeDasharray = length;
path.style.strokeDashoffset = length;
requestAnimationFrame(() => {
  path.style.transition = 'stroke-dashoffset 2s ease';
  path.style.strokeDashoffset = '0';
});
