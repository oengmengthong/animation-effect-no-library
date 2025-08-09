const steps = document.querySelector('.steps');
const stepElems = document.querySelectorAll('.step');
let current = 0;

function show(i) {
  steps.style.transform = `translateX(-${i * 100}%)`;
  stepElems[current].setAttribute('aria-hidden', 'true');
  stepElems[i].setAttribute('aria-hidden', 'false');
  current = i;
}

document.querySelector('.next').addEventListener('click', () => show(1));
document.querySelector('.prev').addEventListener('click', () => show(0));
