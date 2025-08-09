const input = document.getElementById('chipInput');
const container = document.getElementById('chips');

input.addEventListener('keydown', e => {
  if (e.key === 'Enter' && input.value.trim()) {
    e.preventDefault();
    const chip = document.createElement('span');
    chip.className = 'chip';
    chip.textContent = input.value.trim();
    const btn = document.createElement('button');
    btn.textContent = '\u00d7';
    btn.addEventListener('click', () => chip.remove());
    chip.appendChild(btn);
    container.appendChild(chip);
    requestAnimationFrame(() => chip.classList.add('show'));
    input.value = '';
  }
});
