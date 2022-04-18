const color = document.querySelector('#color');

const inputHandler = (e) => {
  const color = e.target.value;

  setColor(color);
}
const setColor = (color) => {
  document.documentElement.style.setProperty('--color', `${color}`);
}

color.addEventListener('input', inputHandler);
setColor(color.value);