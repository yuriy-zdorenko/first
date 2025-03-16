const express = require("express");
const path = require('path'); 
const app = express(); 

app.use(express.static(path.join(__dirname, 'public')));

app.get("*", (req, res) => { 
    res.sendFile(path.join(__dirname, 'public', 'RadchenkoLab10-1.html'));
  }); 

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});