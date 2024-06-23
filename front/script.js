const calculateSquare = () => {
  const number = parseFloat(document.getElementById('numberInput').value)

  const url = 'http://localhost:3000/calculate'
  const data = { number }
  const json = JSON.stringify(data)
  const xhr = new XMLHttpRequest()
  xhr.open('POST', url, true)
  xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8')

  xhr.onload = function () {
    const response = JSON.parse(xhr.responseText)
    document.querySelector('#result').textContent = response.message
  }
  xhr.send(json)
}
