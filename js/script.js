//menu toggle
function toggleMenu(){
    var menuList = document.getElementById("menuList");
    
    if(menuList.style.maxHeight == "400px")
    {    
        //document.write("Hello World!");
         menuList.style.maxHeight = "0px";
    }else
    {
         menuList.style.maxHeight = "400px";
    }
}


function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
      
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);



/****slide show script****/
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activeSlide", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " activeSlide";
}


/***open new window***/
function myFunction() {
  let text = "Press a button!\nEither OK or Cancel.";
  if (confirm(text) == true) {
    text = "You pressed OK!";
  } else {
    text = "You canceled!";
  }
  document.getElementById("demo").innerHTML = text;
}


/***Collapse Menu****/
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("activeM");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

function PopUp(){ 
   // document.write("Hello World!");
    var popUpM = document.getElementById("newPopUp");
    popUpM.style.display = "block";
    
    var grayOut = document.getElementById("grayout");
    grayOut.style.display = "block";    
}

function Close(){
    var popUpM = document.getElementById("newPopUp");
    popUpM.style.display = "none"; 
    
    var grayOut = document.getElementById("grayout");
    grayOut.style.display = "none";
}


function copyToClipboard() {
 var copyText ="1234567";
   /* Copy the text NEED TO FIX*/
  navigator.clipboard.writeText(copyText.value);
  /* Alert the copied text */
  alert("1234567 Copied");
}

