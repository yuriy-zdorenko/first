export default function Exercise4(block) {
  if (!block) {
    alert('Error 1')
    return
  }

  // Создаем HTML-разметку
  block.innerHTML = `
  
    <div class="inputs">
    <div class="question">Для всіх input зробіть так, щоб вони виводили значення value з використанням функції console.log, при натисканні на будь-який з них, але тільки за першим натисканням. Повторне натискання на input повинно  виводити його вміст в alert.
</div><br>
      <input type="text" class="input" value = "1"/>
      <input type="text" class="input" value = "2"/>
      <input type="text" class="input" value = "3"/>
      <div class="demo" id="demo"></div>
    </div>
  `

  let demo = document.querySelector('#demo')
  let inputs = document.querySelectorAll('.input')
  function firstclick(event) {
    let element = event.target
    console.log(element.value)

    element.removeEventListener('click', firstclick)
    element.addEventListener('click', secondClick)
  }
  function secondClick(elev) {
    alert(elev.target.value)
  }
  // Добавляем обработчик на каждый input
  inputs.forEach((input, index) => {
    input.addEventListener('click', firstclick)
  })
}
