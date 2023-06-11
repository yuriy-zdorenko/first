let week = parseInt(prompt("Введіть номер дня тижня: "))

function getWeekDayName(week) {
    switch (week) {
        case 1: return "Понеділок";
        case 2: return "Вівторок";
        case 3: return "Середа";
        case 4: return "Четвер";
        case 5: return "П'ятниця";
        case 6: return "Субота";
        case 7: return "Неділя";
        default: return "Невірне число";
    }
}

alert("День тижня: " + getWeekDayName(week))