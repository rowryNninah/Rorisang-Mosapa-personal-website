const hamburgerMenu = document.querySelector(".hamburger-menu");
const navList = document.querySelector("#nav-list");

hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("active");
    navList.classList.toggle("active");
})

document.querySelectorAll(".nav-item").forEach(n => n.addEventListener("click", () => {
    hamburgerMenu.classList.remove("active");
    navList.classList.remove("active");
}))

