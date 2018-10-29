var link = document.querySelectorAll('.catalog-main__link');
var popup = document.querySelector('.catalog-popups--modal');
var overlay = document.querySelector('.overlay');

for (var i = 0; i < link.length; i++) {
  link[i].addEventListener('click', function (event) {
    event.preventDefault();
    popup.classList.add('catalog-popups--modal-visible');
    overlay.classList.add('overlay__modal');
  });
}

window.addEventListener('keydown', function (event) {
  if (event.keyCode === 27) {
    event.preventDefault();
    if (popup.classList.contains('catalog-popups--modal-visible')) {
      popup.classList.remove('catalog-popups--modal-visible');
      overlay.classList.remove('overlay__modal');
    }
  }
});
