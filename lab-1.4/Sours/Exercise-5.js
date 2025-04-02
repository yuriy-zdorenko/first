export default function Exercise5(block) {
  if (!block) {
    alert('Error 1')
    return
  }
  block.innerHTML = `
    <div class="ExerciseSrc">
    <div class="question">Створіть функцію isDivisible (n, x, y), яка перевіряє, 
    чи ділиться число n на два числа x і y. Всі вхідні параметри завжди позитивні числа і 
    не являються нулем. 
      <div>1) З допомогою конструкції if ;</div>
      <div>2) З використанням тернарного оператору;</div>
      <div>3) Без використання конструкціїї if і тернарного оператора:</div>
  </div><br>
      <form id = "Exercise5Form">
          <input type="number" id="n"/>
          <input type="number" id="x"/>
          <input type="number" id="y"/>
          <button type="submit">Розрахунок</button>
        </form>
        <div class="result"></div>
    </div>
  `
  let n = parseFloat(document.getElementById('n').value)
  let x = parseFloat(document.getElementById('x').value)
  let y = parseFloat(document.getElementById('y').value)

  function isDivisible() {
    let result = document.querySelector('.result')
    if (n % x === 0 && n % y === 0) {
      result.innerHTML = 'true' // Якщо n ділиться на x і y
    } else {
      result.innerHTML = 'false' // Якщо n не ділиться на x і y
    }
  } //З допомогою конструкції if ;
  // function isDivisible() {
  //   result.innerHTML = n % x === 0 && n % y === 0 ? 'true' : 'false'
  // }//З використанням тернарного оператору;
  // function isDivisible() {
  //   return n % x === 0 && n % y === 0
  // }//Без використання конструкціїї if і тернарного оператора
  document.getElementById('Exercise5Form').addEventListener('submit', (e) => {
    e.preventDefault()
    isDivisible()
  })
}
