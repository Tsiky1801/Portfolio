// MENU MOBILE
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// ACTIVE LINK
const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
    link.addEventListener("click", function () {
        links.forEach(l => l.classList.remove("active"));
        this.classList.add("active");
        navLinks.classList.remove("show");
    });
});

// ANIMATION AU SCROLL
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if(sectionTop < window.innerHeight - 100){
            section.classList.add("show");
        }
    });
});
