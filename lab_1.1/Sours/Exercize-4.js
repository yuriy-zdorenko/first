export default function Exercize4(block) {
  if (block) {
    let results = `
      <h3>Задати довжину в сантиметрах. Вивести в alert відповідну довжину в дюймах.</h3>
      <form id="mainForm">
        <input type="text" id="cmData" placeholder="Введіть сантиметри">
        <button type="submit">Конвертувати</button>
      </form>
    `
    block.innerHTML = results

    let mainForm = document.getElementById('mainForm')
    if (mainForm) {
      mainForm.addEventListener('submit', function (event) {
        event.preventDefault()
        let cmData = document.getElementById('cmData').value
        let inches = cmData / 2.54
        alert(inches)
      })
    }
  } else {
    console.log('error')
  }
}
