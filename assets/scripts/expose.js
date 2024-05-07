// expose.js

const jsConfetti = new JSConfetti();

window.addEventListener('DOMContentLoaded', init);

// get and set horn
function setHorn (hornObject, hornType, soundObject) {
  console.log(hornType);
  const HORNS = ['AIR-HORN', 'PARTY-HORN', 'CAR-HORN'];
  const currHorn = hornType.toUpperCase();

  // air horn
  if (currHorn === HORNS[0]) {
    setHornImage(hornObject, 'assets/images/air-horn.svg');
    setHornSound(soundObject, 'assets/audio/air-horn.mp3'); 
  }

  // party horn
  if (currHorn === HORNS[1]) {
    setHornImage(hornObject, 'assets/images/party-horn.svg');
    setHornSound(soundObject, 'assets/audio/party-horn.mp3'); 
  }

  // car horn
  if (currHorn === HORNS[2]) {
    setHornImage(hornObject, 'assets/images/car-horn.svg');
    setHornSound(soundObject, 'assets/audio/car-horn.mp3'); 
  }
}

// get amd set horn image
function setHornImage (hornObject, imgStr) {
  hornObject.src = imgStr;
  console.log('Image changed');
}

// set sound
function setHornSound (soundObject, soundStr) {
  soundObject.src = soundStr;
  console.log('Sound changed');
}

// play sound
function playSound (soundObject, hornType, volume) {
  console.log(soundObject);
  soundObject.volume = volume/100;
  soundObject.play();
  
  if (hornType === 'party-horn') {
    jsConfetti.addConfetti();
  }
}

// get and set sound image
function setSoundImage (volume, volumeImage) {
  if (volume === 0) {
    volumeImage.src = 'assets/icons/volume-level-0.svg';
  } else if (volume < 33) {
    volumeImage.src = 'assets/icons/volume-level-1.svg';
  } else if (volume < 67) {
    volumeImage.src = 'assets/icons/volume-level-2.svg';
  } else {
    volumeImage.src = 'assets/icons/volume-level-3.svg';
  }
}

function init() {
  const hornObject = document.querySelector('img[src="assets/images/no-image.png"]');
  const soundObject = document.querySelector('audio.hidden[src=""]');
  const selectElement = document.getElementById('horn-select');
  const buttonElement = document.querySelector('button');
  const volumeSlider = document.getElementById('volume');
  const volumeImage = document.querySelector('img[src="assets/icons/volume-level-2.svg"][alt="Volume level 2"]');
  volumeSlider.addEventListener('input', function() {
    setSoundImage(volumeSlider.value, volumeImage);
  });
  selectElement.addEventListener('change', function() {
    setHorn(hornObject, selectElement.value, soundObject);
  });
  buttonElement.addEventListener('click', function() {
    playSound(soundObject, selectElement.value, volumeSlider.value);
  });
}

