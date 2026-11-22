const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send(`
        <h2>Лабораторна робота 10 </h2>
        <ul>
            <li><a href="/float">Варіант 1: Float</a></li>
            <li><a href="/flex">Варіант 2: Flexbox</a></li>
            <li><a href="/grid">Варіант 3: Grid</a></li>
        </ul>
    `);
});

// Окремі роути для кожної веб-сторінки
app.get('/float', (req, res) => {
    res.sendFile(path.join(__dirname, 'float.html'));
});

app.get('/flex', (req, res) => {
    res.sendFile(path.join(__dirname, 'flex.html'));
});

app.get('/grid', (req, res) => {
    res.sendFile(path.join(__dirname, 'grid.html'));
});

app.listen(PORT, () => {
    console.log(`Сервер працює: http://localhost:${PORT}`);
});