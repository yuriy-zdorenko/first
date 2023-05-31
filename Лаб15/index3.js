let month = parseInt(prompt("Введіть номер місяця: "))

function getMonthName(month) {
    let date = new Date(2023, month - 1, 1);
    let name = date.toLocaleString('uk', { month: 'long' });

    return `${name.charAt(0).toUpperCase()}${name.slice(1)}`
}

function getSeasonNameFromMonth(month) {
    switch (month) {
        case 1:
        case 2:
        case 12:
            return "Зима";
        case 3:
        case 4:
        case 5:
            return "Весна";
        case 6:
        case 7:
        case 8:
            return "Літо";
        case 9:
        case 10:
        case 11:
            return "Осінь";
        default:
            return "Невірне число";
    }
}

console.log("Місяць:", getMonthName(month))
console.log("Пора року:", getSeasonNameFromMonth(month))