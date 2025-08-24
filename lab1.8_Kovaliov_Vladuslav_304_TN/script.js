let current = 1;
let timer = 60;
let interval;
let attempts = 0;
let results = [];

const fontSizes = ['14px', '16px', '18px', '20px', '24px'];
function getRandomColor() {
  const h = Math.floor(Math.random() * 360);
  return `hsl(${h}, 80%, 50%)`;
}

function getRandomFontSize() {
  return fontSizes[Math.floor(Math.random() * fontSizes.length)];
}

function renderGrid() {
  const grid = $('#grid');
  grid.empty();
  let numbers = Array.from({ length: 25 }, (_, i) => i + 1).sort(() => Math.random() - 0.5);

  for (let number of numbers) {
    const cell = $('<div>').text(number);
    cell.css({
      color: getRandomColor(),
      fontSize: getRandomFontSize()
    });

    cell.on('click', function () {
      if (parseInt($(this).text()) === current) {
        $(this).css('background-color', '#d1ffd1');
        current++;
        if (current > 25) {
          clearInterval(interval);
          const result = timer;
          attempts++;
          results.push(result);
          updateResultsTable();
          alert("Вітаю! Ви виграли!");
          resetGame();
        }
      } else {
        alert("Не вірна цифра");
      }
    });

    grid.append(cell);
  }
}

function startTimer() {
  clearInterval(interval);
  interval = setInterval(() => {
    timer--;
    $('#timer').text(timer);
    if (timer <= 0) {
      clearInterval(interval);
      alert("Час вичерпано!");
      resetGame();
    }
  }, 1000);
}

function resetGame() {
  current = 1;
  timer = 60;
  $('#timer').text(timer);
  renderGrid();
  startTimer();
}

function updateResultsTable() {
  const tbody = $('#results tbody');
  tbody.empty();
  const max = Math.max(...results);

  results.forEach((time, index) => {
    const row = $('<tr>');
    if (time === max) row.addClass('best');
    row.append(`<td>${index + 1}</td>`);
    row.append(`<td>${time}</td>`);
    tbody.append(row);
  });
}

$(document).ready(function () {
  renderGrid();
  startTimer();

  $('#restart').on('click', function () {
    resetGame();
  });
});
