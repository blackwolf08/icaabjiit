$('.img img').tilt({
  glare: true,
});

$(document).ready(function () {
  setTimeout(function () {
    $('.hero').removeClass('animated');
  }, 1000);
});

if (window.innerWidth > 900) {
}

var rellax = new Rellax('.rellax');

window.sr = ScrollReveal();

sr.reveal('.head', {
  duration: 1000,
  scale: 1,
  opacity: 0,
  origin: 'bottom',
});

$(document).ready(function () {
  setTimeout(function () {
    $('anim .main .main-cent .line .load').addClass('active');
  }, 500);

  setTimeout(function () {
    $('anim').fadeOut('slow');
  }, 7800);
});

sr.reveal('.text', {
  duration: 1000,
  scale: 1,
  opacity: 0,
  origin: 'bottom',
});

sr.reveal('.timeline li', {
  duration: 1000,
  scale: 1,
  opacity: 0,
  origin: 'bottom',
});

sr.reveal('.sponsors img', {
  duration: 1000,
  scale: 1,
  opacity: 0,
  origin: 'bottom',
});

sr.reveal('.track h1', {
  duration: 1000,
  scale: 1,
  opacity: 0,
  origin: 'bottom',
});

sr.reveal('.track p', {
  duration: 1000,
  scale: 1,
  opacity: 0,
  origin: 'bottom',
});

sr.reveal('.img img', {
  duration: 1000,
  scale: 1,
  opacity: 0,
  origin: 'bottom',
});

sr.reveal('.team-content', {
  duration: 1000,
  scale: 1,
  opacity: 0,
  origin: 'bottom',
});

sr.reveal('.team-social', {
  duration: 1000,
  scale: 1,
  opacity: 0,
  origin: 'bottom',
});

sr.reveal('.shape', {
  duration: 1000,
  scale: 1,
  opacity: 0,
  origin: 'bottom',
});

const offli = document.getElementById("offContainer");
const onli = document.getElementById("onContainer");
const showOnline = function() {
  offli.style.display="none";
  onli.style.display="block";
}
const showOffline = function () {
  offli.style.display="block";
  onli.style.display="none";
}

document.getElementById("onPart").addEventListener("click", showOnline);
document.getElementById("offPart").addEventListener("click", showOffline);



