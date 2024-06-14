$(document).ready(function() {
    let timer;
    let timeLeft = 60;
    let currentNumber = 1;
    let attempts = 0;
    let bestTime = null;

    // Start game button
    $('#startGame').click(function() {
        $('#mainPage').hide();
        $('#gamePage').show();
        startGame();
    });

    // Restart game button
    $('#restartGame').click(function() {
        resetGame();
        startGame();
    });

    function startGame() {
        attempts++;
        resetTimer();
        generateGameField();
        startTimer();
    }

    function resetGame() {
        currentNumber = 1;
        $('#message').text('');
        $('#gameField').empty();
        clearInterval(timer);
        timeLeft = 60;
        $('#timer').text(`Time: ${timeLeft}`);
    }

    function resetTimer() {
        clearInterval(timer);
        timeLeft = 60;
        $('#timer').text(`Time: ${timeLeft}`);
    }

    function startTimer() {
        timer = setInterval(function() {
            timeLeft--;
            $('#timer').text(`Time: ${timeLeft}`);
            if (timeLeft === 0) {
                clearInterval(timer);
                $('#message').text('Time is up! Game over.');
                updateStats('Failed');
            }
        }, 1000);
    }

    function generateGameField() {
        const numbers = Array.from({ length: 20 }, (_, i) => i + 1).sort(() => Math.random() - 0.5);
        numbers.forEach(number => {
            const size = `${Math.random() * (2 - 1) + 1}em`;
            const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
            $('#gameField').append(`<div data-number="${number}" style="font-size: ${size}; color: ${color};">${number}</div>`);
        });

        $('#gameField div').click(function() {
            const selectedNumber = parseInt($(this).data('number'));
            if (selectedNumber === currentNumber) {
                $(this).css('background-color', 'green');
                currentNumber++;
                if (currentNumber > 20) {
                    clearInterval(timer);
                    $('#message').text('Congratulations! You completed the game.');
                    const result = 60 - timeLeft;
                    updateStats(result);
                    bestTime = bestTime === null ? result : Math.min(bestTime, result);
                }
            } else {
                $('#message').text('Incorrect number! Try again.');
            }
        });
    }

    function updateStats(result) {
        const bestClass = bestTime !== null && result <= bestTime ? 'best' : '';
        $('#statsTable tbody').append(`<tr class="${bestClass}"><td>${attempts}</td><td>${result}</td></tr>`);
    }
});
