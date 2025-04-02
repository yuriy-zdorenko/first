export default function Exercise10(block) {
  if (!block) {
    alert('Error 1')
    return
  }

  let array = [3, 34, 'efs', 3, '5', 'esif', 2]

  // Создаем HTML-разметку
  block.innerHTML = `
      <div class="ExerciseSrc">
         <div class="question">
               Створити функцію яка приймає параметром масив и повертає перевернутий масив, 
               всі числові значення масиву підносяться до квадрату, значення  всіх інших 
               елементів залишається без змін. (0,2)
         <div>Масив: [${array} ](Число 5 є строкою "5")</div>
         </div><br>
         <div class="result"></div>
      </div>
 `
  function Remake(array) {
    let newArray = []
    array.forEach((element) => {
      if (typeof element === 'number') {
        newArray.unshift(element * element)
      } else {
        newArray.unshift(element)
      }
    })
    document.querySelector('.result').innerHTML = 'Новий масив: ' + newArray
  }
  Remake(array)
}
