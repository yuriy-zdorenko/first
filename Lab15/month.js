let month = prompt('Your month?', '12');
let monthName = '';
let season = '';
switch (month) {
  case '1':
  case '2':
  case '3':
    season = season + 'winter';
    break;
  case '4':
  case '5':
  case '6':
    season = season + 'spring';
    break;
  case '7':
  case '8':
  case '9':
    season = season + 'summer';
    break;
  case '10':
  case '11':
  case '12':
    season = season + 'autumn';
    break;
  default:
    season = 'Error';
}
switch (month) {
  case '1':
    monthName = 'January';
    break;
  case '2':
    monthName = 'February';
    break;
  case '3':
    monthName = 'March';
    break;
  case '4':
    monthName = 'April';
    break;
  case '5':
    monthName = 'May';
    break;
  case '6':
    monthName = 'June';
    break;
  case '7':
    monthName = 'July';
    break;
  case '8':
    monthName = 'August';
    break;
  case '9':
    monthName = 'September';
    break;
  case '10':
    monthName = 'October';
    break;
  case '11':
    monthName = 'November';
    break;
  case '12':
    monthName = 'December';
    break;
  default:
    monthName = 'Error';
}
alert('Month is ' + monthName);
alert('Season is ' + season);
