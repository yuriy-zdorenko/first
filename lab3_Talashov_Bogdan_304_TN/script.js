document.body.style.margin = "0px";
document.body.style.color = "white";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.height = "100vh";
document.body.style.backgroundColor = "white";


function adjustSize() {
    let screenWidth = window.innerWidth;
    let calcWidth, btnSize, fontSize;
    
    if (screenWidth >= 1200) {
        calcWidth = "400px";
        btnSize = "80px";
        fontSize = "28px";
    } else if (screenWidth >= 450 && screenWidth < 800) {
        calcWidth = "90%";
        btnSize = "70px";
        fontSize = "24px";
    } else {
        calcWidth = "95%";
        btnSize = "60px";
        fontSize = "20px";
    }
    
    container.style.width = calcWidth;
    mainDiv.style.width = calcWidth;
    inp.style.fontSize = fontSize;
    buttonsContainer.style.gap = "10px";
    
    document.querySelectorAll("button").forEach(button => {
        button.style.height = btnSize;
        button.style.fontSize = fontSize;
    });
}

let container = document.createElement("div");
container.className = "con";
container.style.backgroundColor = "black";
container.style.margin = "0 auto";
container.style.padding = "10px"
container.style.borderRadius = "25px";
document.body.appendChild(container);

let mainDiv = document.createElement("div");
mainDiv.className = "main";
container.appendChild(mainDiv);

let inp = document.createElement("input");
inp.style.color = "white";
inp.value = "0";
inp.style.backgroundColor = "black";
inp.style.border = "none";
inp.style.outline = "none";
inp.style.width = "99%";
inp.style.textAlign = "right";
mainDiv.appendChild(inp);

let buttonsContainer = document.createElement("div");
buttonsContainer.style.display = "grid";
buttonsContainer.style.gridTemplateColumns = "repeat(4, 1fr)";
buttonsContainer.style.marginTop = "20px";
mainDiv.appendChild(buttonsContainer);

let buttons = [
    "AC", "±", "%", "÷",
    "7", "8", "9", "×",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", ".", "="
];

buttons.forEach(text => {
    let button = document.createElement("button");
    button.textContent = text;
    button.style.border = "none";
    button.style.borderRadius = "100px";
    button.style.cursor = "pointer";
    button.style.backgroundColor =
        text === "AC" || text === "±" || text === "%" ? "gray" :
        text === "÷" || text === "×" || text === "-" || text === "+" || text === "=" ? "orange" : "#333";
    button.style.color = "white";

    if (text === "0") {
        button.style.gridColumn = "span 2";
    }

    button.addEventListener("click", () => {
        if (text === "AC") {
            inp.value = "0";
        } else if (text === "=") {
            try {
                inp.value = eval(inp.value.replace("\u00d7", "*").replace("\u00f7", "/"));
            } catch {
                inp.value = "Помилка!";
            }
        } else if (text === "±") {
            inp.value = inp.value * (-1);
        } else {
            inp.value = inp.value === "0" ? text : inp.value + text;
        }
    });

    buttonsContainer.appendChild(button);
});

window.addEventListener("resize", adjustSize);
adjustSize();
