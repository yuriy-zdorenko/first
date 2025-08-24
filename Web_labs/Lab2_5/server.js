const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Markov_Ivan_302_tn_Lab2_5.html'));
});

app.post('/square', (req, res) => {
    const number = parseFloat(req.body.number);

    if (isNaN(number)) {
        return res.status(400).json({ error: 'Невірне число' });
    }

    const square = number * number;
    res.json({ square });
});

app.listen(port, () => {
    console.log(`Сервер працює на http://localhost:${port}`);
});