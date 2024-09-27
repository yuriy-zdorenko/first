const days = ['mondey', 'tusdey', 'wesdey', 'sursdey', 'fridey', 'saturdey', 'sundey']
const montheses = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  ' July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

const d = new Date()
const hours = d.getHours() < 10 ? '0' + d.getHours() : d.getHours()
const minutesa = d.getMinutes()
const secundas = d.getSeconds()
const day = d.getDate()
const weekday = d.getDay()
const month = d.getMonth()
const year = d.getFullYear()

console.log(
  hours +
    ':' +
    minutesa +
    ':' +
    secundas +
    ', ' +
    days[weekday - 1] +
    ', ' +
    day +
    ' ' +
    montheses[month] +
    ' ' +
    year +
    ' year'
)
