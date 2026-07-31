/*========================================
JANA JAGRITI SECONDARY SCHOOL
Gallery Lightbox JavaScript
gallery.js
========================================*/


const galleryImages = document.querySelectorAll(".gallery-img");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightbox-img");

const closeBtn = document.querySelector(".close");



galleryImages.forEach(image => {


    image.addEventListener("click", function(){


        lightbox.style.display = "flex";


        lightboxImg.src = this.src;


    });


});




if(closeBtn){


    closeBtn.addEventListener("click",()=>{


        lightbox.style.display = "none";


    });


}




if(lightbox){


    lightbox.addEventListener("click",(e)=>{


        if(e.target !== lightboxImg){


            lightbox.style.display = "none";


        }


    });


}
