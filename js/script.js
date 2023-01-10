console.log("Cześć!")

let button = document.querySelector(".button");
let body = document.querySelector(".body");
let themeName = document.querySelector(".themeName");

button.addEventListener("click", () => {
    
    body.classList.toggle("darkTheme");
    themeName.innerText = body.classList.contains("darkTheme") ? "jasny" : "ciemny";
});