const rows = document.querySelectorAll('tr.row');
rows.forEach(row => {
  const detail = row.nextElementSibling;
  const panel = detail.querySelector('.panel');
  row.addEventListener('click', () => {
    const open = detail.classList.toggle('open');
    panel.style.maxHeight = open ? panel.scrollHeight + 'px' : 0;
  });
  row.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      row.click();
    }
  });
});
