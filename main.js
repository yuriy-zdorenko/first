// Виведення всіх натуральних чисел в проміжку від -100 до 100
let i = -100;

while (i <= 100) {
    if (i > 0) { 
        console.log(i);
    }
    i++;
}


// Виведення парних чисел від 0 до 100 за допомогою циклу
function printEvenNumbers() {
    let i = 0;
    do {
        console.log(i);
        i += 2; // збільшуємо на 2, щоб виводити лише парні числа
    } while (i <= 100);
}

printEvenNumbers();



// // Ділення 1000 на 3, поки результат не стане менше 5
let b = 1000;
let res = b;
let count = 0;

while (res >= 5) {
    res /= 3;
    count++;
}

alert(`Результат: ${res}\nКількість ітерацій: ${count}`);


// Конвертація сантиметрів у дюйми
let cm = prompt("Введіть довжину в сантиметрах:");
let inches = cm / 2.54;
alert(`Довжина у дюймах: ${inches}`);


// Отримання дня тижня за числом місяця

// Запитуємо число від 1 до 31 через prompt
let dayNumber = parseInt(prompt("Введіть число від 1 до 31"));

// Перевіряємо, чи число валідне
if (dayNumber >= 1 && dayNumber <= 31) {
  // Створюємо нову дату для поточного місяця і року
  let currentDate = new Date();
  currentDate.setDate(dayNumber); // Встановлюємо день у дату

  // Масив з назвами днів тижня
  const daysOfWeek = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"];

  // Отримуємо день тижня для заданого числа
  let dayOfWeek = daysOfWeek[currentDate.getDay()];

  // Виводимо результат
  alert("Це " + dayOfWeek);
} 

else {

  alert("Будь ласка, введіть число від 1 до 31.");

}
