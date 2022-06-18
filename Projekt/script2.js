const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

//Mobile menu
const mobileMenu =() =>{
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu);

var slideIndex = 1;
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
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
function load(){;
  const xhr = new XMLHttpRequest();
   xhr.open('GET','items.json',true);
   xhr.onload= function(){
       if(this.status==200){
           let items = JSON.parse(this.responseText);
           let output="";
           for(let i in items){
               output +=
               '<div class=item>'+
               '<img src='+items[i].image+'width=256 height=256>'+
               '<ul>'+
               '<li>Name:'+
               items[i].name+
               '</li>'+
               '<li>Description:'+
               items[i].description+
               '</li>'+
               '</ul>'+
               '</div>'
           }
           document.getElementById("items-container").innerHTML=output
       }
   }
   xhr.send()
}
load()


