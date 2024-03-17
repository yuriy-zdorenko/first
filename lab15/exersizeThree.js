let chislo = 10000
let vidpovid
let counter = 0

while (chislo >= 50) {
  vidpovid = chislo
  chislo /= 2
  counter++
}

console.log('Результат:', vidpovid)
console.log('Кількість ітерацій:', counter)
