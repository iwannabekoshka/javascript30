import KEYS from "./scripts/keys.js";
import { padPressHandler } from "./scripts/pad.js";
import { pads, drawPads } from "./scripts/pads.js";
import {AUDIOS, fillAudios} from "./scripts/audio.js";

// Event handlers
const keyDownHandler = (event) => {
  padPressHandler(event.code, KEYS, true, AUDIOS);
}
const keyUpHandler = (event) => {
  padPressHandler(event.code, KEYS, false, AUDIOS);
}

const mouseDownHandler = (event) => {
  const code = event.target.dataset.code;
  padPressHandler(code, KEYS, true, AUDIOS);
}
const mouseUpHandler = (event) => {
  const code = event.target.dataset.code;
  padPressHandler(code, KEYS, false, AUDIOS);
}

// Events
document.addEventListener('keydown', (event) => keyDownHandler(event));
document.addEventListener('keyup', (event) => keyUpHandler(event));

document.addEventListener('mousedown', (event) => mouseDownHandler(event));
document.addEventListener('mouseup', (event) => mouseUpHandler(event));

// Init
drawPads(pads, KEYS);
fillAudios(AUDIOS, KEYS);