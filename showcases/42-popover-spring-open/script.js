const trigger = document.getElementById('trigger');
const popover = document.getElementById('popover');

function openPopover(e) {
  const rect = trigger.getBoundingClientRect();
  popover.style.top = `${rect.bottom + 8}px`;
  popover.style.left = `${rect.left}px`;
  popover.hidden = false;

  const popRect = popover.getBoundingClientRect();
  const ox = e.clientX - popRect.left;
  const oy = e.clientY - popRect.top;
  popover.style.setProperty('--ox', `${ox}px`);
  popover.style.setProperty('--oy', `${oy}px`);

  popover.classList.add('open');
  trigger.setAttribute('aria-expanded', 'true');
  document.addEventListener('click', onDocumentClick);
}

function closePopover() {
  popover.classList.remove('open');
  trigger.setAttribute('aria-expanded', 'false');
  document.removeEventListener('click', onDocumentClick);
  popover.hidden = true;
}

function onDocumentClick(e) {
  if (!popover.contains(e.target) && e.target !== trigger) {
    closePopover();
  }
}

trigger.addEventListener('click', (e) => {
  e.stopPropagation();
  if (popover.hidden) {
    openPopover(e);
  } else {
    closePopover();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !popover.hidden) {
    closePopover();
  }
});
