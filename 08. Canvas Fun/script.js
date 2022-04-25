const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
const rect = canvas.getBoundingClientRect();

let lastX;
let lastY;
let isClicked = false;
let radius = 10;
let isRadiusSmaller = false;
let color = 0

function setRandomColor() {
  color += 1
}
function handleMouseClick(e) {
  isClicked = !isClicked;

  if (isClicked) {
    setRandomColor();
    draw(e);
  }

  if (!isClicked) {
    radius = 5;
  }
}

function handleMousemove(e) {
  if (!isClicked) {
    return;
  }

  changeRadius()
  setRandomColor();
  draw(e);
}

function changeRadius() {
  if (radius >= 60) {
    isRadiusSmaller = true
  }
  if (radius <= 10) {
    isRadiusSmaller = false
  }

  if (isRadiusSmaller) {
    radius -= 0.1
  } else {
    radius += 0.1
  }
}

function draw(e) {
  const pos = {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
  }

  ctx.beginPath();
  ctx.arc(pos.x, pos.y, radius, 0, 2*Math.PI);
  ctx.fillStyle = `hsl(${color}, 100%, 50%)`;
  ctx.fill();
  ctx.closePath();
}

canvas.addEventListener('mousedown', (e) => handleMouseClick(e));
canvas.addEventListener('mouseup', (e) => handleMouseClick(e));
canvas.addEventListener('mousemove', (e) => handleMousemove(e));