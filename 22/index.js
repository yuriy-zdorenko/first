const readline = require('readline');
function seconds(total) {
  return total % 60;
}
function perimetr(side, count) {
  return side * count;
}
function fizzBaz(num) {
  let count = 1;
  while (count <= num) {
    switch (true) {
      case count % 3 === 0 && count % 5 === 0:
        console.log('\tFizzBaz\t');
        break;
      case count % 3 == 0:
        console.log('\tFizz\t');
        break;
      case count % 5 == 0:
        console.log('\tBaz\t');
        break;
    }
    count++;
  }
}
function calculateAvg(a, b, c) {
  return ((a + b + c) / 3).toFixed(2);
}
function isDivisible_If(n, x, y) {
  if (n % x === 0 && n % y === 0) {
    return 'Number -> ' + n + ' is divisible by both numbers';
  } else {
    return 'Number -> ' + n + ' is not divisible by both numbers';
  }
}
function isDivisible_Ternary(n, x, y) {
  return n % x === 0 && n % y === 0
    ? 'Number -> ' + n + ' is divisible by both numbers'
    : 'Number -> ' + n + ' is not divisible by both numbers';
}
function isDivisible_Simple(n, x, y) {
  return n % x === 0 && n % y === 0;
}
function arrSummary(n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    let randomNum = Math.floor(Math.random() * 100);
    arr.push(randomNum);
  }
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const sum = arr.reduce((curr, next) => curr + next);
  const avg = sum / arr.length;
  const odd = arr.filter((val) => val % 2 !== 0);
  return { arr, max, min, sum, avg, odd };
}
function arrMatrix(min, max) {
  const randNum = (min, max) => {
    const randomFloat = Math.random();
    let randomNum = randomFloat * (max - min) + min;
    randomNum = Math.round(randomNum);
    return randomNum;
  };
  const matrix = new Array(5);
  for (let row = 0; row < matrix.length; row++) {
    matrix[row] = [];
    for (let column = 0; column < matrix.length; column++) {
      matrix[row][column] = randNum(min, max);
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][i] > 0) {
      matrix[i][i] = 1;
    } else if (matrix[i][i] < 0) {
      matrix[i][i] = 0;
    }
  }
  console.log('Матриця після заміни по головній діагоналі:');
  console.log(matrix);
  return matrix;
}
function calculator() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;
  const div = (a, b) => {
    return b === 0 ? 'Can not divide by 0' : a / b;
  };
  const eval = () => {
    switch (operation) {
      case 'add':
        return console.log(add(num1, num2));
      case 'sub':
        return console.log(sub(num1, num2));
      case 'mul':
        return console.log(mul(num1, num2));
      case 'div':
        return console.log(div(num1, num2));
      default:
        console.log('Invalid operation choosen');
        return 1;
    }
  };
  let num1, num2, operation;
  const getUserInputs = () => {
    rl.question('Enter your first number\n', (num) => {
      num1 = parseInt(num);
      console.log('You entered -> ' + num);
      rl.question('Enter your second number\n', (num) => {
        num2 = parseInt(num);
        console.log('You entered -> ' + num);
        rl.question(
          'What operation should we do?\nAvailable values are {add},{sub},{mul},{div} \n',
          (op) => {
            operation = op;
            console.log('Your choosed -> ' + op);
            rl.close();
            eval();
          }
        );
      });
    });
  };
  getUserInputs();
}
function checkNum(num) {
  const isPositive = num > 0 ? true : false;
  const isPrime = () => {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };
  const isDivisible =
    num % 2 === 0 &&
    num % 5 === 0 &&
    num % 3 === 0 &&
    num % 6 === 0 &&
    num % 9 === 0
      ? true
      : false;
  return { isPositive, isPrime: isPrime(), isDivisible };
}
function toPower(arr) {
  return arr.map((val) => {
    return isNaN(val) ? val : val * val;
  });
}
function rmDuplicates(arr) {
  const map = new Map();
  const noDuplicates = [];
  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], 1);
      noDuplicates.push(arr[i]);
    }
  }
  return noDuplicates;
}
console.log('Seconds Func-> \t'+seconds(120));
console.log('Perimetr Func-> \t'+perimetr(22, 6));
console.log('FizzBaz Func-> \t'+fizzBaz(15));
console.log('CalculateAvg Func-> \t'+calculateAvg(5, 6, 7));
console.log('isDivisible_If Func-> \t'+isDivisible_If(15, 3, 5));
console.log('isDivisible_Ternary Func-> \t'+isDivisible_Ternary(15, 3, 5));
console.log('isDivisible_Simple Func-> \t'+isDivisible_Simple(15, 3, 5));
console.log('arrMatrix Func-> \t'+arrMatrix(-100, 100));
console.log('arrSummary Func-> \t'+arrSummary(10));
console.log('checkNum Func-> \n'+checkNum(54));
console.log(
  'toPower Func-> \t'+toPower([2, -5, 'str', Infinity, NaN, 154, { ILikeIceCream: true }])
);
console.log('rmDuplicates Func-> \t'+rmDuplicates([1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6]));
console.log('calculator Func-> \t'+calculator());
