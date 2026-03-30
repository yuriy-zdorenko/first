// головний контейнер
const backFon = document.createElement("div");
backFon.style.backgroundColor = "black";
backFon.style.padding = "20px";
backFon.style.borderRadius = "20px";
backFon.style.width = "90%";       
backFon.style.maxWidth = "400px";  
backFon.style.margin = "0 auto";   
backFon.style.display = "flex";
backFon.style.flexDirection = "column";
backFon.style.gap = "15px";
document.body.append(backFon);

// (input)
const myInput = document.createElement("input");
myInput.type = "text";
myInput.value = "0";
myInput.style.backgroundColor = "transparent";
myInput.style.color = "white";
myInput.style.border = "none";
myInput.style.fontSize = "60px";
myInput.style.textAlign = "right";
myInput.style.width = "100%";
myInput.style.outline = "none";
myInput.readOnly = true;
backFon.append(myInput);

// сітка для кнопок
const grid = document.createElement("div");
grid.style.display = "grid";
grid.style.gridTemplateColumns = "repeat(4, 1fr)"; // 4 колонки
grid.style.gap = "12px";
backFon.append(grid);

// Масив кнопок 
const buttons = [
    { text: "AC", color: "#a5a5a5", textColor: "black" }, { text: "+/-", color: "#a5a5a5", textColor: "black" }, { text: "%", color: "#a5a5a5", textColor: "black" }, { text: "÷", color: "#ff9f0a", textColor: "white" },
    { text: "7", color: "#333333", textColor: "white" }, { text: "8", color: "#333333", textColor: "white" }, { text: "9", color: "#333333", textColor: "white" }, { text: "×", color: "#ff9f0a", textColor: "white" },
    { text: "4", color: "#333333", textColor: "white" }, { text: "5", color: "#333333", textColor: "white" }, { text: "6", color: "#333333", textColor: "white" }, { text: "-", color: "#ff9f0a", textColor: "white" },
    { text: "1", color: "#333333", textColor: "white" }, { text: "2", color: "#333333", textColor: "white" }, { text: "3", color: "#333333", textColor: "white" }, { text: "+", color: "#ff9f0a", textColor: "white" },
    { text: "0", color: "#333333", textColor: "white", wide: true }, { text: ".", color: "#333333", textColor: "white" }, { text: "=", color: "#ff9f0a", textColor: "white" }
];

buttons.forEach(btn => {
    const b = document.createElement("button");
    b.textContent = btn.text;
    b.style.backgroundColor = btn.color;
    b.style.color = btn.textColor;
    b.style.height = "70px";
    b.style.borderRadius = "35px";
    b.style.border = "none";
    b.style.fontSize = "24px";
    b.style.cursor = "pointer";
    b.style.fontWeight = "500";

    
    if (btn.wide) {
        b.style.gridColumn = "span 2";
        b.style.textAlign = "left";
        b.style.paddingLeft = "30px";
    }

    //обробник натискання
    b.addEventListener("click", () => {
        handleInput(btn.text);
    });

    grid.append(b);
});

// Логіка обробки натискань
function handleInput(key) {
    if (key === "AC") {
        myInput.value = "0";
    } 
    else if (key === "=") {
        try {
            
            let expression = myInput.value.replace("×", "*").replace("÷", "/");
            myInput.value = eval(expression); 
        } catch {
            myInput.value = "Error";
        }
    } 
    else {
        if (myInput.value === "0") {
            myInput.value = key;
        } else {
            myInput.value += key;
        }
    }
}

function resizeCalc() {
    if (window.innerWidth < 480) {
        backFon.style.width = "70%";
        backFon.style.height = "100%";
    } else {
        backFon.style.width = "320px";
        backFon.style.height = "auto";
    }
}

window.addEventListener('resize', resizeCalc);
resizeCalc(); 