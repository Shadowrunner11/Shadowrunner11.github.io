var slideIndex = 1;
showSlides(slideIndex);

setInterval(autoSlide, 3000);

function currentSlide(n) {
    showSlides(slideIndex = n);
}
  
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var slenght = slides.length;
    var dots = document.getElementsByClassName("dot");
    var dlenght =dots.length;
    if (n > slenght) {slideIndex = 1}    
    if (n < 1) {slideIndex = slenght}
    for (i = 0; i < slenght; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dlenght; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}
  
function autoSlide(){
    showSlides(slideIndex);
    slideIndex ++;
    
}