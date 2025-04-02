function sendNumber() {
  let num = document.getElementById('numberInput').value

  // Проверка на корректность ввода
  if (num === '') {
    alert('Пожалуйста, введите число.')
    return
  }

  let xhr = new XMLHttpRequest()
  xhr.open('GET', '/calculate-square?number=' + num, true)
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let response = JSON.parse(xhr.responseText)
      document.getElementById('result').innerText = response.square
    }
  }
  xhr.send()
}
