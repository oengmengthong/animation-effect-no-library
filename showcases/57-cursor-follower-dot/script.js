const dot = document.querySelector('.dot');
let x = window.innerWidth/2, y = window.innerHeight/2;
let tx = x, ty = y;
window.addEventListener('mousemove', e => { tx = e.clientX; ty = e.clientY; });
function anim(){
  x += (tx - x) * 0.1;
  y += (ty - y) * 0.1;
  dot.style.transform = `translate(${x}px,${y}px)`;
  requestAnimationFrame(anim);
}
anim();
