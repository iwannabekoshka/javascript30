const blur = document.querySelector('#blur');

const inputHandler = (e) => {
  const blur = e.target.value;

  setBlur(blur);
}
const setBlur = (blur) => {
  document.documentElement.style.setProperty('--blur', `${blur}px`);
}

blur.addEventListener('input', inputHandler);
setBlur(blur.value);
