console.log("--- Завдання 3: Ділення числа ---");

let result = 10000; 
let counter = 0;  

while (result >= 50) {
    result /= 2; 
    counter++; 
}

console.log(`Результат (result): ${result}`);
console.log(`Кількість ітерацій (counter): ${counter}`);