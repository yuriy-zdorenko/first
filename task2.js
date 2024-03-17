const typeNum = () => {
  let num = 0

  do {
    switch (num) {
      case 0:
        console.log(`${num} - це нуль`)
        break
      case num % 2 === 0:
        console.log(`${num} - парне число`)
        break
      default:
        console.log(`${num} - непарне число`)
        break
    }

    num++
  } while (num <= 10)
}

typeNum()
