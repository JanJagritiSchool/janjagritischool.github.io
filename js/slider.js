/*========================================
JANA JAGRITI SECONDARY SCHOOL
Hero Background Slider
slider.js
========================================*/


const slides = document.querySelectorAll(".hero-slide");


let currentSlide = 0;



function changeSlide(){


    if(slides.length === 0){

        return;

    }



    slides[currentSlide].classList.remove("active");



    currentSlide++;



    if(currentSlide >= slides.length){

        currentSlide = 0;

    }



    slides[currentSlide].classList.add("active");


}




setInterval(changeSlide,5000);
