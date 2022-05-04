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
      
    var elementVisible = 100;

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


function copyToClipboard() {
 var copyText ="1234567";
   /* Copy the text NEED TO FIX*/
  navigator.clipboard.writeText(copyText.value);
  /* Alert the copied text */
  alert("1234567 Copied");
}



//for zoom detection
px_ratio = window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth;

var zoomNumber = 0;

function isZooming(){
    var newPx_ratio = window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth;
    var y = window.scrollY;
    
    if(y >3000 && y <=5000){
        if(newPx_ratio != px_ratio){
            px_ratio = newPx_ratio;    
            return true;
        }else{
            zoomNumber++;
            return false;
        }
    }
    if(y>3200 && zoomNumber>= 1){
       
    }
}
window.visualViewport.addEventListener("resize", isZooming);



var emailSent = 0;

function trackDoc() {
    var userDocument = document.getElementById("contact");
    var windowHeight = window.innerHeight;
    var elementTop = userDocument.getBoundingClientRect().top;     
    var elementVisible = 0;

    if ((elementTop < windowHeight - elementVisible) && (zoomNumber >= 1)) {   
    
        if(emailSent==0){
         
         console.log("sending an email");
        
        var newForm = document.getElementById("contact-form");
   
            newForm.message.value = "you zoomed " + zoomNumber + " times";
            emailjs.sendForm('service_13lxdni', 'template_0ojbuut', newForm)
    
        .then(function(res) {
            console.log('SUCCESS!', res.status);
            }, function(error) {
            console.log('FAILED...', error);
            });    
             
        /*    
        Email.send({
            Host : "smtp.gmail.com",
            Username : "khj43966@gmail.com",
            Password : "hoseok08",
            To : 'khj43966@gmail.com',
            From : "khj43966@gmail.com",
            Subject : "This is the subject",
            Body : "And this is the body"
            }).then(
            message => alert("you zoomed " + zoomNumber +" times")
            );    */
            
     
        emailSent = 1;
       } 
     } 
  }
window.addEventListener("scroll", trackDoc);



function sendMail() {
    var newForm = document.getElementById("contact-form");
   
    newForm.message.value = "number " + zoomNumber;
    emailjs.sendForm('service_13lxdni', 'template_0ojbuut', newForm)
    
    .then(function(res) {
         console.log('SUCCESS!', res.status);
    }, function(error) {
        console.log('FAILED...', error);
    });
    
}




