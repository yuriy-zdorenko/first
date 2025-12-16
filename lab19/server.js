const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static(__dirname));
app.use(express.json());

app.post('/square', (req, res) => {
  const num = Number(req.body.number);
  const square = num * num;
  res.json({ square });
});

app.listen(PORT, () => {
  console.log(`Сервер працює на http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
    res.redirect('/StefanovychLab19.html');
  });
  
