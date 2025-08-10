const target = document.getElementById('target');
const tip = document.getElementById('tip');

function place() {
  const rect = target.getBoundingClientRect();
  const tipRect = tip.getBoundingClientRect();

  let top = rect.top - tipRect.height - 8;
  let left = rect.left + rect.width / 2 - tipRect.width / 2;
  let placement = 'top';

  if (top < 0) {
    top = rect.bottom + 8;
    placement = 'bottom';
  }

  if (left < 0) {
    left = rect.left;
    top = rect.top + rect.height / 2 - tipRect.height / 2;
    placement = 'left';
  } else if (left + tipRect.width > window.innerWidth) {
    left = rect.right - tipRect.width;
    top = rect.top + rect.height / 2 - tipRect.height / 2;
    placement = 'right';
  }

  tip.style.top = `${top}px`;
  tip.style.left = `${left}px`;
  tip.setAttribute('data-placement', placement);
}

function show() {
  tip.hidden = false;
  tip.setAttribute('data-show', '');
  place();
}

function hide() {
  tip.hidden = true;
  tip.removeAttribute('data-show');
}

target.addEventListener('pointerenter', show);
target.addEventListener('pointerleave', hide);
target.addEventListener('focus', show);
target.addEventListener('blur', hide);

window.addEventListener('scroll', () => {
  if (!tip.hidden) place();
});
window.addEventListener('resize', () => {
  if (!tip.hidden) place();
});
