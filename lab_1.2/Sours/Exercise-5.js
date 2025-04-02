export default function Exercise5(block) {
  if (!block) {
    alert('Error 1')
    return
  }
  const numbersInWords = {
    нуль: 0,
    один: 1,
    два: 2,
    три: 3,
    чотири: 4,
    пять: 5,
    шість: 6,
    сім: 7,
    вісім: 8,
    девять: 9,
    десять: 10,
    одинадцять: 11,
    дванадцять: 12,
    тринадцять: 13,
    чотирнадцять: 14,
    пятнадцять: 15,
    шістнадцять: 16,
    сімнадцять: 17,
    вісімнадцять: 18,
    девятнадцять: 19,
    двадцять: 20,
    тридцять: 30,
    сорок: 40,
    пятдесят: 50,
    шістдесят: 60,
    сімдесят: 70,
    вісімдесят: 80,
    девяносто: 90,
    сто: 100,
    тисяча: 1000,
  }

  let ExercizeObjects = `
    <div class="ExercizeBlock">
      <p class="numberText">три</p>
      <p class="numberText">двадцять два</p>
      <p class="numberText">сто сорок дев'ять</p>
    </div>`
  //об'єкти для завдань
  block.innerHTML = ExercizeObjects

  function doubleFunc(event) {
    //функція при кліку на параграф
    let paragraph = event.target
    let startText = paragraph.textContent
    paragraph.dataset.value = startText
    //збереження оригінального повідомлення в data

    startText = startText.replace(/'/g, '')
    // Прибираємо апострофи та інші знаки

    let words = startText.split(/\s+/)
    // Ділимо слова по табуляції
    let result = 0
    words.forEach((word) => {
      if (numbersInWords[word] !== undefined) {
        // якщо слово знайдено в обєкті з цифрами то додаємо його до результату
        result += numbersInWords[word]
      }
    })
    result = result * result
    //знаходимо квадрат числа
    paragraph.innerHTML = result
    paragraph.removeEventListener('click', doubleFunc)
    paragraph.addEventListener('click', secondClick)
    //змінюємо івенти
  }
  function secondClick(event) {
    let paragraph = event.target
    if (paragraph.dataset.value && paragraph.dataset.value.length > 0) {
      paragraph.innerHTML = paragraph.dataset.value
    }
    //повертаємо початковий текст параграфу
    paragraph.removeEventListener('click', secondClick)
    paragraph.addEventListener('click', doubleFunc)
  }

  let paragraphs = document.querySelectorAll('.numberText')
  paragraphs.forEach((paragraph) => {
    paragraph.addEventListener('click', doubleFunc)
  })
}
