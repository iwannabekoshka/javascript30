const secretMessage = document.querySelector('#secret-message');

let code = 'koshka';
let inputText = code.split('').map(i => '1').join('');

function keyPressHandler(event) {
  const key = event.key;
  setInputText(key);
}
function setInputText(key) {
  inputText += key;
  inputText = inputText.substr(1);

  checkInputText();
}
function checkInputText() {
  if (inputText === code) {
    secretMessage.style.display = 'block';
  }
}

document.addEventListener('keypress', keyPressHandler);