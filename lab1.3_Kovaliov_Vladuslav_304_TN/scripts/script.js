const calculator = document.createElement("div");
calculator.style.position = "absolute";
calculator.style.top = "50%";
calculator.style.left = "50%";
calculator.style.transform = "translate(-50%, -50%)";
calculator.style.width = "300px";
calculator.style.background = "black";
calculator.style.padding = "20px";
calculator.style.borderRadius = "15px";
calculator.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
document.body.appendChild(calculator);

const display = document.createElement("div");
display.style.width = "90%";
display.style.height = "80px";
display.style.background = "black";
display.style.color = "white";
display.style.textAlign = "right";
display.style.fontSize = "36px";
display.style.lineHeight = "80px";
display.style.padding = "0 20px";
display.innerText = "0";
calculator.appendChild(display);

const buttons = [
    "AC", "\u00B1", "%", "/",
    "7", "8", "9", "*",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", ".", "=",
];

const buttonsContainer = document.createElement("div");
buttonsContainer.style.display = "grid";
buttonsContainer.style.gridTemplateColumns = "repeat(4, 1fr)";
buttonsContainer.style.gap = "10px";
buttonsContainer.style.marginTop = "20px";
calculator.appendChild(buttonsContainer);

let currentExpression = "";

buttons.forEach(text => {
    const button = document.createElement("button");
    button.innerText = text;
    button.style.width = "100%";
    button.style.height = "60px";
    button.style.fontSize = "24px";
    button.style.border = "none";
    button.style.borderRadius = "100%";
    button.style.background = ["/", "*", "-", "+", "="] .includes(text) ? "#FFA500" : "#333";
    button.style.color = "white";
    button.addEventListener("click", () => handleInput(text));
    buttonsContainer.appendChild(button);
});

function safeEvaluate(expression) {
    try {
        return Function(`'use strict'; return (${expression})`)();
    } catch {
        return "Error";
    }
}

function handleInput(value) {
    if (value === "AC") {
        currentExpression = "";
    } else if (value === "=") {
        currentExpression = safeEvaluate(currentExpression).toString();
    } else if (value === "\u00B1") {
        currentExpression = currentExpression ? `(-(${currentExpression}))` : "";
    } else if (value === "%") {
        currentExpression += "/100";
    } else {
        currentExpression += value;
    }
    display.innerText = currentExpression || "0";
}
