export const getPad = (key) => {
  return `
    <div class="pads__item" data-code="${key.code}">
      <kbd>${key.key}</kbd>
      <p>${key.name}</p>
    </div>
  `
}
export const padPressHandler = (key, keys, isPressed, audios) => {
  if (!keys.find(k => k.code === key)) return;

  const padNode = document.querySelector(`[data-code="${key}"]`);
  const audio = audios.find(a => a.code === key).audio;

  switchPadActiveClass(padNode, isPressed);
  playSound(isPressed, audio);
}

const switchPadActiveClass = (pad, isPressed) => {
  if (isPressed) {
    pad.classList.add('active');
  } else {
    pad.classList.remove('active');
  }
}
const playSound = (isPressed, audio) => {
  if (isPressed) {
    audio.currentTime = 0
    audio.play()
  }
}