export default function Exercise3(block) {
  if (!block) {
    alert('Error 1')
    return
  }

  // Создаем HTML-разметку
  block.innerHTML = `
    <div class="ExerciseSrc">
         <div class="question">
         Потрібно написати функцію, що виводить в консоль числа від 1 до n, 
         де n - це ціле число, яка функція приймає як параметр, з такими умовами:
	        виводить fizz замість чисел, кратних 3;
	        виводить buzz замість чисел, кратних 5;
	        виводить fizzbuzz замість чисел, кратних як 3, так і 5.(0,2)

         </div><br>
      <form id = "Exercise3Form">
          <input type="number" id="number"/>
          <button type="submit">Розрахунок</button>
      </form>
        <div class="result"></div>
    </div>`
  function countFunction() {
    let currentNumber = 1
    let lastNumber = document.getElementById('number').value
    while (currentNumber < lastNumber) {
      if (currentNumber % 3 == 0 && currentNumber % 5 == 0)
        console.log('fizzbuzz')
      if (currentNumber % 3 == 0) console.log('fizz')
      if (currentNumber % 5 == 0) console.log('buzz')
      else console.log(currentNumber)

      currentNumber++
    }
  }
  document.getElementById('Exercise3Form').addEventListener('submit', (e) => {
    e.preventDefault()
    countFunction()
  })
}
