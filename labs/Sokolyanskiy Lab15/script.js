let num = 2;
while (num <= 100) {
    let isPrime = true;
    let div = 2;
    while (div <= Math.sqrt(num)) {
        if (num % div === 0) {
            isPrime = false;
            break;
        }
        div++;
    }
    if (isPrime) {
        console.log(num);
    }
    num++;
}

function printNumbers() {
    let i = 0;
    do {
        if (i === 0) {
            console.log(i + " – це нуль");
        } else if (i % 2 === 0) {
            console.log(i + " – парне число");
        } else {
            console.log(i + " – непарне число");
        }
        i++;
    } while (i <= 10);
}
printNumbers();

let result = 10000;
let counter = 0;
while (result >= 50) {
    result /= 2;
    counter++;
}
console.log("result: " + result);
console.log("counter: " + counter);

let month = parseInt(prompt("Введіть число місяця (1-12):"));
let season = "";
let monthName = "";

if (month === 12 || month === 1 || month === 2) season = "зима";
else if (month >= 3 && month <= 5) season = "весна";
else if (month >= 6 && month <= 8) season = "літо";
else if (month >= 9 && month <= 11) season = "осінь";

switch(month) {
    case 1: monthName = "Січень"; break;
    case 2: monthName = "Лютий"; break;
    case 3: monthName = "Березень"; break;
    case 4: monthName = "Квітень"; break;
    case 5: monthName = "Травень"; break;
    case 6: monthName = "Червень"; break;
    case 7: monthName = "Липень"; break;
    case 8: monthName = "Серпень"; break;
    case 9: monthName = "Вересень"; break;
    case 10: monthName = "Жовтень"; break;
    case 11: monthName = "Листопад"; break;
    case 12: monthName = "Грудень"; break;
}
if (month >= 1 && month <= 12) {
    alert("Місяць: " + monthName + ", Пора року: " + season);
}

let Tc = parseFloat(prompt("Введіть температуру в градусах за Цельсієм:"));
let Tf = (9/5) * Tc + 32;
alert("Температура за Фаренгейтом: " + Tf);

let dayNum = parseInt(prompt("Введіть число від 1 до 7:"));
let dayName = "";
switch(dayNum) {
    case 1: dayName = "Понеділок"; break;
    case 2: dayName = "Вівторок"; break;
    case 3: dayName = "Середа"; break;
    case 4: dayName = "Четвер"; break;
    case 5: dayName = "П'ятниця"; break;
    case 6: dayName = "Субота"; break;
    case 7: dayName = "Неділя"; break;
}
document.write(dayName);