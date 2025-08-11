const container=document.querySelector('.coverflow');
function update(){
  const center=container.scrollLeft+container.clientWidth/2;
  document.querySelectorAll('.coverflow img').forEach(img=>{
    const rect=img.getBoundingClientRect();
    const imgCenter=rect.left+rect.width/2;
    const diff=(imgCenter-container.clientWidth/2)/container.clientWidth;
    img.style.transform=`rotateY(${diff*45}deg)`;
  });
}
container.addEventListener('scroll',update);
update();
