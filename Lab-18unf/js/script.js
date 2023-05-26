$(document).ready(function() {
    var numbers = [];
    var selectedNumbers = [];
    var currentIndex = 0;
    var attempts = 0;
    var bestResult = localStorage.getItem('bestResult') || '-';

    function generateNumbers() {
        for (var i = 1; i <= 20; i++) {
            numbers.push(i);
        }
        numbers.sort(function() { return 0.5 - Math.random() });
    }

    function displayNumbers() {
        var gameBoard = $('#gameBoard');
        gameBoard.empty();

        for (var i = 0; i < numbers.length; i++) {
            var number = $('<div>', {
                class: 'number',
                text: numbers[i],
                click: selectNumber
            });
            gameBoard.append(number);
        }
    }

    function selectNumber() {
        var number = $(this);
        var selectedNumber = parseInt(number.text());

        if (selectedNumber === numbers[currentIndex]) {
            selectedNumbers.push(selectedNumber);
            number.addClass('selected');
            currentIndex++;

            if (currentIndex === numbers.length) {
                endGame();
            }
        } else {
            alert('Не вірна цифра');
            attempts++;
            selectedNumbers = [];
            currentIndex = 0;
            $('.number').removeClass('selected');
        }
    }

    function endGame() {
        alert('Гра завершена!');
        attempts++;
        if (attempts < bestResult || bestResult === '-') {
            bestResult = attempts;
            localStorage.setItem('bestResult', bestResult);
        }
        resetGame();
    }

    function resetGame() {
        numbers = [];
        selectedNumbers = [];
        currentIndex = 0;
        attempts = 0;
        displayNumbers();
        $('.number').removeClass('selected');
        $('#attempts').text(attempts);
        $('#bestResult').text(bestResult);
    }

    $('#startButton').click(function() {
        $(location).attr('href', 'game.html');
    });

    generateNumbers();
    displayNumbers();
});
