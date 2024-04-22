console.log("Task 11");
const arr = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];

const checkDuplicates = (array) => {
  let newArr = [];

  for (let i = 0; i < array.length; i++) {
    if (!newArr.includes(array[i])) {
      newArr.push(array[i]);
    }
  }

  return newArr;
};

console.log(checkDuplicates(arr));
