function print(message) {
    document.getElementById("output").innerHTML += `<div class="result">${message}</div>`;
    console.log(message);
  }

  function seconds(total) {
    return total % 60;
  }
  function runSeconds() {
    const total = parseInt(document.getElementById("inputSeconds").value);
    print("1. Seconds: " + seconds(total));
  }

  function perimeter(side, count) {
    return side * count;
  }
  function runPerimeter() {
    const side = parseInt(document.getElementById("inputSide").value);
    const count = parseInt(document.getElementById("inputCount").value);
    print("2. Perimeter: " + perimeter(side, count));
  }

  function fizzBuzz(n) {
    print("3. FizzBuzz:");
    for (let i = 1; i <= n; i++) {
      if (i % 15 === 0) print("fizzbuzz");
      else if (i % 3 === 0) print("fizz");
      else if (i % 5 === 0) print("buzz");
      else print(i);
    }
  }
  function runFizzBuzz() {
    const n = parseInt(document.getElementById("inputFizzBuzz").value);
    fizzBuzz(n);
  }

  function Calculate(a, b, c) {
    let avg = (a + b + c) / 3;
    print("4. Average: " + avg);
  }
  function runCalculate() {
    const a = parseInt(document.getElementById("inputA").value);
    const b = parseInt(document.getElementById("inputB").value);
    const c = parseInt(document.getElementById("inputC").value);
    Calculate(a, b, c);
  }

  function isDivisible_if(n, x, y) {
    if (n % x === 0 && n % y === 0) {
      print("5a. isDivisible (if): true");
    } else {
      print("5a. isDivisible (if): false");
    }
  }
  function isDivisible_ternary(n, x, y) {
    print("5b. isDivisible (ternary): " + ((n % x === 0 && n % y === 0) ? true : false));
  }
  function isDivisible_logical(n, x, y) {
    print("5c. isDivisible (logic only): " + (n % x === 0 && n % y === 0));
  }
  function runIsDivisible() {
    const n = parseInt(document.getElementById("inputN").value);
    const x = parseInt(document.getElementById("inputX").value);
    const y = parseInt(document.getElementById("inputY").value);
    isDivisible_if(n, x, y);
    isDivisible_ternary(n, x, y);
    isDivisible_logical(n, x, y);
  }

  function analyzeArray(arr) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let sum = arr.reduce((a, b) => a + b, 0);
    let avg = sum / arr.length;
    let odd = arr.filter(num => num % 2 !== 0);
    print("6. Масив: " + arr.join(", "));
    print("   Найбільше: " + max);
    print("   Найменше: " + min);
    print("   Сума: " + sum);
    print("   Середнє: " + avg);
    print("   Непарні: " + odd.join(", "));
  }
  function runAnalyzeArray() {
    let input = document.getElementById("inputArray").value;
    let arr = input.split(",").map(Number).filter(n => !isNaN(n));
    if (arr.length === 0) {
      print("6. Помилка: масив порожній або містить недійсні значення.");
      return;
    }
    analyzeArray(arr);
  }

  function processMatrix(size) {
    let matrix = [];
    for (let i = 0; i < size; i++) {
      matrix[i] = [];
      for (let j = 0; j < size; j++) {
        matrix[i][j] = Math.floor(Math.random() * 21) - 10;
      }
    }
    print("7. Початкова матриця:");
    matrix.forEach(row => print(row.join("\t")));

    for (let i = 0; i < size; i++) {
      matrix[i][i] = matrix[i][i] < 0 ? 0 : 1;
    }
    print("   Модифікована матриця (головна діагональ):");
    matrix.forEach(row => print(row.join("\t")));
  }
  function runProcessMatrix() {
    const size = parseInt(document.getElementById("inputMatrixSize").value);
    if (isNaN(size) || size <= 0) {
      print("7. Помилка: некоректний розмір матриці.");
      return;
    }
    processMatrix(size);
  }