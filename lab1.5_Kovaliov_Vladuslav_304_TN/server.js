const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname)); 

app.post('/square', (req, res) => {
  const number = parseFloat(req.body.number);
  const square = number * number;
  res.send(`${square}`);
});

app.listen(PORT, () => {
  console.log(`Сервер запущено: http://localhost:${PORT}`);
});
