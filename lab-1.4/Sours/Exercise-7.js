export default function Exercise7(block) {
  if (!block) {
    alert('Error 1')
    return
  }

  // Создаем HTML-разметку
  block.innerHTML = `
      <div class="ExerciseSrc">
         <div class="question">
         Створити двовимірний масив елементів розмірністю 5х5 
            і заповнити його довільними цілочисельними значеннями. По головній діагоналі 
            всі числа зі знаком (-) замінити на 0, а числа зі знаком (+) на число 1. (результат в консолі)(0,5)
         </div><br>
         <div class="result"></div>
      </div>
    `
  function genMatrix() {
    let matrix = []

    // Заповнюємо випадковими числами від -5 до 5
    for (let i = 0; i < 5; i++) {
      matrix[i] = []
      for (let j = 0; j < 5; j++) {
        matrix[i][j] = Math.floor(Math.random() * 10) - 5 // Числа від -5 до 5
      }
    }

    console.log('Оригінальна матриця:')
    console.table(matrix)

    // Замінюємо елементи головної діагоналі
    for (let i = 0; i < 5; i++) {
      if (matrix[i][i] < 0) {
        matrix[i][i] = 0
      } else if (matrix[i][i] > 0) {
        matrix[i][i] = 1
      }
    }

    console.log('Оновлена матриця:')
    console.table(matrix)
  }

  genMatrix()
}
