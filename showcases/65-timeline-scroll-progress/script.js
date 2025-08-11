const events=document.querySelectorAll('.event');
const obs=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('active');}
  });
},{threshold:0.5});
events.forEach(e=>obs.observe(e));
