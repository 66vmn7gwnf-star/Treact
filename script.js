const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", () => {

    menuBtn.classList.toggle("active");
    mobileMenu.classList.toggle("active");
    overlay.classList.toggle("active");

});

overlay.addEventListener("click", () => {

    menuBtn.classList.remove("active");
    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");

});

document.addEventListener("keydown", (e) => {

    if(e.key === "Escape"){

        menuBtn.classList.remove("active");
        mobileMenu.classList.remove("active");
        overlay.classList.remove("active");

    }

});