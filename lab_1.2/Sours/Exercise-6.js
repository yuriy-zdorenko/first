export default function Exercise6(block) {
  if (!block) {
    alert('Error 1')
    return
  }

  block.innerHTML = `<div style="display: flex; flex-direction: column; width: 750px">
          <div class="question">
            Дано три елементи div. По першому натискання на кожен div, він
            фарбується червоним кольором, по другому натисканні фарбується в
            попередній колір і так далі кожен клік відбувається чергування
            фону. Рекомендовано зробити дві функції: одна фарбує в червоний
            колір, інша в зелений і вони змінююють одна одну шляхом використання
            removeEventListener. 
          </div>
          <div class="blocks">
            <div class="block"></div>
            <div class="block"></div>
            <div class="block"></div>
          </div>
        </div>`
  function redColor(event) {
    let tempblock = event.target
    tempblock.style.backgroundColor = 'red'
    tempblock.removeEventListener('click', redColor)
    tempblock.addEventListener('click', greenColor)
  }
  function greenColor(event) {
    let tempblock = event.target
    tempblock.style.backgroundColor = 'green'
    tempblock.removeEventListener('click', greenColor)
    tempblock.addEventListener('click', redColor)
  }
  let blocks = document.querySelectorAll('.block')
  blocks.forEach((element) => {
    element.addEventListener('click', redColor)
  })
}
