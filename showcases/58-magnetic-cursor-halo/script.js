const halo = document.querySelector('.halo');
let x = window.innerWidth/2, y = window.innerHeight/2;
let vx = 0, vy = 0;
let tx = x, ty = y;
window.addEventListener('mousemove', e => { tx = e.clientX; ty = e.clientY; });
function anim(){
  vx += (tx - x) * 0.15;
  vy += (ty - y) * 0.15;
  vx *= 0.7;
  vy *= 0.7;
  x += vx;
  y += vy;
  halo.style.transform = `translate(${x}px,${y}px)`;
  requestAnimationFrame(anim);
}
anim();
