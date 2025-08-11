const gal=document.getElementById('gal');
gal.addEventListener('mousemove',e=>{
  const rect=gal.getBoundingClientRect();
  const x=e.clientX-rect.left;
  const y=e.clientY-rect.top;
  gal.style.setProperty('--x',x+'px');
  gal.style.setProperty('--y',y+'px');
});
