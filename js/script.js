// ===============================
// JANA JAGRITI SECONDARY SCHOOL
// MAIN JAVASCRIPT
// ===============================


// Mobile Menu

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");


if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        nav.classList.toggle("active");

    });

}



// Smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach(link=>{

    link.addEventListener("click",function(e){

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            e.preventDefault();

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});




// Animation on scroll

const sections=document.querySelectorAll("section");


window.addEventListener("scroll",()=>{


sections.forEach(section=>{


    let position=section.getBoundingClientRect().top;


    let screen=window.innerHeight;


    if(position < screen - 100){

        section.style.opacity="1";
        section.style.transform="translateY(0)";

    }


});


});




// Current year in footer

const year=document.querySelector(".year");


if(year){

    year.innerHTML=new Date().getFullYear();

}
