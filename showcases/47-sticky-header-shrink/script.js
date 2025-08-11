const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('shrink', window.scrollY > 80);
});
