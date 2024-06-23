const arr = [
  { value: 'AC', class: ['grey', 'reset'] },
  { value: '+/-', class: ['grey'] },
  { value: '%', class: ['grey'] },
  { value: '/', class: ['orange'] },
  { value: '7', class: [] },
  { value: '8', class: [] },
  { value: '9', class: [] },
  { value: '*', class: ['orange'] },
  { value: '4', class: [] },
  { value: '5', class: [] },
  { value: '6', class: [] },
  { value: '-', class: ['orange'] },
  { value: '1', class: [] },
  { value: '2', class: [] },
  { value: '3', class: [] },
  { value: '+', class: ['orange'] },
  { value: '0', class: ['zero'] },
  { value: '.', class: [] },
  { value: '=', class: ['orange', 'calc'] }
]

const body = document.querySelector('body')

const initDom = () => {
  const calculator = document.createElement('div')
  calculator.classList.add('calculator')

  const result = document.createElement('div')
  result.classList.add('result')

  const btns = document.createElement('div')
  btns.classList.add('btns')

  arr.forEach((item) => {
    const btn = document.createElement('div')
    btn.classList.add(...item.class, 'btn')
    btn.textContent = item.value
    btns.append(btn)
  })

  body.append(calculator)
  calculator.append(result)
  calculator.append(btns)
}

const setupCalc = () => {
  const result = document.querySelector('.result')
  const buttons = document.querySelectorAll('.btn')
  const calc = document.querySelector('.calc')
  const reset = document.querySelector('.reset')

  buttons.forEach((btn) => {
    if (btn.classList.contains('calc') || btn.classList.contains('reset')) return
    btn.onclick = () => {
      result.innerHTML += btn.textContent
    }
  })

  calc.onclick = () => {
    let val = result.textContent
    if (val) {
      result.innerHTML = eval(val)
    }
  }

  reset.onclick = () => {
    result.innerHTML = ''
  }
}

initDom()
setupCalc()
