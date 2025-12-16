function print(message) {
    document.getElementById("output").innerHTML += `<div class="result">${message}</div>`;
  }

  function add(a, b) {
    return a + b;
  }

  function sub(a, b) {
    return a - b;
  }

  function mul(a, b) {
    return a * b;
  }

  function div(a, b) {
    if (b === 0) {
      return "Помилка! Ділення на нуль.";
    }
    return a / b;
  }

  function runAdd() {
    const num1 = parseFloat(document.getElementById("inputNum1").value);
    const num2 = parseFloat(document.getElementById("inputNum2").value);
    print("Результат додавання: " + add(num1, num2));
  }

  function runSub() {
    const num1 = parseFloat(document.getElementById("inputNum1").value);
    const num2 = parseFloat(document.getElementById("inputNum2").value);
    print("Результат віднімання: " + sub(num1, num2));
  }

  function runMul() {
    const num1 = parseFloat(document.getElementById("inputNum1").value);
    const num2 = parseFloat(document.getElementById("inputNum2").value);
    print("Результат множення: " + mul(num1, num2));
  }

  function runDiv() {
    const num1 = parseFloat(document.getElementById("inputNum1").value);
    const num2 = parseFloat(document.getElementById("inputNum2").value);
    print("Результат ділення: " + div(num1, num2));
  }

  function checkNumber() {
    const num = parseInt(document.getElementById("inputCheckNum").value);

    let posOrNeg = num >= 0 ? "Позитивне" : "Негативне";

    let isPrime = true;
    if (num <= 1) isPrime = false;
    else {
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          isPrime = false;
          break;
        }
      }
    }
    let primeText = isPrime ? "Просте" : "Не просте";

    let divisibleBy = [];
    [2, 3, 5, 6, 9].forEach(n => {
      if (num % n === 0) divisibleBy.push(n);
    });

    print(`Число ${num}:`);
    print(`  Тип: ${posOrNeg}`);
    print(`  Просте: ${primeText}`);
    print(`  Ділиться на: ${divisibleBy.join(", ")}`);
  }

  function reverseAndSquare() {
    const arr = document.getElementById("inputArray").value.split(',').map(Number);
    const reversedAndSquared = arr.reverse().map(num => typeof num === "number" && !isNaN(num) ? num ** 2 : num);
    print("Перевернутий масив з піднесеними до квадрату значеннями: " + reversedAndSquared.join(", "));
  }

  function removeDuplicates() {
    const arr = document.getElementById("inputArray").value.split(',').map(Number);
    const uniqueArray = [...new Set(arr)];
    print("Масив без дублікатів: " + uniqueArray.join(", "));
  }