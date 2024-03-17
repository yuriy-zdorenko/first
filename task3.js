let num = 10000
let result
let counter = 0

while (num >= 50) {
  result = num
  num /= 2
  counter++
}

console.log(`Результат: ${result}`)
console.log(`Ітерацій: ${counter}`)
