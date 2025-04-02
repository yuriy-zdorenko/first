export default function Exercise1(block) {
  if (!block) {
    alert('Error 1')
    return
  } // Перевірка блоку для відповідей

  let ExerciseObjects = `<div class="ExerciseSrc">
    <div class="question">Напишіть функцію seconds, яка приймає числовий параметр total і 
    повертає залишок від ділення числа total на 60. </div><br>
        <form id = "Exercise1Form">
          <input type="number" id="total"/>
          <button type="submit">Розрахунок</button>
        </form>
        <div class="result"></div>
    </div>`
  block.innerHTML = ExerciseObjects //Додання об'єктів завдання

  function seconds() {
    let total = document.getElementById('total').value
    document.querySelector('.result').innerHTML = total % 60
  }
  document.getElementById('Exercise1Form').addEventListener('submit', (e) => {
    e.preventDefault()
    seconds()
  })

  // document.querySelectorAll('.imageType1').forEach((img) => {
  //   img.onclick = function () {
  //     alert(this.)
  //   }
  // })
  // Можлива реалізація через JS
}
