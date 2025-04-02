export default function Exercise3(block) {
  if (!block) {
    alert('Error 1')
    return
  }

  // Создаем HTML-разметку
  block.innerHTML = `
    <div class="inputs">
    <div class="question">Дано три  елементи форми input. Прив'яжіть всім input такий обробник: по кліку кожен input виводить своє значення (value) в абзац з id = “demo“

  </div><br>
      <input type="text" class="input"/>
      <input type="text" class="input"/>
      <input type="text" class="input"/>
      <div class="demo" id="demo"></div>
    </div>`

  let demo = document.querySelector('#demo')
  let inputs = document.querySelectorAll('.input')

  // Добавляем обработчик на каждый input
  inputs.forEach((input, index) => {
    input.addEventListener('click', () => {
      demo.innerHTML = `<div class="inputValue">Input ${index + 1}: ${
        input.value
      }</div>`
    })
  })
}
