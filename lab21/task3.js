console.log("Task 3");
const printNumbers = (n) => {
  for (let i = 1; i != n; i++) {
    if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log("fizzbuzz");
    }
  }
};

printNumbers(20);
