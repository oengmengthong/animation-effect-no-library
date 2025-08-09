document.querySelectorAll('.item').forEach((el, i) => {
  setTimeout(() => {
    el.style.opacity = '1';
    el.style.transform = 'none';
  }, i * 100);
});
