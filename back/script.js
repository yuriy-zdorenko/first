const express = require('express')
const cors = require('cors')

const app = express()
const port = 3000
app.use(express.json())
app.use(cors())

app.post('/calculate', (req, res) => {
  console.log(req.body)

  if (!req.body.number) {
    res.status(400).json({ message: 'Введіть число' })
  }

  res.json({ message: req.body.number ** 2 })
})

app.listen(port, () => {
  console.log(`Сервер запущено на порті ${port}`)
})
