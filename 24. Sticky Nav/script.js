const nav = document.querySelector('#nav');
const content = document.querySelector('#content');
const navOffsetTop = nav.offsetTop;

function scrollHandler(event) {
  if (navOffsetTop <= window.scrollY) {
    document.body.classList.add('nav-sticky');
    document.body.style.paddingTop = `${nav.clientHeight}px`;
  } else {
    document.body.classList.remove('nav-sticky');
    document.body.style.paddingTop = `0px`;
  }
}

function debounce(fn, ms=20) {
  let timeout;

  return function() {
    const fnApply = () => fn.apply(this, arguments);

    clearTimeout(timeout);

    timeout = setTimeout(fnApply, ms);
  }
}

document.addEventListener('scroll', debounce(scrollHandler, 10));