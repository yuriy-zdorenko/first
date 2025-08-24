function showCurrentTime() {
    const now = new Date();

    const days = ['неділя', 'понеділок', 'вівторок', 'середа', 'четвер', 'п’ятниця', 'субота'];
    const months = ['січня', 'лютого', 'березня', 'квітня', 'травня', 'червня',
                    'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'];

    const formatNumber = (n) => n.toString().padStart(2, '0');

    const hours = formatNumber(now.getHours());
    const minutes = formatNumber(now.getMinutes());
    const seconds = formatNumber(now.getSeconds());
    const dayOfWeek = days[now.getDay()];
    const day = formatNumber(now.getDate());
    const month = months[now.getMonth()];
    const year = now.getFullYear();

    const formatted = `${hours}:${minutes}:${seconds}, ${dayOfWeek} , ${day} ${month} ${year} року`;

    console.log(formatted);
    return formatted;
}

function playGuessingGame() {
    const getTimeStamp = () => {
        const now = new Date();
        const pad = (n) => n.toString().padStart(2, '0');
        return `${pad(now.getDate())}.${pad(now.getMonth() + 1)}.${now.getFullYear()} ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
    };

    let playAgain = true;

    while (playAgain) {
        const target = Math.floor(Math.random() * 51);
        let guess;
        let attempts = 0;

        while (true) {
            guess = prompt("Вгадайте число від 0 до 50:");
            if (guess === null) {
                alert("Гру перервано.");
                return;
            }

            guess = Number(guess);
            attempts++;

            const timestamp = getTimeStamp();

            if (guess === target) {
                alert(`За ${attempts} спроб ви вгадали число ${target}`);
                console.log(`${timestamp} Спроба ${attempts}: число ${guess} – вірно`);
                break;
            }

            const difference = Math.abs(guess - target);
            let hint = "";

            if (difference <= 3) {
                hint = "гаряче";
            } else if (difference <= 10) {
                hint = "тепло";
            } else {
                hint = "холодно";
            }

            alert(`Не вірно. Ви ${hint}.`);
            console.log(`${timestamp} Спроба ${attempts}: число ${guess} – не вірно`);
        }

        playAgain = confirm("Бажаєте спробувати ще раз?");
    }
}

playGuessingGame();

showCurrentTime();
