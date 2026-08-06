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
  ROBUST LANGUAGE SWITCHER (EN / NP)
========================================*/

document.addEventListener('DOMContentLoaded', () => {
    const btnEn = document.getElementById('lang-en-btn');
    const btnNp = document.getElementById('lang-np-btn');

    function switchLanguage(lang) {
        // Target all elements configured for translation
        const elements = document.querySelectorAll('[data-en][data-np]');
        
        elements.forEach(el => {
            const translatedText = el.getAttribute(`data-${lang}`);
            if (translatedText !== null) {
                // Using innerHTML ensures HTML tags and quotes display correctly
                el.innerHTML = translatedText;
            }
        });

        // Update button active state
        if (lang === 'np') {
            if (btnNp) btnNp.classList.add('active');
            if (btnEn) btnEn.classList.remove('active');
        } else {
            if (btnEn) btnEn.classList.add('active');
            if (btnNp) btnNp.classList.remove('active');
        }

        // Store active language in browser memory
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
    }

    // Auto-run on page load
    const savedLang = localStorage.getItem('selectedLang') || 'en';
    switchLanguage(savedLang);
});
