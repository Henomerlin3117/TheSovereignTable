/*==========================
PRELOADER
==========================*/
document.addEventListener("DOMContentLoaded", () => {

    const preloader = document.getElementById("preloader");

    setTimeout(() => {

        preloader.classList.add("hide");

    },1200);

});

const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.onclick = () =>{

    menuIcon.classList.toggle("fa-xmark");

    navbar.classList.toggle("active");

}

window.addEventListener("scroll",()=>{

    menuIcon.classList.remove("fa-xmark");

    navbar.classList.remove("active");

});

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    header.classList.toggle("sticky", window.scrollY > 50);

});
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if(scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") == "#" + current){

            link.classList.add("active");

        }

    });

});