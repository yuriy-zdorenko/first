let dayNumInput = prompt("Введіть число від 1 до 7:");
let dayNum = parseInt(dayNumInput);
let dayName = "";

switch (dayNum) {
    case 1:
        dayName = "Понеділок";
        break;
    case 2:
        dayName = "Вівторок";
        break;
    case 3:
        dayName = "Середа";
        break;
    case 4:
        dayName = "Четвер";
        break;
    case 5:
        dayName = "П'ятниця";
        break;
    case 6:
        dayName = "Субота";
        break;
    case 7:
        dayName = "Неділя";
        break;
    default:
        alert("Помилка! Введено число поза діапазоном 1-7.");
}

if (dayName) {  
    alert(`Цей день: ${dayName}`);
}