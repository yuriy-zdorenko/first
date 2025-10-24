let monthInput = prompt("Введіть номер місяця (1-12):");
let month = parseInt(monthInput);

let season = "";
let monthName = "";

switch (month) {
    case 12:
        monthName = "Грудень";
        season = "Зима";
        break;
    case 1:
        monthName = "Січень";
        season = "Зима";
        break;
    case 2:
        monthName = "Лютий";
        season = "Зима";
        break;
    case 3:
        monthName = "Березень";
        season = "Весна";
        break;
    case 4:
        monthName = "Квітень";
        season = "Весна";
        break;
    case 5:
        monthName = "Травень";
        season = "Весна";
        break;
    case 6:
        monthName = "Червень";
        season = "Літо";
        break;
    case 7:
        monthName = "Липень";
        season = "Літо";
        break;
    case 8:
        monthName = "Серпень";
        season = "Літо";
        break;
    case 9:
        monthName = "Вересень";
        season = "Осінь";
        break;
    case 10:
        monthName = "Жовтень";
        season = "Осінь";
        break;
    case 11:
        monthName = "Листопад";
        season = "Осінь";
        break;
    default:
        alert("Помилка! Введено некоректне число місяця.");
}


if (monthName && season) {
    alert(`Місяць: ${monthName}\nПора року: ${season}`);
}