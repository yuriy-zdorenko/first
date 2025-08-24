//task 1
function second (total) {
    return total % 60;
  }
  console.log("Task 1:", second(130)); // 10
  
  //task 2
  function perimeter (side, count) {
    return side * count;
  }
  console.log("Task 2:", perimeter(5, 4)); // 20
  
  //task 3
  function numdersPrint(n){
    for (let i = 1; i <= n; i++){
      if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
      } else if (i % 3 === 0) {
        console.log("Fizz");
      } else if (i % 5 === 0) {
        console.log("Buzz");
      } else {
        console.log(i);
      }
    }
  }
  console.log("Task 3:");
  numdersPrint(15);
  
  //task 4
  function Calculate (a, b, c) {
    console.log("Task 4:", (a + b + c) / 3);
  }
  Calculate(4, 5, 6); // 5
  
  //task 5
  function isDivisible1 (n, x, y) {
    if (n % x === 0 && n % y === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  function isDivisible2 (n, x, y) {
    return n % x === 0 && n % y === 0 ? true : false;
  } 
  
  function isDivisible3(n, x, y) {
    return n % x === 0 && n % y === 0;
  }
  console.log("Task 5:", isDivisible1(10, 2, 5)); // true
  console.log(isDivisible2(10, 2, 3)); // false
  console.log(isDivisible3(15, 3, 5)); // true
  
  //task 6
  function arrayTask1() {
    let arr = [1, 2, 3, 4, 5];
    console.log("Max:", Math.max(...arr));
    console.log("Min:", Math.min(...arr));
    let elesentssum = arr.reduce((a, b) => a + b, 0);
    console.log("Sum:", elesentssum);
    console.log("Avg:", elesentssum / arr.length);
    console.log("Odd numbers:");
    arr.forEach(element => {
      if (element % 2 !== 0) {
        console.log(element);
      }
    });
  }
  console.log("Task 6:");
  arrayTask1();
  
  //task 7
  function arraychanger(arr){
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][i] < 0) {
        arr[i][i] = 0;
      } else if (arr[i][i] > 0) {
        arr[i][i] = 1;
      }
    }
  }
  
  function arrayTask2() {
    let arr = [
      [1, 2, 3, 4, 5],
      [6, -7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, -19, 20],
      [21, 22, 23, 24, 25]
    ];
    console.log("Before:", arr);
    arraychanger(arr);
    console.log("After:", arr);
  }
  console.log("Task 7:");
  arrayTask2();
  
  //task 8
  function Add(a, b) {
    console.log("Сума:", a + b);
  }
  
  function Sub(a, b) {
    console.log("Різниця:", a - b);
  }
  
  function Mul(a, b) {
    console.log("Добуток:", a * b);
  }
  
  function Div(a, b) {
    if (b === 0) {
      console.log("Ділення на нуль неможливе");
    } else {
      console.log("Ділення:", a / b);
    }
  }
  console.log("Task 8:");
  Add(10, 5);
  Sub(10, 5);
  Mul(10, 5);
  Div(10, 0);
  Div(10, 2);
  
  //task 9
  function analyzeNumber(n) {
    console.log(n > 0 ? "Позитивне число" : n < 0 ? "Негативне число" : "Нуль");
    if (n <= 1) {
      console.log("Не є простим");
    } else {
      let isPrime = true;
      for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
          isPrime = false;
          break;
        }
      }
      console.log(isPrime ? "Просте число" : "Не є простим");
    }
  
    [2, 3, 5, 6, 9].forEach(divisor => {
      if (n % divisor === 0) {
        console.log(`Число ділиться на ${divisor}`);
      }
    });
  }
  console.log("Task 9:");
  analyzeNumber(15);
  analyzeNumber(17);
  
  //task 10
  function transformArray(arr) {
    return arr.reverse().map(el => {
      return typeof el === 'number' ? el ** 2 : el;
    });
  }
  console.log("Task 10:", transformArray([1, 'hello', 3, true, 5]));
  
  //task 11
  function removeDuplicates(arr) {
    return [...new Set(arr)];
  }
  console.log("Task 11:", removeDuplicates([1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6]));
  