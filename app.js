const express = require('express');
const http = require("http");
const app = express();
const port = 3001;
const path = require('path');

// Роути для веб-сторінок
app.get('/', (req, res) => {
    res.send('Головна сторінка');
});

app.get('/task1', (req, res) => {

});

app.get('/task2', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'task2.html'));
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Сервер запущено на http://localhost:${port}`);
});
