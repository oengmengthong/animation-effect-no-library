const box=document.getElementById('box');
const container=document.getElementById('confetti');
box.addEventListener('change',()=>{
  if(box.checked){
    for(let i=0;i<20;i++){
      const div=document.createElement('div');
      div.className='confetti';
      div.style.setProperty('--c',`hsl(${Math.random()*360},80%,60%)`);
      div.style.left=box.offsetLeft+30+Math.random()*20-10+'px';
      div.style.top=box.offsetTop+30+'px';
      div.style.setProperty('--tx',Math.random()*200-100+'px');
      container.appendChild(div);
      setTimeout(()=>div.remove(),1000);
    }
  }
});
