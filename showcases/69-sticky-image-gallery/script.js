const display=document.getElementById('display');
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){display.src=e.target.dataset.img;}});
},{threshold:0.5});
document.querySelectorAll('.text section').forEach(s=>obs.observe(s));
