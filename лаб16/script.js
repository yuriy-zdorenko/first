document.addEventListener("DOMContentLoaded", function () {
    // Задача 1: Обработчик клика на изображениях
    document.querySelectorAll(".square").forEach(square => {
        square.onclick = function () {
            const width = window.getComputedStyle(this).width;
            console.log(width);
        };
    });

    // Задача 2: Добавление и удаление обработчика наведения на ссылки
    function addTitle(event) {
        event.target.setAttribute("title", event.target.getAttribute("href"));
    }
    document.querySelectorAll(".link").forEach(link => {
        link.addEventListener("mouseenter", addTitle);
    });
    

    // Задача 3 и 4: Обработчик клика на полях ввода
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

    // Задача 5: Обработчик клика для замены чисел словами на их квадрат
    const numberWords = {
        "один": 1, "два": 2, "три": 3, "четыре": 4, "пять": 5,
        "шесть": 6, "семь": 7, "восемь": 8, "девять": 9, "десять": 10
    };

    const inputField = document.getElementById("numberInput");
    const resultParagraph = document.getElementById("result");

    inputField.addEventListener("blur", function () {  // Срабатывает при потере фокуса
        let word = inputField.value.trim().toLowerCase();
        if (numberWords[word] !== undefined) {
            resultParagraph.textContent = `Квадрат числа ${word} равен ${numberWords[word] ** 2}`;
        } else {
            resultParagraph.textContent = "Введите корректное числовое слово!";
        }
    });
});
