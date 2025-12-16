let time = 60;
let interval;
let expected = 1;
let attempts = 0;
let results = [];

$(document).ready(function () {
  generateNumbers();
  startTimer();

  $('#restart').click(() => {
    resetGame();
  });
});

function startTimer() {
  $('#timer').text('Час: ' + time);
  interval = setInterval(() => {
    time--;
    $('#timer').text('Час: ' + time);
    if (time <= 0) {
      clearInterval(interval);
      alert('Час вичерпано!');
      saveResult(false);
      resetGame();
    }
  }, 1000);
}

function generateNumbers() {
  const numbers = Array.from({ length: 20 }, (_, i) => i + 1);
  numbers.sort(() => Math.random() - 0.5);
  $('#game-field').empty();
  for (let num of numbers) {
    const size = 14 + Math.floor(Math.random() * 20);
    function getRandomLightColor() {
      const r = Math.floor(150 + Math.random() * 105);
      const g = Math.floor(150 + Math.random() * 105);
      const b = Math.floor(150 + Math.random() * 105);
      return `rgb(${r}, ${g}, ${b})`;
    }
    
    const color = getRandomLightColor();

    $('#game-field').append(
      $('<div></div>')
        .addClass('number')
        .text(num)
        .css({ fontSize: size + 'px', color: color })
        .click(function () {
          if (parseInt($(this).text()) === expected) {
            $(this).addClass('selected');
            expected++;
            if (expected > 20) {
              clearInterval(interval);
              alert('Вітаємо! Ви виграли!');
              saveResult(true);
              resetGame();
            }
          } else {
            alert('Не вірна цифра!');
          }
        })
    );
  }
}

function resetGame() {
  time = 60;
  expected = 1;
  attempts++;
  clearInterval(interval);
  generateNumbers();
  startTimer();
}

function saveResult(success) {
  if (success) {
    results.push(60 - time);
    updateStats();
  }
}

function updateStats() {
  const tbody = $('#results tbody').empty();
  let best = Math.min(...results);
  results.forEach((res, i) => {
    const row = $('<tr></tr>');
    if (res === best) row.addClass('best-time');
    row.append(`<td>${i + 1}</td><td>${res} сек.</td>`);
    tbody.append(row);
  });
}
