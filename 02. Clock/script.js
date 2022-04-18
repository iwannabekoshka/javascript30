const clockSeconds = document.querySelector('#clock__seconds');
const clockMinutes = document.querySelector('#clock__minutes');
const clockHours = document.querySelector('#clock__hours');

let secondsRound = 0
let minutesRound = 0
let hoursRound = 0

const rotateSeconds = (seconds) => {
  if (seconds === 0) secondsRound += 1

  const angle = 360/60 * seconds + secondsRound * 360;

  clockSeconds.style.cssText = `--angle: ${angle}deg`;
}
const rotateMinutes = (minutes) => {
  if (minutes === 0) minutesRound += 1

  const angle = 360/60 * minutes + minutesRound * 360;

  clockMinutes.style.cssText = `--angle: ${angle}deg`;
}
const rotateHours = (hours) => {
  if (hours % 12 === 0) hoursRound += 1

  const angle = 360/24 * hours + hoursRound * 360;

  clockHours.style.cssText = `--angle: ${angle}deg`;
}
const setClock = () => {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  rotateSeconds(seconds);
  rotateMinutes(minutes);
  rotateHours(hours);
}

setInterval(() => {
  setClock();
}, 1000);

setClock();