let num = 0;

while (num <= 100) {
    if (num > 1) {
        let isPrime = true;
        let divisor = 2;
        while (divisor <= Math.floor(num / 2)) {
            if (num % divisor === 0) {
                isPrime = false;
                break;
            }
            divisor++;
        }
        if (isPrime) {
            console.log(num);
        }
    }
    num++;
}
