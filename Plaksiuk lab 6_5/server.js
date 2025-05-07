const express = require("express")
const cors = require("cors")

let app = express()
app.use(express.json())
app.use(cors())

app.post("/calculation", (req, res) => {
    let { number } = req.body
    const sum = number * number
    res.json({sum})
})

app.listen(3000)