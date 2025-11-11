const express = require('express');
const cors = require('cors'); // Додаємо 'cors' для дозволу запитів з браузера
const app = express();
const port = 3000;

// Вмикаємо CORS (Cross-Origin Resource Sharing)
// Це необхідно, щоб ваш index.html міг надсилати запити на цей сервер
app.use(cors());

// Створюємо маршрут (endpoint) для обробки AJAX-запитів
app.get('/calculate', (req, res) => {
    
    // 1. Отримання даних про число 
    const numberString = req.query.number;
    
    if (numberString === undefined) {
        // Відповідь з помилкою, якщо число не надано
        return res.status(400).json({ error: 'Параметр "number" відсутній' });
    }

    const number = parseFloat(numberString);

    if (isNaN(number)) {
        // Відповідь з помилкою, якщо це не число
        return res.status(400).json({ error: 'Надане значення не є числом' });
    }

    // 2. Обрахунок квадрату числа 
    const square = number * number;

    // 3. Надання відповіді 
    // Надсилаємо JSON-об'єкт з результатом
    res.json({
        original: number,
        result: square
    });
});

// Запускаємо сервер
app.listen(port, () => {
    console.log(`Сервер запущено. Слухає порт ${port}`);
    console.log(`Відкрийте http://localhost:${port} у браузері (але для тесту вам потрібен index.html)`);
});