function startGame() {
    const secretNumber = Math.floor(Math.random() * 101); // Генеруємо випадкове число від 0 до 100
    let attempts = 0;

    while (true) {
        const guess = parseInt(prompt("Вгадайте число від 0 до 100:"));

        if (isNaN(guess)) {
            alert("Будь ласка, введіть числове значення.");
            continue;
        }

        attempts++;

        if (guess === secretNumber) {
            console.log(`${new Date().toLocaleString()}, Спроба ${attempts}: число ${guess} – вірно`);
            alert(`Вітаємо! За ${attempts} спроб ви вгадали число ${secretNumber}.`);
            if (confirm("Хочете зіграти ще раз?")) {
                startGame(); // Рекурсивно запускаємо гру знову
            } else {
                break;
            }
        } else {
            let message = "не вірно";
            if (Math.abs(guess - secretNumber) <= 10) {
                message = "дуже гаряче";
            } else if (Math.abs(guess - secretNumber) <= 20) {
                message = "гаряче";
            } else if (Math.abs(guess - secretNumber) <= 30) {
                message = "тепло";
            } else if (Math.abs(guess - secretNumber) <= 40) {
                message = "прохолодно";
            } else {
                message = "дуже прохолодно";
            }
            console.log(`${new Date().toLocaleString()}, Спроба ${attempts}: число ${guess} – ${message}`);
            alert(`Спроба ${attempts}: число ${guess} – ${message}`);
        }
    }
}
