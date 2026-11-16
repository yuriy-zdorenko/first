const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Головна сторінка зі посиланнями
app.get('/', (req, res) => {
    res.send(`
        <h1 style="font-family: sans-serif;">Лабораторна робота №10</h1>
        <p style="font-family: sans-serif;">Оберіть варіант верстки:</p>
        <ul style="font-family: sans-serif; line-height: 2;">
            <li><a href="/float">Float Layout</a></li>
            <li><a href="/flex">Flexbox Layout</a></li>
        </ul>
    `);
});

// Роут для Float сторінки
app.get('/float', (req, res) => {
    res.sendFile(path.join(__dirname, 'HlubokaLab10-float.html'));
});

// Роут для Flexbox сторінки
app.get('/flex', (req, res) => {
    res.sendFile(path.join(__dirname, 'HlubokaLab10-flex.html'));
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер успішно запущено на http://localhost:${PORT}`);
});