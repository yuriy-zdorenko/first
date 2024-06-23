const seconds = (total) => {
  return total % 60
}

const perimeter = (side, count) => {
  return side * count
}

const numbers = (n) => {
  console.log('3.')
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz')
      continue
    } else if (i % 3 === 0) {
      console.log('fizz')
      continue
    } else if (i % 5 === 0) {
      console.log('buzz')
      continue
    }

    console.log(i)
  }
}

const isDivisible = (n, x, y) => {
  // if (n % x === 0 && n % y === 0) {
  //   return true
  // }
  // return false
  // return n % x === 0 && n % y === 0 ? true : false
  return (n % x === 0 && n % y === 0 && true) || false
}

const infoArray = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100]
  console.log('6.')
  console.log('Max', Math.max(...arr))
  console.log('Min', Math.min(...arr))
  console.log(
    'Sum',
    arr.reduce((a, b) => a + b, 0)
  )
}

const calculate = (a, b, c) => (a + b + c) / 3

console.log('1.', seconds(100))
console.log('2.', perimeter(5, 4))
numbers(15)
console.log('4.', calculate(1, 2, 3))
console.log('5.', isDivisible(7, 2, 3))
infoArray()
