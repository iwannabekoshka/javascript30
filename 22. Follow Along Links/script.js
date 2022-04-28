const links = [...document.querySelectorAll('a')];

const span = document.createElement('span');
document.body.append(span);
span.classList.add('link-hover');

const spanBorder = 8;

function linkMouseoverHandler(event) {
  const linkCoords = this.getBoundingClientRect();
  moveSpan(linkCoords);

  links.forEach(link => {
    link.classList.remove('mouseover');
  });
  this.classList.add('mouseover');
}

function moveSpan(linkCoords) {
  const scrollOffset = window.scrollY;

  const coords = {
    width: linkCoords.width + spanBorder,
    height: linkCoords.height + spanBorder,
    top: linkCoords.top + scrollOffset - spanBorder/2,
    left: linkCoords.left - spanBorder/2
  }

  span.style.width = `${coords.width}px`;
  span.style.height = `${coords.height}px`;

  span.style.top = `${coords.top}px`;
  span.style.left = `${coords.left}px`;
}

links.forEach(link => {
  link.addEventListener('mouseenter', linkMouseoverHandler);
});