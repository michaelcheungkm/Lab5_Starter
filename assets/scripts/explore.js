// explore.js

window.addEventListener('DOMContentLoaded', init);

// set voices
function setVoices (arrVoices, parent) {
  arrVoices.forEach(voice => {
    const voiceName = voice.name;
    const newOption = document.createElement('option');
    newOption.value = voiceName;
    newOption.text = voiceName;
    parent.appendChild(newOption);
  })
}

function switchImage (img, src) {
  img.src = src;
}

function init() {
  let utterance = new SpeechSynthesisUtterance();
  const textArea = document.getElementById('text-to-speak');
  const img = document.querySelector('img');
  textArea.addEventListener('input', function() {
    utterance.text = textArea.value;
  });
  const parent = document.getElementById('voice-select');
  const synth = window.speechSynthesis;
  synth.onvoiceschanged = () => {
    const voices = synth.getVoices();
    setVoices(voices, parent);
  }
  parent.addEventListener('change', function() {
    const selectedVoice = parent.value;
    const voices = window.speechSynthesis.getVoices();
    const selectedVoiceObj = voices.find(voice => voice.name === selectedVoice);
    if (selectedVoiceObj) {
      utterance.voice = selectedVoiceObj;
    }
  });
  const button = document.querySelector('button');
  button.addEventListener('click', function() {
    window.speechSynthesis.speak(utterance);
  });
  utterance.onstart = function(event) {
    switchImage(img, 'assets/images/smiling-open.png');
  }
  utterance.onend = function(event) {
    switchImage(img, 'assets/images/smiling.png');
  }
}