const header = document.querySelector("header");
const originalY = header.offsetTop;



window.addEventListener("scroll", ()=>{
    if(window.scrollY >= originalY) {
        header.classList.add("sticky");
    }
    else {
        header.classList.remove("sticky");
    }
})



