function showTask(taskNum) {
    document.getElementById('task1').classList.add('hidden');
    document.getElementById('task2').classList.add('hidden');
    document.getElementById('task' + taskNum).classList.remove('hidden');
  }

  function showCurrentDateTime() {
    const now = new Date();
    const days = ["неділя", "понеділок", "вівторок", "середа", "четвер", "п’ятниця", "субота"];
    const months = ["січня", "лютого", "березня", "квітня", "травня", "червня", "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"];
    const formattedTime = now.toLocaleTimeString('uk-UA');
    const formattedDate = `${days[now.getDay()]}, ${String(now.getDate()).padStart(2, '0')} ${months[now.getMonth()]} ${now.getFullYear()} року`;

    const output = `${formattedTime}, ${formattedDate}`;
    console.log(output);
    document.getElementById('datetimeOutput').innerText = output;
  }

  function guessTheNumberGame() {
    let playAgain;

    do {
      const secretNumber = Math.floor(Math.random() * 51);
      let guess;
      let attempts = 0;
      let gameLog = '';

      while (true) {
        const timestamp = new Date().toLocaleString('uk-UA');
        guess = prompt("Вгадайте число від 0 до 50:");
        if (guess === null) break;

        guess = Number(guess);
        attempts++;

        const distance = Math.abs(guess - secretNumber);
        let hint;

        if (guess === secretNumber) {
          alert(`Вітаємо! Ви вгадали число ${secretNumber} за ${attempts} спроб.`);
          const successLog = `${timestamp} Спроба ${attempts}: число ${guess} – вірно`;
          console.log(successLog);
          gameLog += successLog + '\n';
          break;
        } else {
          if (distance > 20) {
            hint = "холодно";
          } else if (distance > 10) {
            hint = "тепло";
          } else {
            hint = "гаряче";
          }
          alert(`Невірно – ${hint}`);
          const failLog = `${timestamp} Спроба ${attempts}: число ${guess} – не вірно`;
          console.log(failLog);
          gameLog += failLog + '\n';
        }
      }

      document.getElementById('gameLog').innerText = gameLog;
      playAgain = confirm("Бажаєте зіграти ще раз?");
    } while (playAgain);
  }