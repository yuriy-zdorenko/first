export default function Exercise6(block) {
  if (!block) {
    alert('Error 1')
    return
  }
  block.innerHTML = `
  
    <div class="ExerciseSrc">
    <div class="question">Створити масив розмірністю N елементів, заповнити його 
      довільними цілими значеннями. Вивести найбільше значення масиву, найменше значення
      масиву, загальну суму елементів, середнє арифметичне всіх елементів, вивести непарні
      значення. (0,2)
    </div><br>
      <form id = "Exercise6Form">
          <input type="number" id="count"/>
          <button type="submit">Розрахунок</button>
      </form>
        <div class="result"></div>
    </div>
  `

  function initial() {
    let count = parseFloat(document.getElementById('count').value)
    let arrayRandom = []
    let resultValue = ''
    let unpaireds = ''
    let sum = 0
    for (let i = 0; i < count; i++) {
      arrayRandom[i] = Math.floor(Math.random() * 20)
      sum = sum + arrayRandom[i]
      resultValue = resultValue + ' ' + arrayRandom[i]
      if (arrayRandom[i] % 2 != 0) {
        unpaireds = unpaireds + ' ' + arrayRandom[i]
      }
    }
    document.querySelector('.result').innerHTML =
      '<div>Масив: ' +
      resultValue +
      '</div><div>Непарні значення: ' +
      unpaireds +
      '</div><div>Найбільше значення: ' +
      Math.max(...arrayRandom) +
      '</div><div>Найменше значення: ' +
      Math.min(...arrayRandom) +
      '</div><div>Сума елементів: ' +
      sum +
      '</div><div>Середнє арифметичне: ' +
      sum / arrayRandom.length +
      '</div>'
  }
  document.getElementById('Exercise6Form').addEventListener('submit', (e) => {
    e.preventDefault()
    initial()
  })
}
