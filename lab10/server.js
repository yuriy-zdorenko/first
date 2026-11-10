// Кожна раніше створена сторінка має окремий роут.
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const PUBLIC = path.join(__dirname, 'public');

// Роути для сторінок
app.get('/', (req, res) => res.sendFile(path.join(PUBLIC, 'index.html')));
app.get('/float', (req, res) => res.sendFile(path.join(PUBLIC, 'float.html')));
app.get('/flex', (req, res) => res.sendFile(path.join(PUBLIC, 'flex.html')));
app.get('/grid', (req, res) => res.sendFile(path.join(PUBLIC, 'grid.html')));

// 404 для всіх інших адрес
app.use((req, res) => {
  res.status(404).send('<h1>404</h1><p>Сторінку не знайдено. <a href="/">На головну</a></p>');
});

app.listen(PORT, () => {
  console.log(`Сервер запущено: http://localhost:${PORT}`);
});
