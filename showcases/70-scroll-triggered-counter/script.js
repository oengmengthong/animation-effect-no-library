const counter=document.querySelector('.counter');
let started=false;
function animate(){
  const target=+counter.dataset.target;
  let current=0;
  const step=target/100;
  const interval=setInterval(()=>{
    current+=step;
    if(current>=target){current=target;clearInterval(interval);}
    counter.textContent=Math.floor(current);
  },20);
}
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting&&!started){started=true;animate();}});
},{threshold:0.5});
obs.observe(counter);
