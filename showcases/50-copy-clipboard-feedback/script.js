const btn = document.getElementById('copyBtn');
btn.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText('Copied text');
    btn.classList.add('copied');
    setTimeout(() => btn.classList.remove('copied'), 600);
  } catch (e) {
    console.error(e);
  }
});
