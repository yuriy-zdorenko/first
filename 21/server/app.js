const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/calculate', (req, res) => {
    const number = req.body.number;
    const square = number * number;
    res.json({ square: square });
});

app.listen(port, () => {
    console.log(`Сервер запущено на порті ${port}`);
});
