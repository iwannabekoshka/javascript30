const clockSeconds = document.querySelector('#clock__seconds');
const clockMinutes = document.querySelector('#clock__minutes');
const clockHours = document.querySelector('#clock__hours');

const rotateSeconds = (seconds) => {
  const angle = 360/60 * seconds;

  clockSeconds.style.cssText = `--angle: ${angle}deg`;
}
const rotateMinutes = (minutes) => {
  const angle = 360/60 * minutes;

  clockMinutes.style.cssText = `--angle: ${angle}deg`;
}
const rotateHours = (hours) => {
  const angle = 360/24 * hours;

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