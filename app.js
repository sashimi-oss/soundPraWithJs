const btn = document.getElementById('btn');
const btnAudio = document.getElementById('btn_audio');

function audio(){
  btnAudio.currentTime = 0;
  btnAudio.play();
}

btn.addEventListener('click', () => {
setTimeout(audio, 5000);
})