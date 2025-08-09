const circle = document.querySelector('circle');
const svg = document.querySelector('.progress');
const btn = document.getElementById('start');
const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;
circle.style.strokeDasharray = `${circumference}`;
circle.style.strokeDashoffset = circumference;

btn.addEventListener('click', () => {
  circle.style.strokeDashoffset = '0';
});

circle.addEventListener('transitionend', () => {
  svg.classList.add('done');
});

const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
if (motion.matches) {
  circle.style.transition = 'none';
}
