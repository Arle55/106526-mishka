var link = document.querySelector('.product-week__link');
var popup = document.querySelector('.index-popups--modal');
var overlay = document.querySelector('.overlay');

link.addEventListener('click', function (event) {
  event.preventDefault();
  popup.classList.add('index-popups--modal-visible');
  overlay.classList.add('overlay__modal');
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    event.preventDefault();
    if (popup.classList.contains("index-popups--modal-visible")) {
      popup.classList.remove("index-popups--modal-visible");
      overlay.classList.remove('overlay__modal');
    }
  }
});
