const slideInElements = document.querySelectorAll('.slide-in');

const scrollHandler = (event) => {
  slideInElements.forEach(elem => {
    if (isInViewPort(elem) && !elem.classList.contains('active')) {
      elem.classList.add('active')
    }
  });
}

const debounce = (fn, ms = 20) => {
  let timeout;

  return function() {
    const fnApply = () => fn.apply(this, arguments);

    clearTimeout(timeout);

    timeout = setTimeout(fnApply, ms);
  }
}

const isInViewPort = (element) => {
  const boundingRect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  return (boundingRect.y + boundingRect.height) <= windowHeight &&
    (boundingRect.y + boundingRect.height) > 0;
}

document.addEventListener('scroll', debounce(scrollHandler, 50));