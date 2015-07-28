// Create cross browser requestAnimationFrame method:
window.requestAnimationFrame = window.requestAnimationFrame
|| window.mozRequestAnimationFrame
|| window.webkitRequestAnimationFrame
|| window.msRequestAnimationFrame
|| function(f){setTimeout(f, 1000/60)}

var logo = document.getElementById('logo_container');

function parallaxImages(){
var scrolltop = window.pageYOffset // get number of pixels document has scrolled vertically
if( $(window).width() > 767)
{ logo.style.top = -scrolltop * .20 + 'px' // move at 50% of scroll rate
}
}

window.addEventListener('scroll', function(){ // on page scroll
  requestAnimationFrame(parallaxImages) // call parallaxbubbles() on next available screen paint
}, false)

var bg = document.getElementById('backdrop_container');

function parallaxImage(){
var scrolltop = window.pageYOffset // get number of pixels document has scrolled vertically
if( $(window).width() > 767)
{ bg.style.top = -scrolltop * .20 + 'px' // move at 50% of scroll rate
}
}

window.addEventListener('scroll', function(){ // on page scroll
  requestAnimationFrame(parallaxImage) // call parallaxbubbles() on next available screen paint
}, false)
