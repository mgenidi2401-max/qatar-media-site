const audio = document.getElementById('radio');
const buttons = [document.getElementById('playRadio'), document.getElementById('playRadio2')].filter(Boolean);
let playing = false;
function setIcon(){
  buttons.forEach(btn=>{btn.innerHTML = playing ? '<i class="fa-solid fa-pause"></i>' : '<i class="fa-solid fa-play"></i>';});
}
async function toggleRadio(){
  try{
    if(!playing){ await audio.play(); playing = true; }
    else{ audio.pause(); playing = false; }
    setIcon();
  }catch(e){
    alert('قد يمنع المتصفح تشغيل البث المباشر أو قد يتغير رابط المحطة. استخدم زر زيارة إذاعة قطر.');
  }
}
buttons.forEach(btn=>btn.addEventListener('click', toggleRadio));

document.querySelectorAll('.nav a').forEach(a=>{
  a.addEventListener('click',()=>{
    document.querySelectorAll('.nav a').forEach(x=>x.classList.remove('active'));
    a.classList.add('active');
  })
})
