export default function Exercize1(start, end, block) {
  if (block) {
    let results =
      '<h3>З допомогою циклу while вивести всі натуральні числа в проміжку від -100 до 100</h3>\n'
    while (start <= end) {
      if (start > 0) {
        results += start + ' '
      }
      start++
    }
    block.innerHTML = results
  } else {
    console.log('error')
  }
}
