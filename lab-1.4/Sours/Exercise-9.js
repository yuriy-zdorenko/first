export default function Exercise9(block) {
  if (!block) {
    alert('Error 1')
    return
  }

  // Создаем HTML-разметку
  block.innerHTML = `
      <div class="ExerciseSrc">
         <div class="question">

         Напишіть функцію, яка буде приймати число і визначати:
            <div>Чи є введене число позитивним або негативним;</div>
            <div>Чи є число простим;</div>
            <div>Чи ділиться вона на 2, 5, 3, 6, 9 без залишку; (0,2)</div>

         </div><br>
         <form id = "Exercise9Form">
            <input type="number" id="number1"/>
            <button type="submit">Розрахунок</button>
         </form>
         <div class="result"></div>
      </div>
    `

  function Explore() {
    let number1 = parseFloat(document.getElementById('number1').value)
    let result1 = 'Просте'
    let result2 = ''
    let numbers = [2, 5, 3, 6, 9]
    if (number1 < 2) {
      result1 = 'Не просте'
    } else {
      for (let i = 2; i <= Math.sqrt(number1); i++) {
        if (number1 % i === 0) {
          result1 = 'Не просте'
          break // Виходимо з циклу, якщо знайдено дільник
        }
      }
    }

    numbers.forEach((number) => {
      if (number1 % number === 0) {
        result2 += ' ' + number
      }
    })
    let positivity = number1 >= 0 ? 'позитивне' : 'негативне'
    let divisibility =
      result2 === ''
        ? 'Число не ділиться на запропоновані числа'
        : 'Число ділиться на ' + result2

    document.querySelector(
      '.result'
    ).innerHTML = `<div>Число ${number1} ${positivity}</div>
         <div>${result1}</div>
         <div>${divisibility}</div>`
  }
  document.getElementById('Exercise9Form').addEventListener('submit', (e) => {
    e.preventDefault()
    Explore()
  })
}
