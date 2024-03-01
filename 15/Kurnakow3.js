let numb = 10000;
let counter = 0;

while (numb >= 50) {
    numb /= 2;
    counter++;
}

let result = numb;

console.log("Результат: " + result);
console.log("Кількість ітерацій: " + counter);
