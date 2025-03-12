document.addEventListener("DOMContentLoaded", function () {
    const divs = document.querySelectorAll("div");
    
    divs.forEach(div => {
        div.addEventListener("click", turnRed);
    });

    function turnRed(event) {
        const div = event.target;
        div.style.backgroundColor = "red";
        div.removeEventListener("click", turnRed);
        div.addEventListener("click", turnGreen);
    }

    function turnGreen(event) {
        const div = event.target;
        div.style.backgroundColor = "green";
        div.removeEventListener("click", turnGreen);
        div.addEventListener("click", turnRed);
    }
});
