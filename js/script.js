/*========================================
JANA JAGRITI SECONDARY SCHOOL
Official Website JavaScript
script.js
========================================*/


//==============================
// MOBILE MENU
//==============================


const menuToggle = document.querySelector(".menu-toggle");

const navbar = document.querySelector(".navbar");


if(menuToggle && navbar){


menuToggle.addEventListener("click",()=>{


    navbar.classList.toggle("active");


});


}





//==============================
// CLOSE MENU AFTER CLICK
//==============================


const navLinks = document.querySelectorAll(".navbar a");


navLinks.forEach(link=>{


    link.addEventListener("click",()=>{


        if(navbar){

            navbar.classList.remove("active");

        }


    });


});






//==============================
// IMAGE LIGHTBOX
//==============================


function openLightbox(src){


    const lightbox = document.getElementById("lightbox");

    const lightboxImg = document.getElementById("lightbox-img");


    if(lightbox && lightboxImg){


        lightbox.style.display = "flex";

        lightboxImg.src = src;


    }


}





function closeLightbox(){


    const lightbox = document.getElementById("lightbox");


    if(lightbox){


        lightbox.style.display = "none";


    }


}






//==============================
// PAGE LOAD MESSAGE
//==============================


window.addEventListener("load",()=>{


    console.log("Jana Jagriti Secondary School Website Loaded");


});
