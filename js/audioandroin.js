var audio = document.getElementsByTagName('audio')[0],
    button = document.getElementsByTagName('button')[0];

audio.onclick = playAudio;
button.onclick = playAudio;
  
function playAudio() {
  if (audio.paused) {
    audio.play();
  } else {
     audio.pause();
  }
};