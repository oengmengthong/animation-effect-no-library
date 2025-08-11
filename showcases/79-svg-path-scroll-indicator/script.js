const path=document.getElementById('bar');
const length=path.getTotalLength();
path.style.strokeDasharray=length;
path.style.strokeDashoffset=length;
window.addEventListener('scroll',()=>{
  const max=document.body.scrollHeight - innerHeight;
  const progress=scrollY/max;
  path.style.strokeDashoffset=length*(1-progress);
});
