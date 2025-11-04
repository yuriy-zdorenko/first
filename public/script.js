$(document).ready(function() {
    let timer;
    let timeLeft = 60; 
    let currentNumber = 1;
    let gameInProgress = false;
    let gameStats = JSON.parse(localStorage.getItem('gameStats')) || [];

    const FONT_SIZES = ['1.2rem', '1.5rem', '1.8rem', '2rem', '2.2rem']; 
    const GAME_SIZE = 25; 


    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function getRandomFontSize() {
        return FONT_SIZES[Math.floor(Math.random() * FONT_SIZES.length)];
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function updateStatsTable() {
        const $tbody = $('#stats-table tbody');
        $tbody.empty();
        
        if (gameStats.length === 0) {
            $tbody.append('<tr><td colspan="2">Ще немає результатів</td></tr>');
            return;
        }

        const sortedStats = [...gameStats].sort((a, b) => a.time - b.time);
        const bestTime = sortedStats.length > 0 ? sortedStats[0].time : null;

        gameStats.forEach((stat, index) => {
            const timeTaken = 60 - stat.time;
            const $row = $(`<tr>
                <td>Гра ${index + 1}</td>
                <td>${timeTaken} с.</td>
            </tr>`); 

            if (stat.time === bestTime) {
                $row.addClass('best-result');
            }
            $tbody.append($row);
        });
    }

    function addStat(time) {
        gameStats.push({ time: time });
        localStorage.setItem('gameStats', JSON.stringify(gameStats));
        updateStatsTable();
    }


    function startGame() {
        gameInProgress = true;
        currentNumber = 1;
        timeLeft = 60;
        $('#time').text(timeLeft);
        $('#game-board').empty();

        let numbers = [];
        for (let i = 1; i <= GAME_SIZE; i++) {
            numbers.push(i);
        }
        numbers = shuffleArray(numbers);


        numbers.forEach(num => {
            const $cell = $(`<div class="number-cell" data-num="${num}">${num}</div>`);
            $cell.css({
                'color': getRandomColor(),
                'font-size': getRandomFontSize()
            });
            $('#game-board').append($cell);
        });

        startTimer();
        updateStatsTable();
    }

    function startTimer() {
        clearInterval(timer); 
        timer = setInterval(() => {
            timeLeft--;
            $('#time').text(timeLeft);
            if (timeLeft <= 0) {
                clearInterval(timer);
                alert("Час вийшов! Спробуйте ще раз.");
                gameInProgress = false;
                startGame();
            }
        }, 1000);
    }

    function stopGame(win = false) {
        clearInterval(timer);
        gameInProgress = false;
        if (win) {

            alert("Вітаємо! Ви виграли!");
            addStat(timeLeft);
            startGame(); 
        }
    }

    
    $('#game-board').on('click', '.number-cell', function() {
        if (!gameInProgress) return;

        const $cell = $(this);
        const num = parseInt($cell.data('num'));

        if (num === currentNumber) {
            $cell.addClass('selected'); 
            currentNumber++;

            if (currentNumber > GAME_SIZE) {
                
                stopGame(true);
            }
        } else {
             
            alert("Не вірна цифра!");
        }
    });

  
    $('#restartBtn').on('click', function() {
        stopGame(false);
        startGame();
    });

    
    startGame();
});