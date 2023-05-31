let numb = 10000;
let iterations = 0;

while (numb >= 50) {
    numb = numb / 2;
    iterations++;
}

let result = numb;

console.log("Result:", result);
console.log("Iterations:", iterations);
