// nav menu button
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function openMenu(event) {
  document.getElementById('menu').classList.toggle('show')
}

// Start landing slidert
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("text-slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
}
// end landing slider

// search bar
function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}

// Close the full screen search box
function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}


// testimonials slider

let slideIndicator = 1;
viewSlides(slideIndicator);

  // thumbnail controls
function slideNow(z) {  
  viewSlides(slideIndicator = z)
}  
function viewSlides(z) {
  let y;
  let texts = document.getElementsByClassName('skills-content');
  let points = document.getElementsByClassName('bullet');
  if (z > texts.length) {
    slideIndicator = 1
  }
  if (z < 1) {
    slideIndicator = slideIndicator.length
  }
  for (y = 0; y < points.length; y++){
    texts[y].style.display = "none"
  }
  for (y = 0; y < points.length; y++){
    points[y].className = points[y].className.replace(" active", "");
  }
  texts[slideIndicator - 1].style.display = "block";
  points[slideIndicator - 1].className += " active";
}
// end testimonials slider

// back to top button......
//Get the button:
mybutton = document.getElementById("top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}