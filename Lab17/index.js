function parseDate() {
  let today = new Date();
  let day = today.getDay();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let secs = today.getSeconds();
  let monthNum = today.getMonth();
  let yearNum = today.getFullYear();
  let formatedDate = `${hours}:${addZero(minutes)}:${addZero(
    secs
  )}, ${parseDays(day)} , ${addZero(monthNum)} ${parseMonths(
    monthNum
  )} ${yearNum} ${'year'}`;
  return formatedDate;
}
function parseDateForGame() {
  let today = new Date();
  let day = today.getDay();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let secs = today.getSeconds();
  let monthNum = today.getMonth();
  let yearNum = today.getFullYear();
  let formatedDate = `${addZero(day)}.${addZero(monthNum)}.${yearNum} ${addZero(
    hours
  )}:${addZero(minutes)}:${addZero(secs)}`;
  return formatedDate;
}
function parseDays(day) {
  let dayName = '';
  switch (day) {
    case 0:
      dayName = 'Sunday';
      break;
    case 1:
      dayName = 'Monday';
      break;
    case 2:
      dayName = 'Tuesday';
      break;
    case 3:
      dayName = 'Wednesday';
      break;
    case 4:
      dayName = 'Thursday';
      break;
    case 5:
      dayName = 'Friday';
      break;
    case 6:
      dayName = 'Saturday';
      break;
    default:
      dayName = 'Invalid day';
  }
  return dayName;
}
function addZero(num) {
  if (num.toString().length == 1) {
    return '0' + num;
  }
  return num;
}
function parseMonths(month) {
  let monthName = '';
  switch (month) {
    case 1:
      monthName = 'January';
      break;
    case 2:
      monthName = 'February';
      break;
    case 3:
      monthName = 'March';
      break;
    case 4:
      monthName = 'April';
      break;
    case 5:
      monthName = 'May';
      break;
    case 6:
      monthName = 'June';
      break;
    case 7:
      monthName = 'July';
      break;
    case 8:
      monthName = 'August';
      break;
    case 9:
      monthName = 'September';
      break;
    case 10:
      monthName = 'October';
      break;
    case 11:
      monthName = 'November';
      break;
    case 12:
      monthName = 'December';
      break;
    default:
      monthName = 'Error';
  }
  return monthName;
}
function guessNumber() {
  function check(attempts, generatedNum, userNum) {
    if (generatedNum != userNum) {
      alert('Try Again!');
      console.log(
        parseDateForGame() +
          ' Attempt ' +
          attempts +
          ': ' +
          'num ' +
          userNum +
          ' not right!'
      );
    } else {
      isGuessed = true;
    }
    return isGuessed;
  }
  function win(attempts, generatedNum) {
    alert(
      'Your guessed the number ' +
        generatedNum +
        ' after ' +
        attempts +
        ' attempts'
    );
  }
  let attempts = 0;
  let generatedNum = Math.floor(Math.random() * 100);
  let isGuessed = false;
  while (!isGuessed) {
    userNum = prompt('Your guess?');
    if (userNum === null) return;
    attempts = attempts + 1;
    console.log(check(attempts, generatedNum, userNum));
  }
  win(attempts, generatedNum);
}
console.log(parseDateForGame());
guessNumber();
