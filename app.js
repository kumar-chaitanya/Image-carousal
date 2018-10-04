const slider = document.querySelector('.slider img');
const captions = document.querySelectorAll('.caption-wrapper');
const images = ['pic1.jpg','pic2.jpeg','pic3.jpeg','pic4.jpeg'];
let current = 0;
init();
autoplay();

function init() {
  animate(current);
  slider.classList.add('fadeOut');
  current = (current + 1) % 4;
  setTimeout(() => {
    slider.classList.remove('fadeOut');
  }, 250);
}

function autoplay() {
  setInterval(function () {
    var i = current;
    setTimeout(() => {
      slider.src = images[i];
    }, 250);
    animate(i);
    slider.classList.add('fadeOut');
    current = (current + 1) % 4; 
    setTimeout(() => {
      slider.classList.remove('fadeOut');
    }, 250);
  },7500)
}

function animate(i) {
  if(captions[i].classList.contains('caption-top')) {
    doAnimation('top', i);
  } else if (captions[i].classList.contains('caption-right')) {
    doAnimation('right', i);
  } else if (captions[i].classList.contains('caption-bottom')) {
    doAnimation('bottom', i);
  } else {
    doAnimation('left', i);
  }
}

function doAnimation(addClass,i) {
  captions[i].classList.add(addClass);
  setTimeout(() => {
    captions[i].classList.remove(addClass);
  }, 7300);
}
