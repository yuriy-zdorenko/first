console.log("Task 6");
const fillArray = (n) => {
  let arr = [];
  let odds = [];

  for (let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * 91 + 10, 1));
  }
  console.log(arr);
  console.log(Math.max(...arr));
  console.log(Math.min(...arr));
  console.log(arr.reduce((a, b) => a + b, 0));
  console.log(arr.reduce((a, b) => a + b) / arr.length);

  arr.forEach((num) => num % 2 === 1 && odds.push(num));
  console.log(odds);
};

fillArray(5);
