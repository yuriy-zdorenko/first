document.body.style.margin = "0px";
document.body.style.color = "white";

let container = document.createElement("div");
container.className = "con";
container.style.backgroundColor = "black";
container.style.height = "100vh";
container.style.width = "800px";
container.style.margin = "0 auto";
document.body.appendChild(container);

let mainDiv = document.createElement("div");
mainDiv.className = "main";
mainDiv.style.height = "100vh";
mainDiv.style.width = "800px";
mainDiv.style.margin = "0 auto";
container.appendChild(mainDiv);

let inp = document.createElement("input");
inp.style.color = "white";
inp.value = "0"
inp.style.backgroundColor = "black";
inp.style.fontSize = "100px";
inp.style.border = "none";
inp.style.outline = "none"; 
inp.style.width = "99%";
inp.style.textAlign = "right"; 
mainDiv.appendChild(inp);

let buttonsContainer = document.createElement("div");
buttonsContainer.style.display = "grid";
buttonsContainer.style.gridTemplateColumns = "repeat(4, 1fr)";
buttonsContainer.style.gap = "10px";
buttonsContainer.style.marginTop = "20px";
buttonsContainer.style.height = "80vh";

let buttons = [
    "AC", "\u00b1", "%", "\u00f7",
    "7", "8", "9", "\u00d7",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", ".", "=", 
];

buttons.forEach(text => {
    let button = document.createElement("button");
    button.textContent = text;
    button.style.width = "100%";
    button.style.height = "90px";
    button.style.fontSize = "28px";
    button.style.border = "none";
    button.style.borderRadius = "100px";
    button.style.cursor = "pointer";
    if(text === "AC" || text === "\u00b1" || text === "%"){
        button.style.backgroundColor = "gray";
    }else if(text === "\u00f7" || text === "\u00d7" || text === "-" || text === "+" || text === "="){
        button.style.backgroundColor = "orange";
    }else{
        button.style.backgroundColor = "#333";
    }
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
        } else if(text ==="\u00b1") {
            inp.value = inp.value * (-1);
        } else {
            if(inp.value === '0'){
                inp.value = text;
            }else{
                inp.value += text;
            }
        }
    });

    buttonsContainer.appendChild(button);
});

mainDiv.appendChild(buttonsContainer);
//адаптація
function adjustButtonSize() {
    let screenWidth = window.innerWidth;
    if (screenWidth < 600) {
        inp.style.fontSize = "2rem";
        document.querySelectorAll("button").forEach(btn => {
            btn.style.height = "50px";
            btn.style.fontSize = "1.2rem";
        });
    } else {
        inp.style.fontSize = "3rem";
        document.querySelectorAll("button").forEach(btn => {
            btn.style.height = "70px";
            btn.style.fontSize = "1.5rem";
        });
    }
}

window.addEventListener("resize", adjustButtonSize);
adjustButtonSize();