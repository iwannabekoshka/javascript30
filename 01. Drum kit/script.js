import KEYS from "./scripts/keys.js";
import { padPressHandler } from "./scripts/pad.js";
import { pads, drawPads } from "./scripts/pads.js";

// Event handlers
const keyDownHandler = (event) => {
  padPressHandler(event.code, KEYS, true);
}
const keyUpHandler = (event) => {
  padPressHandler(event.code, KEYS, false);
}

const mouseDownHandler = (event) => {
  const code = event.target.dataset.code;
  padPressHandler(code, KEYS, true);
}
const mouseUpHandler = (event) => {
  const code = event.target.dataset.code;
  padPressHandler(code, KEYS, false);
}

// Events
document.addEventListener('keydown', (event) => keyDownHandler(event));
document.addEventListener('keyup', (event) => keyUpHandler(event));

document.addEventListener('mousedown', (event) => mouseDownHandler(event));
document.addEventListener('mouseup', (event) => mouseUpHandler(event));

// Init
drawPads(pads, KEYS);