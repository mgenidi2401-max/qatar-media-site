const radioLinks = {
  aljazeera: 'https://www.aljazeera.net/audio/live/',
  qatarRadio: 'https://www.qatarradio.qa/'
};

const buttons = [document.getElementById('playRadio'), document.getElementById('playRadio2')].filter(Boolean);

function openNewsRadio(){
  const win = window.open(radioLinks.aljazeera, '_blank', 'noopener,noreferrer');
  if(!win){
    alert('المتصفح منع فتح البث المباشر. افتح الرابط يدويًا من زر: فتح بث الجزيرة الصوتي.');
  }
}

buttons.forEach(btn=>btn.addEventListener('click', openNewsRadio));

document.querySelectorAll('.nav a').forEach(a=>{
  a.addEventListener('click',()=>{
    document.querySelectorAll('.nav a').forEach(x=>x.classList.remove('active'));
    a.classList.add('active');
  })
})
