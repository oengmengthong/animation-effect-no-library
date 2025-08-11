const canvas = document.getElementById('c');
const ctx = canvas.getContext('2d');
let w, h;
function resize(){ w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; }
window.addEventListener('resize', resize); resize();
const particles = [];
const count = 80;
for(let i=0;i<count;i++){
  particles.push({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-0.5),vy:(Math.random()-0.5)});
}
function draw(){
  ctx.clearRect(0,0,w,h);
  for(let p of particles){
    p.x+=p.vx; p.y+=p.vy;
    if(p.x<0||p.x>w) p.vx*=-1;
    if(p.y<0||p.y>h) p.vy*=-1;
    ctx.fillStyle='#fff';
    ctx.fillRect(p.x,p.y,2,2);
    for(let q of particles){
      const dx=p.x-q.x, dy=p.y-q.y, dist=Math.hypot(dx,dy);
      if(dist<80){
        ctx.strokeStyle=`rgba(255,255,255,${1-dist/80})`;
        ctx.beginPath();
        ctx.moveTo(p.x,p.y);
        ctx.lineTo(q.x,q.y);
        ctx.stroke();
      }
    }
  }
  requestAnimationFrame(draw);
}
draw();
