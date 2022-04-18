export const getPad = (key) => {
  return `
    <div class="pads__item" data-code="${key.code}">
      <h3>${key.key}</h3>
      <p>${key.name}</p>
    </div>
  `
}
export const padPressHandler = (key, keys, isPressed) => {
  if (!keys.find(k => k.code === key)) return;

  const padNode = document.querySelector(`[data-code="${key}"]`);
  const padObj = keys.find(k => k.code === key);

  switchPadActiveClass(padNode, isPressed);
  playSound(isPressed, padObj.name);
}

const switchPadActiveClass = (pad, isPressed) => {
  if (isPressed) {
    pad.classList.add('active');
  } else {
    pad.classList.remove('active');
  }
}
const playSound = (isPressed, padName) => {
  if (!isPressed) return;

  const beat = new Audio(`./sounds/${padName}.wav`);
  beat.play();
}