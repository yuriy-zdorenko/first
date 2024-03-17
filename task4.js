let month = parseInt(prompt('Введіть номер місяця (від 1 до 12):'))
const monthes = [
  'Січень',
  'Лютий',
  'Березень',
  'Квітень',
  'Травень',
  'Червень',
  'Липень',
  'Серпень',
  'Вересень',
  'Жовтень',
  'Листопад',
  'Грудень'
]

let season, monthName

switch (month) {
  case 1:
  case 2:
  case 12:
    season = 'зима'
    break
  case 3:
  case 4:
  case 5:
    season = 'весна'
    break
  case 6:
  case 7:
  case 8:
    season = 'літо'
    break
  case 9:
  case 10:
  case 11:
    season = 'осінь'
    break
  default:
    season = 'невідома пора року'
}

monthName = month >= 1 && month <= 12 ? monthes[month - 1] : 'Невідомий місяць'

alert(`${monthName} - ${season}.`)
