while (true) {
  let rnd = parseInt(Math.random() * 10)
  console.log(rnd)

  while (true) {
    const usNum = parseInt(prompt('Введіть число: '))
    let diff = Math.abs(usNum - rnd)

    if (diff === 0) {
      alert('Ото жахнуло, більше туди не підемо!')
      break
    } else if (diff < 5) {
      alert('Ошпарився!')
    } else if (diff < 10) {
      alert('Скоро ошпарився!')
    } else if (diff < 15) {
      alert('Середина до ошпарювання!')
    } else if (diff < 20) {
      alert('Далеко до ошпарювання!')
    } else if (diff < 25) {
      alert('Дуже далеко до ошпарювання!')
    } else {
      alert('Ти ніколи не ошпаришся!')
    }
  }
  let isConfirmed = confirm('Ти шо, ще захотів?')
  if (!isConfirmed) {
    break
  }
}
