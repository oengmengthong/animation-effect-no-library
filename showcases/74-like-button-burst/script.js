const btn=document.getElementById('like');
const container=document.getElementById('burst-container');
btn.addEventListener('click',()=>{
  btn.classList.toggle('liked');
  for(let i=0;i<8;i++){
    const b=document.createElement('span');
    b.className='burst';
    const angle=Math.random()*Math.PI*2;
    const dist=80;
    b.style.setProperty('--x',Math.cos(angle)*dist+'px');
    b.style.setProperty('--y',Math.sin(angle)*dist+'px');
    b.style.left=btn.offsetLeft+30+'px';
    b.style.top=btn.offsetTop+30+'px';
    container.appendChild(b);
    setTimeout(()=>b.remove(),600);
  }
});
