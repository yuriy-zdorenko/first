// 1. Функція, яка повертає залишок від ділення на 60
function seconds(total) {
    return total % 60;
}

// 2. Функція, яка обчислює периметр правильного багатокутника
function perimeter(side, count) {
    return side * count;
}

// 3. Функція, яка виводить числа від 1 до n замість чисел, кратних 3 - 'fizz', кратних 5 - 'buzz', кратних як 3, так і 5 - 'fizzbuzz'
function fizzbuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz');
        } else if (i % 3 === 0) {
            console.log('fizz');
        } else if (i % 5 === 0) {
            console.log('buzz');
        } else {
            console.log(i);
        }
    }
}

// 4. Функція, яка обчислює середнє арифметичне трьох чисел і виводить його на екран
function Calculate(a, b, c) {
    let average = (a + b + c) / 3;
    console.log('Середнє арифметичне:', average);
}

// 5. Функція, яка перевіряє, чи ділиться число n на два числа x і y
function isDivisible(n, x, y) {
    return n % x === 0 && n % y === 0;
}

// 6. Функція, яка виконує операції над масивом: знаходить максимальне, мінімальне значення, суму елементів, середнє арифметичне і виводить непарні значення
function arrayOperations(arr) {
    let maxVal = Math.max(...arr);
    let minVal = Math.min(...arr);
    let sum = arr.reduce((acc, curr) => acc + curr, 0);
    let average = sum / arr.length;

    console.log('Максимальне значення:', maxVal);
    console.log('Мінімальне значення:', minVal);
    console.log('Сума елементів:', sum);
    console.log('Середнє арифметичне:', average);

    let oddValues = arr.filter(num => num % 2 !== 0);
    console.log('Непарні значення:', oddValues);
}

// 7. Функція, яка замінює значення на головній діагоналі матриці: (-) на 0, (+) на 1
function replaceDiagonal(matrix) {
    let n = matrix.length;
    for (let i = 0; i < n; i++) {
        if (matrix[i][i] < 0) {
            matrix[i][i] = 0;
        } else if (matrix[i][i] > 0) {
            matrix[i][i] = 1;
        }
    }
    return matrix;
}

// 8. Функції для арифметичних операцій: додавання, віднімання, множення, ділення (з перевіркою на нуль для ділення)
function Add(a, b) {
    let result = a + b;
    console.log(`${a} + ${b} = ${result}`);
}

function Sub(a, b) {
    let result = a - b;
    console.log(`${a} - ${b} = ${result}`);
}

function Mul(a, b) {
    let result = a * b;
    console.log(`${a} * ${b} = ${result}`);
}

function Div(a, b) {
    if (b === 0) {
        console.log("Ділення на нуль неможливе.");
    } else {
        let result = a / b;
        console.log(`${a} / ${b} = ${result}`);
    }
}

// 9. Функція, яка визначає характеристики числа: позитивне/негативне, просте, ділиться на 2, 5, 3, 6, 9 без залишку
function analyzeNumber(num) {
    let characteristics = [];

    // Визначення позитивне/негативне
    if (num > 0) {
        characteristics.push("позитивне");
    } else if (num < 0) {
        characteristics.push("негативне");
    } else {
        characteristics.push("нуль");
    }

    // Визначення чи є число простим
    if (num === 1) {
        characteristics.push("не є простим");
    } else if (num > 1) {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            characteristics.push("просте");
        } else {
            characteristics.push("не є простим");
        }
    }

    // Визначення, чи ділиться число на 2, 5, 3, 6, 9 без залишку
    let divisors = [2, 5, 3, 6, 9];
    for (let divisor of divisors) {
        if (num % divisor === 0) {
            characteristics.push(`ділиться на ${divisor}`);
        }
    }

    console.log(`Число ${num} є ${characteristics.join(", ")}.`);
}

// 10. Функція, яка повертає перевернутий масив з числовими значеннями, підносячи кожен елемент до квадрату
function reverseAndSquareArray(arr) {
    let reversedArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        if (typeof arr[i] === 'number') {
            reversedArray.push(arr[i] ** 2);
        } else {
            reversedArray.push(arr[i]);
        }
    }
    return reversedArray;
}

//11. Функція, яка видаляє дублікати з масиву
function removeDuplicates(arr) {
    return Array.from(new Set(arr));
}

