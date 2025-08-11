const el = document.getElementById('scramble');
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
const text = el.dataset.text;
let frame = 0;
function update(){
  let output = '';
  for(let i=0;i<text.length;i++){
    if(i < frame){
      output += text[i];
    } else {
      output += chars[Math.floor(Math.random()*chars.length)];
    }
  }
  el.textContent = output;
  if(frame <= text.length){
    frame++;
    setTimeout(update, 50);
  }
}
update();
