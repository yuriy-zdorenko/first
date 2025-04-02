export default function Exercise4(block) {
  if (!block) {
    alert('Error 1')
    return
  }

  // Создаем HTML-разметку
  block.innerHTML = `
  
    <div class="ExerciseSrc">
    <div class="question">Створіть функцію Calculate, яка приймає три параметри цілочислених 
    значення та виводить на екран середнє арифметичне цих параметрів. (0,2)

</div><br>
      <form id = "Exercise4Form">
          <input type="number" id="number1"/>
          <input type="number" id="number2"/>
          <input type="number" id="number3"/>
          <button type="submit">Розрахунок</button>
        </form>
        <div class="result"></div>
    </div>
  `

  function Calculate() {
    let number1 = parseFloat(document.getElementById('number1').value)
    let number2 = parseFloat(document.getElementById('number2').value)
    let number3 = parseFloat(document.getElementById('number3').value)
    document.querySelector('.result').innerHTML =
      'Result = ' + (number1 + number2 + number3) / 3
  }
  document.getElementById('Exercise4Form').addEventListener('submit', (e) => {
    e.preventDefault()
    Calculate()
  })
}
