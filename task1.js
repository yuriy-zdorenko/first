const localize = {
  ua: {
    choose_language: 'Виберіть мову',
    enter_day: 'Введіть номер дня неділі від 1 до 7',
    week_days: ['Понеділок', 'Вівторок', 'Середа', 'Четвер', "П'ятниця", 'Субота', 'Неділя']
  },
  en: {
    choose_language: 'Choose language',
    enter_day: 'Enter the number of the day of the week from 1 to 7',
    week_days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  }
}

let language
while (true) {
  language = prompt(localize.ua.choose_language).toLowerCase()

  if (language === 'ua' || language === 'en') {
    break
  }
}

while (true) {
  let day = prompt(localize[language].enter_day)

  if (day >= 1 && day <= 7) {
    alert(localize[language].week_days[day - 1])
    break
  }
}
