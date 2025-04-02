const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public')) // для обслуживания HTML файлов

app.get('/calculate-square', (req, res) => {
  let number = parseInt(req.query.number)
  if (isNaN(number)) {
    return res.status(400).json({ error: 'Неверное число' })
  }
  let square = number * number
  res.json({ square: square })
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
