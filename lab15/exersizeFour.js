let misyac = parseInt(prompt('Введіть номер місяця (від 1 до 12):'))
let season, misyacName

switch (misyac) {
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

switch (misyac) {
  case 1:
    misyacName = 'Січень'
    break
  case 2:
    misyacName = 'Лютий'
    break
  case 3:
    misyacName = 'Березень'
    break
  case 4:
    misyacName = 'Квітень'
    break
  case 5:
    misyacName = 'Травень'
    break
  case 6:
    misyacName = 'Червень'
    break
  case 7:
    misyacName = 'Липень'
    break
  case 8:
    misyacName = 'Серпень'
    break
  case 9:
    misyacName = 'Вересень'
    break
  case 10:
    misyacName = 'Жовтень'
    break
  case 11:
    misyacName = 'Листопад'
    break
  case 12:
    misyacName = 'Грудень'
    break
  default:
    misyacName = 'невідомий місяць'
}

alert(`Місяць ${misyacName} належить до пори року ${season}.`)
