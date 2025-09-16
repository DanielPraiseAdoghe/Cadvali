const header = document.querySelector("header");
const originalY = header.offsetTop;
const menuButton = document.querySelector(".menuButton");
const dropdown = document.querySelector(".dropdown");


window.addEventListener("scroll", ()=>{
    if(window.scrollY >= originalY) {
        header.classList.add("sticky");
    }
    else {
        header.classList.remove("sticky");
    }
})



function toggleMenu() {
    
    menuButton.classList.toggle("active");
    dropdown.classList.toggle("active");

    menuButton.classList.contains("active") ? menuButton.innerHTML = '<i class="fa-solid fa-xmark"></i>' : menuButton.innerHTML = '<i class="fa-solid fa-bars"></i>';
}

const scrollToTopBtn = document.getElementById("scrollToTop");
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = "flex";
    } else {
        scrollToTopBtn.style.display = "none";
    }   
});

scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});