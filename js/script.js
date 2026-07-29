// Jan Jagriti Secondary School Website

console.log("Website Loaded Successfully!");

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("mouseenter", () => {
        link.style.transition = "0.3s";
    });
});

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});