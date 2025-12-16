document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".square").forEach(square => {
        square.onclick = function () {
            const width = window.getComputedStyle(this).width;
            console.log(width);
        };
    });

    function addTitle(event) {
        event.target.setAttribute("title", event.target.getAttribute("href"));
    }
    
    function removeTitle(event) {
        event.target.removeAttribute("title");
    }
    
    document.querySelectorAll(".link").forEach(link => {
        link.addEventListener("mouseenter", addTitle);
        link.addEventListener("mouseleave", removeTitle);
    });
    
    document.querySelectorAll(".input-field").forEach(input => {
        let firstClick = true;
        input.addEventListener("click", function () {
            if (firstClick) {
                console.log(this.value);
                firstClick = false;
            } else {
                alert(this.value);
            }
            document.getElementById("demo").textContent = this.value;
        });
    });

    const numberWords = {
        "один": 1, "два": 2, "три": 3, "чотири": 4, "п'ять": 5,
        "шість": 6, "сім": 7, "вісім": 8, "дев'ять": 9, "десять": 10
    };

    console.log(typeof(numberWords));

    document.querySelectorAll(".num").forEach(paragraph => {
        paragraph.addEventListener("click", function() {
            let text = this.textContent.trim().toLowerCase();
            if (numberWords[text] !== undefined) {
                this.textContent = numberWords[text] ** 2;
            }
        });
    });
});
