const hamburgerMenu = document.querySelector(".hamburger-menu");
const navBar = document.querySelector("#nav-list");

hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("active");
    navBar.classList.toggle("active");
})

document.querySelectorAll(".nav-item").forEach(n => n.addEventListener("click", () => {
    hamburgerMenu.classList.remove("active");
    navBar.classList.remove("active");
}))

