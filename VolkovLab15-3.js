let numb = 10000;
let result;
let count = 0

while (numb >= 50) {
   result = numb;
   numb /= 2;
   count++;
}

console.log('Результат: ' + result + '.');
console.log('Кількість ітерацій: ' + count + '.');