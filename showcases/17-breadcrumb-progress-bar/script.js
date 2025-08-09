const steps = document.querySelectorAll('.progress li');
const nextBtn = document.getElementById('next');
const status = document.getElementById('status');
let current = 0;

function announce() {
  status.textContent = `Step ${current + 1} of ${steps.length}`;
}

nextBtn.addEventListener('click', () => {
  if (current < steps.length - 1) {
    steps[current].classList.remove('active');
    steps[current].classList.add('complete');
    current++;
    steps[current].classList.add('active');
    announce();
  }
});

announce();
