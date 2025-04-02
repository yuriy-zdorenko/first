export default function Exercise2(block) {
  if (!block) {
    alert('Error 1')
    return
  } //Перевірка наявності блоку для відповідей
  function addTitle(event) {
    event.target.setAttribute('title', event.target.textContent)
  } //Додання тайтлу при наведенні на посилання
  function removeTitle(event) {
    event.target.removeAttribute('title')
  } //Видалення тайтлу при відведенні
  let ExerciseObjects = `<div class="ExerciseSrc">
    <div class="question">Напишіть функцію perimeter, яка підраховує периметр 
    правильного багатокутника. Перший параметр функції - side, довжина сторони, 
    другий параметр - count, кількість сторін в багатокутнику (P=n*a). (0,2)
</div><br>
      <form id = "Exercise2Form">
          <input type="number" id="side"/>
          <input type="number" id="count"/>
          <button type="submit">Розрахунок</button>
        </form>
        <div class="result"></div>
    </div>`
  block.innerHTML = ExerciseObjects //Додання об'єктів завдання
  function perimeter() {
    let side = document.getElementById('side').value
    let count = document.getElementById('count').value
    document.querySelector('.result').innerHTML = 'Perimeter = ' + side * count
  }
  document.getElementById('Exercise2Form').addEventListener('submit', (e) => {
    e.preventDefault()
    perimeter()
  })
}
