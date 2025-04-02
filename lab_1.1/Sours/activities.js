import Exercize1 from './Exercize-1.js' // Убедись, что у файла расширение .js
import Exercize2 from './Exercize-2.js'
import Exercize3 from './Exercize-3.js'
import Exercize4 from './Exercize-4.js'
import Exercize5 from './Exercize-5.js'

document.addEventListener('DOMContentLoaded', function () {
  let buttons = document.getElementsByClassName('exercizeButton')
  let ExercizeBlock = document.getElementById('exercizeBlock')

  if (buttons.length > 0) {
    buttons[0].addEventListener('click', function () {
      Exercize1(-100, 100, ExercizeBlock)
    })
    buttons[1].addEventListener('click', function () {
      Exercize2(0, 100, ExercizeBlock)
    })
    buttons[2].addEventListener('click', function () {
      Exercize3(1000, 3, 5, ExercizeBlock)
    })
    buttons[3].addEventListener('click', function () {
      Exercize4(ExercizeBlock)
    })
    buttons[4].addEventListener('click', function () {
      Exercize5(ExercizeBlock)
    })
  } else {
    console.error('Ошибка: кнопка с классом .exercizeButton не найдена!')
  }
})
