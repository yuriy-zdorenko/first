let chislo = 2
let isSimple

while (chislo <= 100) {
  isSimple = true

  for (let i = 2; i <= Math.sqrt(chislo); i++) {
    if (chislo % i === 0) {
      isSimple = false
      break
    }
  }

  if (isSimple) {
    console.log(chislo)
  }

  chislo++
}
