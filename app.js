const radioLinks = {
  aljazeeraAudio: 'https://www.aljazeera.net/audio/live/',
  aljazeeraVideo: 'https://www.aljazeera.com/video/live',
  qatarRadio: 'https://www.qatarradio.qa/'
};

function openNewsRadio(){
  const win = window.open(radioLinks.aljazeeraAudio, '_blank', 'noopener,noreferrer');
  if(!win){
    alert('المتصفح منع فتح البث. افتح الرابط يدويًا من زر الجزيرة أو إذاعة قطر.');
  }
}

['playRadio','playRadio2'].forEach(id=>{
  const btn = document.getElementById(id);
  if(btn) btn.addEventListener('click', openNewsRadio);
});

const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
if(menuToggle && mainNav){
  menuToggle.addEventListener('click', ()=> mainNav.classList.toggle('open'));
}

document.querySelectorAll('.nav a').forEach(a=>{
  a.addEventListener('click',()=>{
    document.querySelectorAll('.nav a').forEach(x=>x.classList.remove('active'));
    a.classList.add('active');
    if(window.innerWidth < 900 && mainNav) mainNav.classList.remove('open');
  });
});
