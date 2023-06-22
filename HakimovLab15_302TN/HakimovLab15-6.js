let dayNumber = prompt("Введіть число, яке відповідає дню тижня:");
let dayNames = [
  "Неділя",
  "Понеділок",
  "Вівторок",
  "Середа",
  "Четвер",
  "П'ятниця",
  "Субота"
];

let dayName = dayNames[Number(dayNumber) - 1];

document.write(`День неділі, що відповідає числу ${dayNumber}: ${dayName}`);