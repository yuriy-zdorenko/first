const express = require("express")
const lab = express()

lab.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.htm")
})

lab.get("/14.1", (req, res) => {
    res.sendFile(__dirname + "/VolkovLab14-1.html")
})

lab.get("/14.2", (req, res) => {
    res.sendFile(__dirname + "/VolkovLab14-2.html")
})

const PORT = 3000
lab.listen(PORT, () => {
    console.log(`Server started: http://localhost:${PORT}`)
})