class User {
  constructor() {
    this.lang = this.askLang();
    this.day = this.askDay();
  }
  showResults(lang = this.lang, day = this.day) {
    switch (lang) {
      case 'en':
        alert('User language -> ' + user.lang);
        alert('User day -> ' + user.day);
        break;
      case 'ua':
        alert('Мова користувача -> ' + user.lang);
        alert('День користувача -> ' + user.day);
        break;
    }
  }
  askLang() {
    let lang = prompt(
      'Choose a language beetwen English(EN) and Ukrainian(UA)'
    );
    if (lang === null) return lang;
    lang = lang.toLowerCase();
    if (lang === 'ua' || lang === 'en') {
      return lang;
    } else {
      alert('Wrong language choosen');
      let answer = prompt(
        'Would you like to try again?(Yy or Nn)'
      ).toLowerCase();
      return answer === 'y' ? askLang() : null;
    }
  }
  askDay(lang = this.lang) {
    if (lang === null) return;
    return lang === 'ua' ? this.askDayUa() : this.askDayEn();
  }
  askDayEn() {
    let day = parseInt(
      prompt('Enter the day number of the week (from 1 to 7)')
    );
    let dayName = '';
    switch (day) {
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
      case 7:
        dayName = 'Sunday';
        break;
      default:
        alert('Wrong data inout! Try again!');
        return this.askDayEn();
    }
    return dayName;
  }
  askDayUa() {
    let day = parseInt(prompt('Введіть номер дня неділі від 1 до 7'));
    let dayName = '';
    switch (day) {
      case 1:
        dayName = 'Понеділок';
        break;
      case 2:
        dayName = 'Вівторок';
        break;
      case 3:
        dayName = 'Середа';
        break;
      case 4:
        dayName = 'Четверг';
        break;
      case 5:
        dayName = "П'ятниця";
        break;
      case 6:
        dayName = 'Субота';
        break;
      case 7:
        dayName = 'Неділя';
        break;
      default:
        alert('Введені неправильні дані! Спробуйте ще раз!');
        return this.askDayUa();
    }
    return dayName;
  }
}
// const user = new User();
// user.showResults();
