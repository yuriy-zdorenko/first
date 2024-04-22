console.log("Task 10");
const arr = [1, 3, -14, "hello", 15];

const reverseArray = (array) => {
  const newArr = [];

  for (let i = array.length - 1; i != -1; i--) {
    newArr.push(
      typeof array[i] === "number" ? Math.pow(array[i], 2) : array[i]
    );
  }

  return newArr;
};

console.log(reverseArray(arr));
