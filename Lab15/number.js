let number = 10000;
let counter = 0;
let result = 0;
while (number > 50) {
  number = number / 2;
  counter++;
}
result = number;
console.log('Result -> ' + result);
console.log('Counter -> ' + counter);
