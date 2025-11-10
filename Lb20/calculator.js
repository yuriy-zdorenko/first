// Стан калькулятора
let currentValue = '0';
let previousValue = null;
let operation = null;
let shouldResetDisplay = false;

// Створення елементів DOM
function createCalculator() {
    // Стилі для body
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.height = '100vh';
    document.body.style.display = 'flex';
    document.body.style.justifyContent = 'center';
    document.body.style.alignItems = 'center';
    document.body.style.backgroundColor = '#4b3b3bff';
    document.body.style.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';

    // Контейнер калькулятора
    const calculator = document.createElement('div');
    calculator.id = 'calculator';
    calculator.style.width = '100%';
    calculator.style.maxWidth = '400px';
    calculator.style.backgroundColor = '#4a3434ff';
    calculator.style.borderRadius = '20px';
    calculator.style.padding = '20px';
    calculator.style.boxSizing = 'border-box';

    // Дисплей
    const display = document.createElement('div');
    display.id = 'display';
    display.textContent = '0';
    display.style.color = '#3d574cff';
    display.style.fontSize = '80px';
    display.style.fontWeight = '200';
    display.style.textAlign = 'right';
    display.style.padding = '20px';
    display.style.marginBottom = '10px';
    display.style.minHeight = '100px';
    display.style.display = 'flex';
    display.style.alignItems = 'center';
    display.style.justifyContent = 'flex-end';
    display.style.wordBreak = 'break-all';

    // Сітка кнопок
    const buttonGrid = document.createElement('div');
    buttonGrid.style.display = 'grid';
    buttonGrid.style.gridTemplateColumns = 'repeat(4, 1fr)';
    buttonGrid.style.gap = '12px';

    // Визначення кнопок
    const buttons = [
        { text: 'AC', type: 'function', col: 1 },
        { text: '+/-', type: 'function', col: 1 },
        { text: '%', type: 'function', col: 1 },
        { text: '÷', type: 'operator', col: 1 },

        { text: '7', type: 'number', col: 1 },
        { text: '8', type: 'number', col: 1 },
        { text: '9', type: 'number', col: 1 },
        { text: '×', type: 'operator', col: 1 },

        { text: '4', type: 'number', col: 1 },
        { text: '5', type: 'number', col: 1 },
        { text: '6', type: 'number', col: 1 },
        { text: '−', type: 'operator', col: 1 },

        { text: '1', type: 'number', col: 1 },
        { text: '2', type: 'number', col: 1 },
        { text: '3', type: 'number', col: 1 },
        { text: '+', type: 'operator', col: 1 },

        { text: '0', type: 'number', col: 2 },
        { text: '.', type: 'number', col: 1 },
        { text: '=', type: 'operator', col: 1 }
    ];

    // Створення кнопок
    buttons.forEach(btn => {
        const button = document.createElement('button');
        button.textContent = btn.text;
        button.className = btn.type;

        // Базові стилі кнопки
        button.style.border = 'none';
        button.style.borderRadius = '50%';
        button.style.fontSize = '32px';
        button.style.fontWeight = '400';
        button.style.cursor = 'pointer';
        button.style.transition = 'all 0.2s';
        button.style.height = '80px';
        button.style.outline = 'none';

        // Колір залежно від типу
        if (btn.type === 'operator') {
            button.style.backgroundColor = '#ff9f0a';
            button.style.color = '#fff';
        } else if (btn.type === 'function') {
            button.style.backgroundColor = '#a5a5a5';
            button.style.color = '#000';
        } else {
            button.style.backgroundColor = '#333';
            button.style.color = '#fff';
        }

        // Кнопка 0 займає 2 колонки
        if (btn.text === '0') {
            button.style.gridColumn = 'span 2';
            button.style.borderRadius = '40px';
            button.style.textAlign = 'left';
            button.style.paddingLeft = '32px';
        }

        // Hover ефект
        button.addEventListener('mouseenter', () => {
            button.style.opacity = '0.8';
        });

        button.addEventListener('mouseleave', () => {
            button.style.opacity = '1';
        });

        // Active ефект
        button.addEventListener('mousedown', () => {
            button.style.transform = 'scale(0.95)';
        });

        button.addEventListener('mouseup', () => {
            button.style.transform = 'scale(1)';
        });

        // Обробник кліку
        button.addEventListener('click', () => handleButtonClick(btn.text));

        buttonGrid.appendChild(button);
    });

    calculator.appendChild(display);
    calculator.appendChild(buttonGrid);
    document.body.appendChild(calculator);

    // Медіа-запити для адаптивності
    addResponsiveStyles();
}

// Адаптивні стилі
function addResponsiveStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @media (max-width: 480px) {
            #calculator {
                max-width: 100%;
                padding: 10px;
            }

            #display {
                font-size: 60px;
                padding: 15px;
                min-height: 80px;
            }

            .number, .function, .operator {
                height: 70px !important;
                font-size: 28px !important;
            }
        }

        @media (max-width: 360px) {
            #display {
                font-size: 50px;
            }

            .number, .function, .operator {
                height: 60px !important;
                font-size: 24px !important;
            }
        }

        @media (min-width: 768px) {
            #calculator {
                max-width: 450px;
            }

            #display {
                font-size: 90px;
            }

            .number, .function, .operator {
                height: 90px !important;
                font-size: 36px !important;
            }
        }
    `;
    document.head.appendChild(style);
}

// Оновлення дисплею
function updateDisplay() {
    const display = document.getElementById('display');
    const value = parseFloat(currentValue);

    // Форматування числа
    if (currentValue.includes('.') && !currentValue.endsWith('.')) {
        display.textContent = parseFloat(currentValue).toLocaleString('en-US', {
            maximumFractionDigits: 8
        }).replace(/,/g, ' ');
    } else {
        display.textContent = currentValue;
    }

    // Адаптивний розмір шрифту
    const length = display.textContent.length;
    if (length > 8) {
        display.style.fontSize = '50px';
    } else if (length > 6) {
        display.style.fontSize = '60px';
    } else {
        display.style.fontSize = '80px';
    }
}

// Обробка натискання кнопок
function handleButtonClick(value) {
    switch (value) {
        case 'AC':
            currentValue = '0';
            previousValue = null;
            operation = null;
            shouldResetDisplay = false;
            break;

        case '+/-':
            if (currentValue !== '0') {
                currentValue = currentValue.startsWith('-')
                    ? currentValue.substring(1)
                    : '-' + currentValue;
            }
            break;

        case '%':
            currentValue = (parseFloat(currentValue) / 100).toString();
            break;

        case '.':
            if (shouldResetDisplay) {
                currentValue = '0.';
                shouldResetDisplay = false;
            } else if (!currentValue.includes('.')) {
                currentValue += '.';
            }
            break;

        case '÷':
        case '×':
        case '−':
        case '+':
            if (previousValue !== null && !shouldResetDisplay) {
                calculate();
            }
            previousValue = parseFloat(currentValue);
            operation = value;
            shouldResetDisplay = true;
            break;

        case '=':
            if (operation && previousValue !== null) {
                calculate();
                operation = null;
                previousValue = null;
            }
            break;

        default:
            // Числа
            if (shouldResetDisplay) {
                currentValue = value;
                shouldResetDisplay = false;
            } else {
                currentValue = currentValue === '0' ? value : currentValue + value;
            }
    }

    updateDisplay();
}

// Виконання обчислення
function calculate() {
    const prev = previousValue;
    const current = parseFloat(currentValue);
    let result;

    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '−':
            result = prev - current;
            break;
        case '×':
            result = prev * current;
            break;
        case '÷':
            result = current !== 0 ? prev / current : 0;
            break;
        default:
            return;
    }

    currentValue = result.toString();
    shouldResetDisplay = true;
}

// Підтримка клавіатури
document.addEventListener('keydown', (e) => {
    const key = e.key;

    if (key >= '0' && key <= '9') {
        handleButtonClick(key);
    } else if (key === '.') {
        handleButtonClick('.');
    } else if (key === '+') {
        handleButtonClick('+');
    } else if (key === '-') {
        handleButtonClick('−');
    } else if (key === '*') {
        handleButtonClick('×');
    } else if (key === '/') {
        e.preventDefault();
        handleButtonClick('÷');
    } else if (key === 'Enter' || key === '=') {
        handleButtonClick('=');
    } else if (key === 'Escape') {
        handleButtonClick('AC');
    } else if (key === '%') {
        handleButtonClick('%');
    }
});

// Ініціалізація при завантаженні
window.addEventListener('DOMContentLoaded', createCalculator);
