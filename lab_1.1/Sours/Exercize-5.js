export default function Exercize5(block) {
  if (block) {
    let results =
      '<h3>Отримати з модального вікна prompt число від 1 до 31, і вивести в вікні браузера день тижня, якому відповідає задане число в поточному місяці.</h3> <button id="startBtn">Визначити день тижня</button>'
    block.innerHTML = results

    let startBtn = document.getElementById('startBtn')
    startBtn.addEventListener('click', () => {
      let number = prompt('Введіть число')
      let now = new Date()
      let days = [
        'Неділя',
        'Понеділок',
        'Вівторок',
        'Середа',
        'Четверг',
        "П'ятниця",
        'Субота',
      ]
      let daysInMonth = new Date(
        now.getFullYear(),
        now.getMonth() + 1,
        0
      ).getDate() //отримуємо кількість днів у місяці
      if (number > daysInMonth) {
        alert('В цьому місяці лише ' + daysInMonth + ' днів')
        return
      }

      let specificDate = new Date(now.getFullYear(), now.getMonth(), number)

      let result = `
        <div>
          ${specificDate.getDate()}/${specificDate.getMonth() + 1}/
          ${specificDate.getFullYear()} це ${days[specificDate.getDay()]}
        </div>
      `
      results = results + result
      block.innerHTML = results
    })
  } else {
    console.log('error')
  }
}
