console.log("--- Завдання 1: Прості числа (0-100) ---");

let i = 2; 
while (i <= 100) {
    let j = 2;
    let isPrime = true;

    
    while (j <= Math.sqrt(i)) {
        if (i % j === 0) {
            isPrime = false;
            break; 
        }
        j++;
    }

    if (isPrime) {
        console.log(i);
    }
    i++;
}