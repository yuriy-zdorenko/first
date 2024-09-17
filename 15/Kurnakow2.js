function printNumbersWithMessage() {
    let num = 0;

    do {
        if (num === 0) {
            console.log(num + ' - це нуль');
        } else if (num % 2 === 0) {
            console.log(num + ' - парне число');
        } else {
            console.log(num + ' - непарне число');
        }
        num++;
    } while (num <= 10);
}

printNumbersWithMessage();
