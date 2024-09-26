$(document).ready(function() {
    // Функція, що відбувається при натисканні на кнопку "Почати гру"
    $("#startBtn").click(function() {
        // Тут ви можете додати логіку для початку гри
        alert("Гра розпочата!");
    });
});
$(document).ready(function() {
    let timerInterval;
    let gameStarted = false;
    var number = 1;

    const gameNumbers = [...Array(20).keys()].map(x => x + 1); // Генеруємо числа від 1 до 20

    $("#startBtn").click(function() {
        $("#gamePage").show();
        startGame();
    });

    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    function startGame() {
        gameStarted = true;
        let timeLeft = 60;
        displayGameNumbers();

        timerInterval = setInterval(function() {
            $("#timer").text(timeLeft);
            timeLeft--;

            if (timeLeft < 0) {
                clearInterval(timerInterval);
                endGame();
            }
        }, 1000);
    }

    function displayGameNumbers() {
        attempts++;
        const gameField = $("#gameField");
        gameField.empty(); // Очищуємо поле перед відображенням нових чисел
        number = 1;

        shuffleArray(gameNumbers);
        gameNumbers.forEach(function(number) {
            const fontSize = Math.floor(Math.random() * 20 + 16); // Випадковий розмір шрифту
            const color = getRandomColor(); // Випадковий колір

            const numberDiv = $("<div>")
                .text(number)
                .css({
                    "font-size": fontSize + "px",
                    "color": color,
                    "cursor": "pointer"
                })
                .click(function() {
                    if (gameStarted) {
                        handleNumberClick($(this));
                    }
                });

            gameField.append(numberDiv);
        });
    }

    function handleNumberClick(element) {
        if (parseInt(element.text()) === number) {
            element.addClass("selected");
            number++;
            if (number === 21) {
                successfulAttempts++;
                endGameWin();
            }
        } else {
            alert("Не вірна цифра!");
        }
    }

    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    $("#restartBtn").click(function() {
        clearInterval(timerInterval);
        gameStarted = false;
        $("#gamePage").hide();
        $("#timer").text("60");
    });

    function endGame() {
        alert("Гра закінчена!");
        gameStarted = false;
    }

    let attempts = 0;
    let successfulAttempts = 0;
    let bestScore = 0;

    // Останній рядок таблиці, який буде відповідати за статистику
    const statsRow = $("<tr>").append(
        $("<td>").text("Загальна кількість спроб:"),
        $("<td>").attr("id", "attemptsCount").text(attempts),
        $("<td>").text("Успішні спроби:"),
        $("<td>").attr("id", "successfulAttemptsCount").text(successfulAttempts),
        $("<td>").text("Найкращий результат:"),
        $("<td>").attr("id", "bestScore").text(bestScore)
    );

    // Додавання рядка зі статистикою до таблиці
    $("#statsTable tbody").append(statsRow);

    // Функція для відображення статистики в таблиці
    function displayStats() {
        $("#attemptsCount").text(attempts);
        $("#successfulAttemptsCount").text(successfulAttempts);
        $("#bestScore").text(bestScore);

        // Підсвітка найкращого результату іншим кольором
        if (successfulAttempts > bestScore) {
            $("#bestScore").css("color", "green");
            bestScore = successfulAttempts;
        } else {
            $("#bestScore").css("color", ""); // Скидаємо кольори
        }
    }

    // Функція для завершення гри
    function endGameWin() {
        // Логіка завершення гри
        // Показ вікна привітання з результатами
        alert("Гра завершена! Ви виграли " + successfulAttempts + " раз(ів) з " + attempts + " спроб.");
        displayStats();
    }
});
