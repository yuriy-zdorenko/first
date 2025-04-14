document.body.style.margin = "0px";
document.body.style.color = "white";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.height = "100vh";
document.body.style.backgroundColor = "#1a1a1a";

document.body.innerHTML = `
    <div class="calculator">
        <input type="text" class="display" value="0" readonly />
        <div class="buttons">
            <button class="btn gray">AC</button>
            <button class="btn gray">±</button>
            <button class="btn gray">%</button>
            <button class="btn orange">÷</button>
            <button class="btn">7</button>
            <button class="btn">8</button>
            <button class="btn">9</button>
            <button class="btn orange">×</button>
            <button class="btn">4</button>
            <button class="btn">5</button>
            <button class="btn">6</button>
            <button class="btn orange">-</button>
            <button class="btn">1</button>
            <button class="btn">2</button>
            <button class="btn">3</button>
            <button class="btn orange">+</button>
            <button class="btn zero">0</button>
            <button class="btn">.</button>
            <button class="btn orange">=</button>
        </div>
    </div>
`;

document.head.innerHTML += `
    <style>
        .calculator {
            width: 90%;
            max-width: 400px;
            background: #2c2c2c;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
        }
        .display {
            width: 100%;
            height: 80px;
            background: #3a3a3a;
            color: white;
            font-size: 2rem;
            text-align: right;
            border: none;
            outline: none;
            padding: 10px;
            border-radius: 5px;
        }
        .buttons {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
            margin-top: 15px;
        }
        .btn {
            height: 60px;
            font-size: 1.5rem;
            background: #4a4a4a;
            color: white;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            transition: background 0.2s;
        }
        .btn:active {
            background: #666;
        }
        .gray { background: #888; }
        .orange { background: #ff6600; color: white; }
        .zero { grid-column: span 2; }
    </style>
`;

const display = document.querySelector(".display");
document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", () => {
        const text = button.textContent;
        if (text === "AC") {
            display.value = "0";
        } else if (text === "=") {
            try {
                display.value = eval(display.value.replace("×", "*").replace("÷", "/"));
            } catch {
                display.value = "Помилка!";
            }
        } else if (text === "±") {
            display.value = display.value * (-1);
        } else {
            display.value = display.value === "0" ? text : display.value + text;
        }
    });
});
