let day
const days = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', "П'ятниця", 'Субота', 'Неділя']
const question = 'Введіть число від 1 до 7'

while (true) {
  day = parseInt(prompt(question))

  if (day < 1 || day > 7) {
    alert(question)
  } else {
    document.body.innerHTML = `<p>День тижня за введеним числом: ${days[day - 1]}</p>`
    break
  }
}
