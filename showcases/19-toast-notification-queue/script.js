const container = document.getElementById('toasts');
const btn = document.getElementById('show');
let queue = [];
let showing = false;
let count = 0;

btn.addEventListener('click', () => {
  queue.push(`Toast ${++count}`);
  if (!showing) showNext();
});

function showNext() {
  if (queue.length === 0) {
    showing = false;
    return;
  }
  showing = true;
  const msg = queue.shift();
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  container.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('show'));
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      container.removeChild(toast);
      showNext();
    }, 300);
  }, 3000);
}
