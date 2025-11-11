// 1. Створюємо один об'єкт для всіх даних
const data = {
  ua: {
    prompt: 'Введіть номер дня неділі від 1 до 7?',
    days: ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця', 'Субота', 'Неділя'],
    error: 'Неправильний ввід даних. Потрібно число від 1 до 7.'
  },
  en: {
    prompt: 'Enter the day number of the week (from 1 to 7)?',
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    error: 'Incorrect data entry. Please enter a number from 1 to 7.'
  },
  langPrompt: 'Виберіть мову "ua" або "en"?',
  langError: 'Неправильний ввід даних. Введіть "ua" або "en".'
};

// 2. Отримуємо посилання на HTML-елементи
const promptTextEl = document.getElementById('prompt-text');
const inputEl = document.getElementById('user-input');
const submitBtn = document.getElementById('submit-btn');
const resultTextEl = document.getElementById('result-text');

// 3. Змінні для керування станом
let currentState = 'lang'; // 'lang' -> 'day' -> 'done'
let selectedLangData;

// 4. Функція для оновлення UI
function updateUI(prompt, clearInput = true, clearResult = true) {
    promptTextEl.textContent = prompt;
    if (clearInput) inputEl.value = '';
    if (clearResult) resultTextEl.textContent = '';
}

// 5. Встановлюємо початкове запитання
updateUI(data.langPrompt);

// 6. Обробник подій для кнопки
submitBtn.addEventListener('click', handleSubmit);
// Додаємо обробку натискання Enter
inputEl.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        handleSubmit();
    }
});

function handleSubmit() {
    const value = inputEl.value;

    if (currentState === 'lang') {
        const lang = value.toLowerCase();
        
        if (lang === 'ua' || lang === 'en') {
            selectedLangData = data[lang];
            currentState = 'day';
            updateUI(selectedLangData.prompt); // Оновлюємо текст запитання
        } else {
            resultTextEl.textContent = data.langError; // Помилка мови
            resultTextEl.style.color = 'red';
        }

    } else if (currentState === 'day') {
        const dayNum = parseInt(value);
        
        if (!isNaN(dayNum) && dayNum >= 1 && dayNum <= 7) {
            // Успіх!
            const dayName = selectedLangData.days[dayNum - 1];
            updateUI(`Результат:`, false, false);
            resultTextEl.textContent = dayName;
            resultTextEl.style.color = 'green';
            
            // Блокуємо подальший ввід
            currentState = 'done';
            inputEl.disabled = true;
            submitBtn.disabled = true;
        } else {
            // Помилка дня
            resultTextEl.textContent = selectedLangData.error;
            resultTextEl.style.color = 'red';
        }
    }
}