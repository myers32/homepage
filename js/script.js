{
    const welcome = () => {
        console.log("Cześć! Witam wszystkich developerów!");
    }

    const toggleBackground = () => {
        const body = document.querySelector(".body");
        const nextColorName = document.querySelector(".themeName");

        body.classList.toggle("darkTheme");

        nextColorName.innerText = body.classList.contains("darkTheme") ? "jasny" : "ciemny";
    };

    const init = () => {
        const button = document.querySelector(".js-button");
        
        button.addEventListener("click", toggleBackground);

        welcome();
    };

    init();
}