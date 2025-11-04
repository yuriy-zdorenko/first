const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;


app.use(express.static(path.join(__dirname, 'public')));


app.use('/scripts', express.static(path.join(__dirname, 'node_modules/jquery/dist')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.get('/game', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'game.html'));
});

app.listen(PORT, () => {
    console.log(`Сервер запущено. Відкрийте http://localhost:${PORT} у вашому браузері.`);
});