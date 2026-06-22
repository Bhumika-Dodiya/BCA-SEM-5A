// Mobile Menu Toggle

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Button Action

const exploreBtn = document.getElementById("exploreBtn");

exploreBtn.addEventListener("click", () => {
    alert("Welcome to SSCCM College!");
});
