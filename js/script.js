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

/*========================================
  DYNAMIC LANGUAGE SWITCHER (EN / NP)
========================================*/

document.addEventListener('DOMContentLoaded', () => {
    const btnEn = document.getElementById('lang-en-btn');
    const btnNp = document.getElementById('lang-np-btn');

    function switchLanguage(lang) {
        // Find all elements containing both English and Nepali translations
        const elements = document.querySelectorAll('[data-en][data-np]');
        
        elements.forEach(el => {
            const translatedText = el.getAttribute(`data-${lang}`);
            if (translatedText) {
                el.textContent = translatedText;
            }
        });

        // Toggle active button style
        if (lang === 'np') {
            btnNp.classList.add('active');
            btnEn.classList.remove('active');
        } else {
            btnEn.classList.add('active');
            btnNp.classList.remove('active');
        }

        // Save selected language in local storage
        localStorage.setItem('selectedLang', lang);
    }

    if (btnEn && btnNp) {
        btnEn.addEventListener('click', (e) => {
            e.preventDefault();
            switchLanguage('en');
        });

        btnNp.addEventListener('click', (e) => {
            e.preventDefault();
            switchLanguage('np');
        });

        // Load saved language preference on page load (defaults to English)
        const savedLang = localStorage.getItem('selectedLang') || 'en';
        switchLanguage(savedLang);
    }
});
