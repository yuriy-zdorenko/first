const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/calculate-square', (req, res) => {
    const number = req.body.number;
    const square = Math.pow(number, 2);
    res.json({ square: square });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
