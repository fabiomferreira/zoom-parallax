var zoom = document.getElementById('zoom');
var images = document.getElementsByClassName('image');
var maria1 = document.getElementById('maria1');

window.addEventListener('scroll', function () {
  var position = window.scrollY;
  var fatorZoom = 1 + position / 10000;
  maria1.style = `
    transform: scale(${2 / fatorZoom});
  `;
})