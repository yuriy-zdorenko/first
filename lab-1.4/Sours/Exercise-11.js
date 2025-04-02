export default function Exercise11(block) {
  if (!block) {
    alert('Error 1')
    return
  }
  let array = [3, 4, 1, 3, 3, 5, 8, 3, 2, 8, 0, 0, 5, 3, 4, 1, 6]
  // Создаем HTML-разметку
  block.innerHTML = `
      <div class="ExerciseSrc">
         <div class="question">
         Напишіть функцію, яка видаляє дублікати в масиві. 
         Наприклад, вхідний масив: [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6], 
         який повертає функція [1, 2, 4, 5, 7, 8, 3, 6] (0,2)
         <div> Запропонований масив: ${array}
         </div><br>
         <div class="result"></div>
      </div>
 `
  function Simply(array) {
    let newArray = []
    array.forEach((element) => {
      if (!newArray.includes(element)) {
        newArray.push(element)
      }
    })
    return newArray
  }
  document.querySelector('.result').innerHTML = 'Новий масив: ' + Simply(array)
}
