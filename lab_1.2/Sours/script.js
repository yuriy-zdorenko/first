import Exercise1 from './Exercise-1.js'
import Exercise2 from './Exercise-2.js'
import Exercise3 from './Exercise-3.js'
import Exercise4 from './Exercise-4.js'
import Exercise5 from './Exercise-5.js'
import Exercise6 from './Exercise-6.js'
//Імпорт функцій які виконують завдання
//Перевірка чи загрузився увесь документ HTML
document.addEventListener('DOMContentLoaded', function () {
  let block = document.querySelector('.AnswerBlock')
  let buttons = document.getElementsByClassName('ExerciseButton')
  //Створення активностей для кожної кнопки завдань
  if (buttons.length > 0) {
    buttons[0].addEventListener('click', () => {
      Exercise1(block)
    })
    buttons[1].addEventListener('click', () => {
      Exercise2(block)
    })
    buttons[2].addEventListener('click', () => {
      Exercise3(block)
    })
    buttons[3].addEventListener('click', () => {
      Exercise4(block)
    })
    buttons[4].addEventListener('click', () => {
      Exercise5(block)
    })
    buttons[5].addEventListener('click', () => {
      Exercise6(block)
    })
  }
})
