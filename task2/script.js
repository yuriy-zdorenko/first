const makeRed = ({ target }) => {
  if (target.classList) {
    target.classList.remove('green')
  }
  target.classList.add('red')
  target.removeEventListener('click', makeRed)
  target.addEventListener('click', makeGreen)
}

const makeGreen = ({ target }) => {
  target.classList.remove('red')
  target.classList.add('green')
  target.removeEventListener('click', makeGreen)
  target.addEventListener('click', makeRed)
}

const div1 = document.getElementById('div1')
const div2 = document.getElementById('div2')
const div3 = document.getElementById('div3')

div1.addEventListener('click', makeRed)
div2.addEventListener('click', makeRed)
div3.addEventListener('click', makeRed)
