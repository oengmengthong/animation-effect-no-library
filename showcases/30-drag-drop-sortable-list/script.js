const list = document.getElementById('sortable');
let dragged = null;

list.addEventListener('dragstart', e => {
  dragged = e.target;
  e.target.classList.add('dragging');
  e.target.setAttribute('aria-grabbed', 'true');
});

list.addEventListener('dragend', e => {
  e.target.classList.remove('dragging');
  e.target.removeAttribute('aria-grabbed');
});

list.addEventListener('dragover', e => {
  e.preventDefault();
  const items = [...list.querySelectorAll('li:not(.dragging)')];
  const next = items.find(item => e.clientY <= item.getBoundingClientRect().top + item.offsetHeight / 2);
  if (next) {
    list.insertBefore(dragged, next);
  } else {
    list.appendChild(dragged);
  }
});
