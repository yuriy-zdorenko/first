export default function Exercize2(start, end, block) {
  if (block) {
    let results =
      '<h3>З допомогою циклу do…while написати функцію для виведення парних чисел від 0 до 100 в консоль.</h3>\n'

    do {
      if (start % 2 == 0) {
        results = results + start + ' '
      }
      start++
    } while (start <= 100)

    block.innerHTML = results
  } else {
    console.log('error')
  }
}
