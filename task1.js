let num = 2

while (num <= 100) {
  let isSimpleNum = true

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isSimpleNum = false
      break
    }
  }

  isSimpleNum && console.log(num)

  num++
}
