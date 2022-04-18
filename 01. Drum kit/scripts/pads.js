import { getPad } from "./pad.js";

export const pads = document.querySelector('#pads');

export const drawPads = (parent, keys) => {
  keys.forEach(key => {
    const pad = getPad(key)

    pads.innerHTML += pad;
  })
}