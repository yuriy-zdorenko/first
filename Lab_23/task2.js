// --- 1. Визначення класів (ОOП) ---

class GridComponent {
  constructor() {
    if (this.constructor === GridComponent) {
      throw new Error("Не можна створювати екземпляри базового класу");
    }
  }
  getPower(time) { return 0; }
}

class PowerStation extends GridComponent {
  constructor(power) {
    super();
    this.power = power;
  }
  getPower(time) { return this.power; }
}

class SolarPanel extends GridComponent {
  constructor(power) {
    super();
    this.power = power;
  }
  getPower(time) { return (time === 'day') ? this.power : 0; }
}

class ResidentialBuilding extends GridComponent {
  constructor(apartments) {
    super();
    this.apartments = apartments;
    // 4 кВт = 0.004 МВт, 1 кВт = 0.001 МВт
    this.dayConsumption = apartments * 0.004;
    this.nightConsumption = apartments * 0.001;
  }
  getPower(time) {
    const consumption = (time === 'day') ? this.dayConsumption : this.nightConsumption;
    return -consumption; // Негативне, бо це споживання
  }
}

class PowerLine {
  constructor(id, capacity, price) {
    this.id = id;
    this.capacity = capacity;
    this.price = price;
  }
}

// --- 2. Функції розрахунку ---

function calculateBalance(network, time) {
  let totalPower = 0;
  for (const component of network) {
    totalPower += component.getPower(time);
  }
  return totalPower;
}

function calculateTransaction(balance, lines) {
  let energyToTransact = Math.abs(balance);
  let totalCost = 0;
  let summary = []; // Масив рядків для виводу

  if (balance === 0) {
    return { summary: "Баланс = 0. Купівля/продаж не потрібні.", totalCost: 0 };
  }

  if (balance < 0) { // Дефіцит, КУПУЄМО
    summary.push(`Потрібно купити: ${energyToTransact.toFixed(2)} МВт.`);
    // Сортуємо від найдешевшої
    const sortedLines = [...lines].sort((a, b) => a.price - b.price);
    
    for (const line of sortedLines) {
      if (energyToTransact <= 0) break;
      const amountToBuy = Math.min(energyToTransact, line.capacity);
      totalCost += amountToBuy * line.price;
      energyToTransact -= amountToBuy;
      summary.push(`  Куплено ${amountToBuy.toFixed(2)} МВт по лінії "${line.id}" (ціна: ${line.price}). Вартість: ${ (amountToBuy * line.price).toFixed(2) }`);
    }
    
    if (energyToTransact > 0) {
      summary.push(`  УВАГА: Не вистачило потужності ліній! Залишився дефіцит ${energyToTransact.toFixed(2)} МВт.`);
    }
    summary.push(`ЗАГАЛЬНІ ВИТРАТИ: ${totalCost.toFixed(2)}`);
    return { summary: summary.join('\n'), totalCost }; // .join('\n') робить гарні рядки

  } else { // Надлишок, ПРОДАЄМО
    summary.push(`Можна продати: ${energyToTransact.toFixed(2)} МВт.`);
    // Сортуємо від найдорожчої (щоб продати вигідніше)
    const sortedLines = [...lines].sort((a, b) => b.price - a.price);
    
    for (const line of sortedLines) {
      if (energyToTransact <= 0) break;
      const amountToSell = Math.min(energyToTransact, line.capacity);
      totalCost += amountToSell * line.price; // Це прибуток
      energyToTransact -= amountToSell;
      summary.push(`  Продано ${amountToSell.toFixed(2)} МВт по лінії "${line.id}" (ціна: ${line.price}). Прибуток: ${ (amountToSell * line.price).toFixed(2) }`);
    }

    if (energyToTransact > 0) {
      summary.push(`  Залишився надлишок ${energyToTransact.toFixed(2)} МВт, який неможливо продати.`);
    }
    summary.push(`ЗАГАЛЬНИЙ ПРИБУТОК: ${totalCost.toFixed(2)}`);
    return { summary: summary.join('\n'), totalCost };
  }
}


// --- 3. Моделювання мережі ---
const network = [
  new PowerStation(100),
  new PowerStation(75),
  new SolarPanel(5),
  new SolarPanel(5),
  new SolarPanel(3),
  new ResidentialBuilding(400),
  new ResidentialBuilding(350),
  new ResidentialBuilding(800)
];

const lines = [
  new PowerLine("Line-A (дешева)", 100, 10),
  new PowerLine("Line-B (дорога)", 50, 15)
];

// --- 4. БЛОК ВИВЕДЕННЯ В HTML ---
// Цей код виконається одразу після завантаження сторінки

// Чекаємо, поки HTML-документ буде повністю завантажено
document.addEventListener('DOMContentLoaded', () => {
    // Знаходимо елементи на сторінці
    const dayResultsEl = document.getElementById('day-results');
    const nightResultsEl = document.getElementById('night-results');

    // Розрахунок для ДНЯ
    const dayBalance = calculateBalance(network, 'day');
    const dayResult = calculateTransaction(dayBalance, lines);
    let dayOutput = `Загальний баланс (День): ${dayBalance.toFixed(2)} МВт\n\n`;
    dayOutput += dayResult.summary;
    dayResultsEl.textContent = dayOutput; // Виводимо в <pre>

    // Розрахунок для НОЧІ
    const nightBalance = calculateBalance(network, 'night');
    const nightResult = calculateTransaction(nightBalance, lines);
    let nightOutput = `Загальний баланс (Ніч): ${nightBalance.toFixed(2)} МВт\n\n`;
    nightOutput += nightResult.summary;
    nightResultsEl.textContent = nightOutput; // Виводимо в <pre>
});