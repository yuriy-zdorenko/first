let numb = 10000;
let counter = 0;

while (numb > 50) {
  numb /= 2;
  counter++;
}

const result = numb;
console.log(`Ітерацій - ${counter}, результат - ${result}`);
