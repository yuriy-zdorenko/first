const express = require("express")
const lab = express()

lab.get("/", (req, res) => {
    res.sendFile(__dirname + "/home.htm")
})

lab.get("/float", (req, res) => {
    res.sendFile(__dirname + "/VolkovLabFloat.htm")
})

lab.get("/flexbox", (req, res) => {
    res.sendFile(__dirname + "/VolkovLabFlexbox.htm")
})

lab.get("/grid", (req, res) => {
    res.sendFile(__dirname + "/VolkovLabGrid.htm")
})

const PORT = 3000
lab.listen(PORT, () => {
    console.log(`Server started: http://localhost:${PORT}`)
})