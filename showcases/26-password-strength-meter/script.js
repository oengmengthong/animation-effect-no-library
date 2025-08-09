const input = document.getElementById('pass');
const bar = document.querySelector('.bar');
const hint = document.getElementById('hint');

function strength(val) {
  let score = 0;
  if (val.length > 5) score++;
  if (val.length > 8) score++;
  if (/[0-9]/.test(val)) score++;
  if (/[^a-zA-Z0-9]/.test(val)) score++;
  return score;
}

input.addEventListener('input', e => {
  const s = strength(e.target.value);
  const pct = (s / 4) * 100;
  bar.style.width = pct + '%';
  const colors = ['red','orange','gold','green'];
  bar.style.background = colors[s - 1] || 'red';
  const texts = ['Too short','Weak','Okay','Strong'];
  hint.textContent = texts[s] || '';
});
