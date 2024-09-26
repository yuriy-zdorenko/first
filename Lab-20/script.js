// Отримуємо посилання на поле вводу результату
const resultField = document.getElementById('result');

// Функція для додавання чисел та операторів до виразу
function appendValue(value) {
    resultField.value += value;
}

// Функція для обчислення результату виразу
function calculateResult() {
    const expression = resultField.value;
    const result = eval(expression); // ВИРАЖЕННЯ eval ФУНКЦІЇ НЕ РЕКОМЕНДУЄТЬСЯ ВИКОРИСТОВУВАТИ В БЕЗПЕКІ
    resultField.value = result;
}

// Функція для очищення результату
function clearResult() {
    resultField.value = '';
}
