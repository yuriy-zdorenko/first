// 1. Знаходимо наш контейнер
const resultsContainer = document.getElementById('results-container');

/**
 * Допоміжна функція для додавання результату на HTML-сторінку.
 * @param {string} title - Заголовок завдання (напр., "Завдання 1")
 * @param {string} content - Текст результату, який буде показано
 */
function addResult(title, content) {
    // Створюємо <div class="task-result">
    const taskDiv = document.createElement('div');
    taskDiv.className = 'task-result';
    
    // Створюємо <h3> (заголовок)
    const titleEl = document.createElement('h3');
    titleEl.textContent = title;
    
    // Створюємо <pre> (контент)
    const contentEl = document.createElement('pre');
    contentEl.textContent = content; // .textContent безпечно вставляє текст
    
    // Збираємо все разом
    taskDiv.appendChild(titleEl);
    taskDiv.appendChild(contentEl);
    resultsContainer.appendChild(taskDiv);
}

// --------------------------------------------------
// --- РІШЕННЯ ЗАВДАНЬ ---
// --------------------------------------------------

// --- Завдання 1 ---
function seconds(total) {
  return total % 60;
}
addResult(
    'Завдання 1: Залишок секунд',
    `seconds(125): ${seconds(125)}\nseconds(60): ${seconds(60)}`
);

// --- Завдання 2 ---
function perimeter(side, count) {
  return side * count;
}
addResult(
    'Завдання 2: Периметр',
    `perimeter(10, 4): ${perimeter(10, 4)}\nperimeter(5, 6): ${perimeter(5, 6)}`
);

// --- Завдання 3 ---
function fizzbuzz(n) {
  let output = ''; // Збираємо результат у цей рядок
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      output += 'fizzbuzz\n';
    } else if (i % 3 === 0) {
      output += 'fizz\n';
    } else if (i % 5 === 0) {
      output += 'buzz\n';
    } else {
      output += `${i}\n`;
    }
  }
  return output; // Повертаємо готовий рядок
}
addResult('Завдання 3: FizzBuzz(15)', fizzbuzz(15));

// --- Завдання 4 ---
function Calculate(a, b, c) {
  const avg = (a + b + c) / 3;
  return `Середнє арифметичне ${a}, ${b}, ${c} = ${avg}`;
}
addResult(
    'Завдання 4: Середнє арифметичне',
    `${Calculate(10, 20, 30)}\n${Calculate(5, 6, 7)}`
);

// --- Завдання 5 ---
function isDivisible_if(n, x, y) {
  if (n % x === 0 && n % y === 0) return true;
  else return false;
}
function isDivisible_ternary(n, x, y) {
  return (n % x === 0 && n % y === 0) ? true : false;
}
function isDivisible_logical(n, x, y) {
  return (n % x === 0 && n % y === 0);
}
addResult(
    'Завдання 5: Чи ділиться?',
    `isDivisible_if(10, 2, 5): ${isDivisible_if(10, 2, 5)}\n` +
    `isDivisible_ternary(9, 2, 3): ${isDivisible_ternary(9, 2, 3)}\n` +
    `isDivisible_logical(12, 3, 4): ${isDivisible_logical(12, 3, 4)}`
);

// --- Завдання 6 ---
function analyzeArray(N) {
  let arr = [];
  for (let i = 0; i < N; i++) {
    arr.push(Math.floor(Math.random() * 100) + 1);
  }
  
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const sum = arr.reduce((acc, val) => acc + val, 0);
  const avg = sum / arr.length;
  const odds = arr.filter(val => val % 2 !== 0);

  // Збираємо вивід у один рядок
  let output = `Згенерований масив: [${arr.join(', ')}]\n\n`;
  output += `Найбільше значення: ${max}\n`;
  output += `Найменше значення: ${min}\n`;
  output += `Загальна сума: ${sum}\n`;
  output += `Середнє арифметичне: ${avg}\n`;
  output += `Непарні значення: [${odds.join(', ')}]`;
  return output;
}
addResult('Завдання 6: Аналіз масиву (N=10)', analyzeArray(10));

// --- Завдання 7 ---
// Допоміжна функція для "малювання" матриці
function formatMatrix(matrix) {
    return matrix.map(row => 
        // .map(n => n.toString().padStart(3, ' ')) // робить стовпці рівними
        row.map(n => n.toString().padStart(3, ' ')).join('  ')
    ).join('\n');
}

function createAndModifyMatrix() {
  let matrix = [];
  for (let i = 0; i < 5; i++) {
    let row = [];
    for (let j = 0; j < 5; j++) {
      row.push(Math.floor(Math.random() * 21) - 10);
    }
    matrix.push(row);
  }

  let output = 'Початкова матриця:\n';
  output += formatMatrix(matrix) + '\n\n';

  for (let i = 0; i < 5; i++) {
    if (matrix[i][i] < 0) matrix[i][i] = 0;
    else if (matrix[i][i] > 0) matrix[i][i] = 1;
  }

  output += 'Модифікована матриця:\n';
  output += formatMatrix(matrix);
  return output;
}
addResult('Завдання 7: Матриця 5x5', createAndModifyMatrix());


// --- Завдання 8 ---
function Add(a, b) { return `Додавання: ${a + b}`; }
function Sub(a, b) { return `Віднімання: ${a - b}`; }
function Mul(a, b) { return `Множення: ${a * b}`; }
function Div(a, b) {
  if (b === 0) return 'Ділення: Помилка! Ділення на нуль.';
  return `Ділення: ${a / b}`;
}
addResult(
    'Завдання 8: Арифметика',
    `${Add(20, 10)}\n${Sub(20, 10)}\n${Mul(20, 10)}\n${Div(20, 10)}\n${Div(20, 0)}`
);

// --- Завдання 9 ---
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
function analyzeNumber(num) {
  let output = `--- Аналіз числа ${num} ---\n`;
  if (num > 0) output += 'Число позитивне\n';
  else if (num < 0) output += 'Число негативне\n';
  else output += 'Число - нуль\n';

  output += isPrime(num) ? 'Число просте\n' : 'Число не просте (складене)\n';

  [2, 5, 3, 6, 9].forEach(divisor => {
    if (num % divisor === 0) {
      output += `Число ділиться на ${divisor} без залишку\n`;
    }
  });
  return output.trim(); // .trim() прибирає зайвий перенос рядка вкінці
}
addResult(
    'Завдання 9: Аналіз числа',
    `${analyzeNumber(25)}\n\n${analyzeNumber(17)}\n\n${analyzeNumber(18)}`
);


// --- Завдання 10 ---
function reverseAndSquare(arr) {
  let initial = `Початковий масив: [${arr.map(JSON.stringify).join(', ')}]\n`;
  
  let reversedArr = arr.slice().reverse(); 
  let resultArr = reversedArr.map(item => {
    if (typeof item === 'number') return item * item;
    return item;
  });
  
  let result = `Результат: [${resultArr.map(JSON.stringify).join(', ')}]`;
  return initial + result;
}
addResult(
    'Завдання 10: Перевернутий масив',
    reverseAndSquare([1, 'a', 3, 'hello', 5, {id: 1}, null, 0.5])
);

// --- Завдання 11 ---
function removeDuplicates(arr) {
  let initial = `Початковий масив: [${arr.join(', ')}]\n`;
  let uniqueArr = [...new Set(arr)];
  let result = `Масив без дублікатів: [${uniqueArr.join(', ')}]`;
  return initial + result;
}
addResult(
    'Завдання 11: Видалення дублікатів',
    removeDuplicates([1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6])
);