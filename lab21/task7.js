console.log("Task 7");
const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let matrix = [];
for (let i = 0; i < 5; i++) {
  matrix[i] = [];
  for (let j = 0; j < 5; j++) {
    matrix[i][j] = getRandomNumber(-10, 10);
  }
}

for (let i = 0; i < matrix.length; i++) {
  console.log(matrix[i].join("\t"));
}
console.log("Змінена матриця");

for (let i = 0; i < matrix.length; i++) {
  if (matrix[i][i] > 0) {
    matrix[i][i] = 1;
  } else if (matrix[i][i] < 0) {
    matrix[i][i] = 0;
  }
}

for (let i = 0; i < matrix.length; i++) {
  console.log(matrix[i].join("\t"));
}
