/*========================================
JAN JAGRITI SECONDARY SCHOOL
Official Website JavaScript
PART 1
========================================*/


// ===============================
// HERO IMAGE SLIDER
// ===============================


const slides = document.querySelectorAll(".slide");

let currentSlide = 0;



function changeSlide(){


    slides[currentSlide].classList.remove("active");


    currentSlide++;


    if(currentSlide >= slides.length){

        currentSlide = 0;

    }


    slides[currentSlide].classList.add("active");


}



setInterval(changeSlide,5000);







// ===============================
// MOBILE MENU
// ===============================


const menuBtn = document.querySelector(".menu-btn");

const nav = document.querySelector("nav");



if(menuBtn){


menuBtn.addEventListener("click",()=>{


    nav.classList.toggle("active");


});


}




// Close menu after clicking link


const navLinks = document.querySelectorAll("nav ul li a");



navLinks.forEach(link=>{


    link.addEventListener("click",()=>{


        nav.classList.remove("active");


    });


});

/*========================================
BACK TO TOP BUTTON
========================================*/


const backTop = document.createElement("div");

backTop.className = "back-top";

backTop.innerHTML = "↑";

document.body.appendChild(backTop);



window.addEventListener("scroll",()=>{


    if(window.scrollY > 300){


        backTop.classList.add("show");


    }

    else{


        backTop.classList.remove("show");


    }


});



backTop.addEventListener("click",()=>{


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


});







/*========================================
AUTO UPDATE FOOTER YEAR
========================================*/


const year = new Date().getFullYear();


const footerYear = document.querySelector(".footer-bottom p");


if(footerYear){


    footerYear.innerHTML =
    `© ${year} Jan Jagriti Secondary School. All Rights Reserved.`;


}







/*========================================
IMAGE LOADING EFFECT
========================================*/


const images = document.querySelectorAll("img");


images.forEach(image=>{


    image.addEventListener("load",()=>{


        image.style.opacity="1";


    });


});
