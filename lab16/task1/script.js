// subtask 1
const images = document.querySelectorAll('.subtask-1 img')

images.forEach((el) => {
  el.onclick = (e) => alert(e.target['src'])
})

// subtask 2
const links = document.querySelectorAll('.subtask-2 a')

links.forEach((el) => {
  el.addEventListener('mouseenter', (e) => {
    e.target.setAttribute('title', el.textContent)
  })

  el.addEventListener('mouseleave', (e) => {
    e.target.removeAttribute('title')
  })
})
// subtask 3-4
const linksMore = document.querySelectorAll('.subtask-3 a')

linksMore.forEach((el) => {
  let str = `(${el['href']})`

  const addText = (e) => {
    e.target.innerHTML += str
  }
  el.addEventListener('mouseenter', addText)

  el.addEventListener('mouseleave', (e) => {
    let newValue = e.target.textContent
    for (let i = 0; i < newValue.length; i++) {
      if (newValue[i] === '(') {
        newValue = newValue.substring(0, i)
      }
    }
    e.target.innerHTML = newValue
    el.removeEventListener('mouseenter', addText)
  })
})

//subtask 5-6
const inputs = document.querySelectorAll('.subtask-5 input')
const par = document.querySelector('.demo')

let isFirstClick = true

inputs.forEach((el) => {
  el.onblur = (e) => {
    par.innerHTML = e.target.value
  }
  el.onclick = (e) => {
    if (isFirstClick) {
      alert(e.target.value)
      isFirstClick = false
    }
  }
})
// subtask 7
const pars = document.querySelectorAll('.subtask-7 p')

pars.forEach((el) => {
  el.onclick = (e) => {
    e.target.innerHTML = e.target.textContent ** 2
  }
})
// subtask 8

const lastTaskInputs = document.querySelectorAll('.subtask-8 input')

lastTaskInputs.forEach((el) => {
  el.onblur = (e) => {
    if (e.target.value.length == e.target.getAttribute('data-length')) {
      e.target.style.border = '3px solid green'
    } else {
      e.target.style.border = '3px solid red'
    }
  }
})
