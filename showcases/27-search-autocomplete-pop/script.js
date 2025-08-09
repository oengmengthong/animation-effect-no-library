const input = document.getElementById('q');
const list = document.getElementById('list');
const data = ['Apple','Banana','Cherry','Date','Elderberry','Fig'];
let index = -1;

input.addEventListener('input', () => {
  const val = input.value.toLowerCase();
  list.innerHTML = '';
  if (!val) { list.classList.remove('open'); return; }
  data.filter(s => s.toLowerCase().startsWith(val)).forEach(s => {
    const li = document.createElement('li');
    li.textContent = s;
    li.addEventListener('mousedown', () => {
      input.value = s;
      list.classList.remove('open');
    });
    list.appendChild(li);
  });
  index = -1;
  list.classList.toggle('open', list.children.length > 0);
});

input.addEventListener('keydown', e => {
  if (!list.classList.contains('open')) return;
  const items = list.querySelectorAll('li');
  if (e.key === 'ArrowDown') {
    index = (index + 1) % items.length;
  } else if (e.key === 'ArrowUp') {
    index = (index - 1 + items.length) % items.length;
  } else if (e.key === 'Enter' && index >= 0) {
    input.value = items[index].textContent;
    list.classList.remove('open');
  } else {
    return;
  }
  items.forEach((li, i) => li.classList.toggle('active', i === index));
  e.preventDefault();
});

document.addEventListener('click', e => {
  if (!list.contains(e.target) && e.target !== input) {
    list.classList.remove('open');
  }
});
