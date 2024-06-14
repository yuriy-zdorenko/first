class ElectricNetwork {
    constructor() {
      this.elements = [];
    }
  
    addElement(element) {
      this.elements.push(element);
    }
  
    calculateBalance(language, dayNumber) {
      if (language.toLowerCase() !== 'ua' && language.toLowerCase() !== 'en') {
        alert('Incorrect input for language. Please enter "ua" or "en".');
        return;
      }
  
      let dayNames;
      if (language.toLowerCase() === 'ua') {
        dayNames = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', "П'ятниця", 'Субота', 'Неділя'];
      } else {
        dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
      }
  
      if (dayNumber < 1 || dayNumber > 7) {
        alert('Incorrect input for day number. Please enter a number from 1 to 7.');
        return;
      }
  
      const dayName = dayNames[dayNumber - 1];
      alert(`Day of the week: ${dayName}`);
    }
  }
  
  let network = new ElectricNetwork();
  
  function selectLanguage() {
    const languageInput = document.getElementById('languageInput').value.trim();
    const validLanguages = ['ua', 'en'];
  
    if (!validLanguages.includes(languageInput.toLowerCase())) {
      alert('Incorrect input for language. Please enter "ua" or "en".');
      return;
    }
  
    let dayQuestion;
    if (languageInput.toLowerCase() === 'ua') {
      dayQuestion = 'Введіть номер дня неділі від 1 до 7?';
    } else {
      dayQuestion = 'Enter the day number of the week (from 1 to 7)?';
    }
  
    const dayNumberInput = prompt(dayQuestion);
    const dayNumber = parseInt(dayNumberInput);
  
    if (isNaN(dayNumber) || dayNumber < 1 || dayNumber > 7) {
      alert('Incorrect input for day number. Please enter a number from 1 to 7.');
      return;
    }
  
    network.calculateBalance(languageInput, dayNumber);
  }
  