const panelsItems = document.querySelectorAll('.panel');

function addActiveClass(e) {
  const panel = this;

  panelsItems.forEach(p => !(p === panel) && p.classList.remove('active'));
  panel.classList.toggle('active');
}

panelsItems.forEach(panel => {
  panel.addEventListener('click', addActiveClass)
});