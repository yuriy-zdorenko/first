const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// 1. Вказуємо, що статичні файли (CSS, IMG) лежать у папці "Lab_25"
app.use(express.static(path.join(__dirname, 'Lab_25')));

// 2. Створюємо роут для сторінки фільму
app.get('/film', (req, res) => {
  // Вказуємо повний шлях до файлу
  res.sendFile(path.join(__dirname, 'Lab_25', 'font','film.html'));
});

// 3. Створюємо роут для сторінки книги
app.get('/book', (req, res) => {
  // Вказуємо повний шлях до файлу
  res.sendFile(path.join(__dirname, 'Lab_25', 'font', 'book.html'));
});

// 4. (Опційно) Головна сторінка
app.get('/', (req, res) => {
  res.send('<h1>Головна сторінка</h1><a href="/film">Фільм</a> | <a href="/book">Книга</a>');
});

// 5. Запускаємо сервер
app.listen(PORT, () => {
  console.log(`Сервер запущено на http://localhost:${PORT}`);
});