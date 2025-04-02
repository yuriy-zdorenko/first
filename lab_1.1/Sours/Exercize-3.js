export default function Exercize1(mainNumber, divNumber, finalNumber, block) {
  if (block) {
    let count = 0
    let res = mainNumber
    let results =
      '<h3>Дано число b = 1000. Діліть його на 3 стільки раз, поки результат ділення не стане менше 5. Число яке отримаєте, запишіть в змінну res. Порахуйте кількість ітерацій,  необхідних для цього і запишіть її в змінну count. Результат записаний в змінні res і count виведіть на сторінці.</h3>\n'
    while (res >= finalNumber) {
      res = res / divNumber
      count++
    }
    results = results + 'res = ' + res + '\n count = ' + count
    block.innerHTML = results
  } else {
    console.log('error')
  }
}
