console.log("Task 5");
const isDivisible1 = (n, x, y) => {
  if (n <= 0 || x <= 0 || y <= 0) {
    console.log("Невірні параметри");
    return;
  }

  let result = false;
  if (n % y == 0 && n % x == 0) {
    result = true;
  }
  return result;
};

console.log(isDivisible1(10, 2, 5));
console.log(isDivisible1(10, 3, 5));

const isDivisible2 = (n, x, y) => {
  if (n <= 0 || x <= 0 || y <= 0) {
    console.log("Невірні параметри");
    return;
  }

  let result = false;
  n % y == 0 && n % x == 0 ? (result = true) : (result = false);
  return result;
};

console.log(isDivisible2(10, 2, 5));
console.log(isDivisible2(10, 3, 5));

const isDivisible3 = (n, x, y) => {
  if (n <= 0 || x <= 0 || y <= 0) {
    console.log("Невірні параметри");
    return;
  }

  return n % y == 0 && n % x == 0;
};

console.log(isDivisible3(10, 2, 5));
console.log(isDivisible3(10, 3, 5));
