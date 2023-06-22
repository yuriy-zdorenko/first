let month = prompt("Введіть номер місяця (від 1 до 12):");
let season;
let monthName;
alert(`Місяць: ${monthName}, Пора року: ${season}`);
if (month === "1" || month === "2" || month === "12") {
  season = "зима";
} else if (month === "3" || month === "4" || month === "5") {
  season = "весна";
} else if (month === "6" || month === "7" || month === "8") {
  season = "літо";
} else if (month === "9" || month === "10" || month === "11") {
  season = "осінь";
} else {
  season = "невідомо";
}

switch (month) {
  case "1":
    monthName = "Січень";
    break;
  case "2":
    monthName = "Лютий";
    break;
  case "3":
    monthName = "Березень";
    break;
  case "4":
    monthName = "Квітень";
    break;
  case "5":
    monthName = "Травень";
    break;
  case "6":
    monthName = "Червень";
    break;
  case "7":
    monthName = "Липень";
    break;
  case "8":
    monthName = "Серпень";
    break;
  case "9":
    monthName = "Вересень";
    break;
  case "10":
    monthName = "Жовтень";
    break;
  case "11":
    monthName = "Листопад";
    break;
  case "12":
    monthName = "Грудень";
    break;
  default:
    monthName = "невідомо";
    break;
}

