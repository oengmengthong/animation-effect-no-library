const cards=document.querySelectorAll('.card');
function update(){
  const s=window.scrollY;
  cards.forEach((c,i)=>{
    c.style.transform=`translateZ(${s*-0.5+i*-100}px)`;
  });
}
window.addEventListener('scroll',update);
update();
