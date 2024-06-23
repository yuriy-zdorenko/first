$(document).ready(function () {
  const cells = $('.cell')
  const btn = $('.btn')
  const results = $('.data')

  let seconds = 60
  let nextNum = 1

  const finishTime = []

  const setTimer = (time) => {
    $('.time').text(time)
  }

  const setupButtons = () => {
    cells.each((index, element) => {
      $(element).on('click', () => {
        const val = parseInt($(element).text())

        if (val === nextNum) {
          nextNum++
          $(element).css('color', 'red')
        } else {
          clearInterval(timerInterval)
          alert('Не вірна цифра')
          timerInterval = setInterval(timer, 1000)
        }

        if (nextNum > 25) {
          finishTime.push(60 - seconds)
          clearInterval(timerInterval)
          showResultsTable()
        }
      })
    })
  }

  const shuffleArray = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      let temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
    }
    return arr
  }

  const initNumbers = () => {
    const arr = []

    for (let i = 1; i <= 25; i++) {
      arr.push(i)
    }

    const numbers = shuffleArray(arr)

    cells.each((index, element) => {
      $(element).text(numbers[index])

      const color = generateRandomColor()
      const fontSize = generateRandomSize(14, 32)
      $(element).css('color', color)
      $(element).css('font-size', fontSize)
    })
  }

  const generateRandomColor = () => {
    const red = Math.floor(Math.random() * 125)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)
    return 'rgb(' + red + ',' + green + ',' + blue + ')'
  }

  const generateRandomSize = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const timer = () => {
    seconds--
    setTimer(seconds)
    if (seconds === -1) {
      clearInterval(timerInterval)
      const continuePlaying = confirm('Почати гру спочатку?')

      if (continuePlaying) {
        resetGame()
      } else {
        setTimer(0)
      }
    }
  }

  const resetGame = () => {
    clearInterval(timerInterval)
    nextNum = 1
    $('.results').css('visibility', 'hidden')
    initNumbers()
    seconds = 60
    setTimer(seconds)
    timerInterval = setInterval(timer, 1000)
  }

  setupButtons()
  initNumbers()
  setTimer(seconds)

  let timerInterval = setInterval(timer, 1000)

  btn.on('click', resetGame)

  const showResultsTable = () => {
    const min = Math.min(...finishTime)

    results.empty()
    $('.results').css('visibility', 'visible')

    finishTime.forEach((time, i) => {
      const row = $(
        `<div class="row">
            <p>Гра ${i + 1}</p>
            <p>${time} c.</p>
         </div>`
      )

      if (min === time) {
        row.css('background', 'green')
      }

      results.append(row)
    })
  }
})
