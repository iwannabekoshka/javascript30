const select = document.querySelector('#voice');
const volume = document.querySelector('#volume');
const pitch = document.querySelector('#pitch');
const speed = document.querySelector('#speed');
const text = document.querySelector('#text');
const btn = document.querySelector('#text-to-speech');

const synth = window.speechSynthesis;
let voices;
synth.onvoiceschanged = () => {
  voices = synth.getVoices();
  fillVoicesSelect(voices);
}

function clickTextToSpeechHandler(event) {
  if (!text.value.trim() || synth.speaking) return;

  const utter = new SpeechSynthesisUtterance(text.value.trim());

  utter.pitch = pitch.value;
  utter.rate = speed.value;
  utter.volume = volume.value;
  utter.voice = voices.find(voice => voice.voiceURI === select.value);
  console.log(utter)
  synth.speak(utter);
}

function fillVoicesSelect(voices) {
  let options = ''
  voices.forEach(voice => {
    const option = `
      <option value="${voice.voiceURI}">
        ${voice.name}
      </option>
    `;

    options += option;
  });

  select.innerHTML += options;
  select.value = "Google русский";
}

btn.addEventListener('click', clickTextToSpeechHandler);
