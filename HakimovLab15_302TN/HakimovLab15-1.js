let number = 0;

while (number <= 100) {
  if (commonNum(number)) {
    console.log(number);
  }
  number++;
}

function commonNum(a) {
  if (a < 2) {
    return false;
  }
  for (let a = 2; i <= Math.sqrt(num); i++) {
    if (a % i === 0) {
      return false;
    }
  }
  return true;
}