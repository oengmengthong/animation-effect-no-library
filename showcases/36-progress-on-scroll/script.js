const progress = document.getElementById('progress');
window.addEventListener('scroll', () => {
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const percent = (window.scrollY / height) * 100;
  progress.style.width = percent + '%';
});
