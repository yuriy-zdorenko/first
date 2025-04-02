export default function Exercise8(block) {
  if (!block) {
    alert('Error 1')
    return
  }

  // Создаем HTML-разметку
  block.innerHTML = `
      <div class="ExerciseSrc">
         <div class="question">

         Створіть чотири функції для арифметичних операцій: 
         (Add – додавання, Sub – віднімання, Mul – множення, Div – ділення). 
         Кожна функція повинна приймати два параметри и виводити на екран результат обчислення. 
         Функція ділення  повинна виконувати перевірку на нуль. Користувач вводить значення, 
         над якими хоче провести операцію і робить вибірку самої операції. (0,2)

         </div><br>
            <input type="number" id="number1"/>
            <input type="number" id="number2"/>
            <button class="oparationButton">+</button>
            <button class="oparationButton">-</button>
            <button class="oparationButton">*</button>
            <button class="oparationButton">/</button>
         <div class="result"></div>
      </div>
    `

  function Add(x, y) {
    return x + y
  }
  function Sub(x, y) {
    return x - y
  }
  function Mul(x, y) {
    return x * y
  }
  function Div(x, y) {
    if (x == 0 || y == 0) {
      return 'Неможливо порахувати, змініть числа'
    }
    return x / y
  }
  let resultBlock = document.querySelector('.result')
  let OperationButtons = document.querySelectorAll('.oparationButton')

  OperationButtons.forEach((OperationButton) => {
    OperationButton.addEventListener('click', () => {
      let number1 = parseFloat(document.getElementById('number1').value)
      let number2 = parseFloat(document.getElementById('number2').value)
      if (!isNaN(number1) && !isNaN(number2)) {
        switch (OperationButton.textContent) {
          case '+':
            resultBlock.innerHTML = Add(number1, number2)
            break
          case '-':
            resultBlock.innerHTML = Sub(number1, number2)
            break
          case '*':
            resultBlock.innerHTML = Mul(number1, number2)
            break
          case '/':
            resultBlock.innerHTML = Div(number1, number2)
            break
        }
      } else {
        resultBlock.innerHTML = 'Введіть коректні числа'
      }
    })
  })
}
