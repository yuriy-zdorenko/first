console.log("--- Завдання 2: Парні/Непарні (0-10) ---");

let k = 0;

do {
    if (k === 0) {
        console.log(`${k} – це нуль`);
    } else if (k % 2 === 0) {
        console.log(`${k} – парне число`);
    } else {
        console.log(`${k} – непарне число`);
    }
    k++;
} while (k <= 10);