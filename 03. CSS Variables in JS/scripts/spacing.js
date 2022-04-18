const spacing = document.querySelector('#spacing');

const inputHandler = (e) => {
  const spacing = e.target.value;

  setSpacing(spacing);
}
const setSpacing = (spacing) => {
  document.documentElement.style.setProperty('--spacing', `${spacing}px`);
}

spacing.addEventListener('input', inputHandler);
setSpacing(spacing.value);
