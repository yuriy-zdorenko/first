class ElectricityStation {
  constructor(power) {
    this.power = this.generatePower();
  }
  generatePower() {
    return Math.ceil(Math.random() * 100);
  }
}
class SolarPanel {
  constructor(power) {
    this.power = this.generatePower();
  }
  generatePower() {
    return Math.ceil(Math.random() * 5);
  }
}
class Building {
  constructor(apartmentsNum) {
    this.consumption = 4;
    this.apartmentsNum = apartmentsNum;
  }
}
class ElectricalLine {
  constructor(capacity, pricePerMegaWatt) {
    this.capacity = capacity;
    this.pricePerMegaWatt = pricePerMegaWatt;
  }
}
class ElectricalGrid {
  constructor() {
    this.elements = [];
  }
  addElement(el) {
    return this.elements.push(el);
  }
  totalDemand() {
    let totalDayDemand = 0;
    let totalNightDemand = 0;
    this.elements.forEach((element) => {
      if (element instanceof Building) {
        totalDayDemand += element.apartmentsNum * element.consumption;
        totalNightDemand += element.apartmentsNum;
      }
    });
    return { day: totalDayDemand, night: totalNightDemand };
  }
  totalSupply() {
    let totalDailySupply = 0;
    let totalNightSupply = 0;
    this.elements.forEach((element) => {
      if (element instanceof ElectricityStation) {
        totalDailySupply += element.power;
        totalNightSupply += element.power;
      } else if (element instanceof SolarPanel) {
        totalDailySupply += element.power;
      }
    });
    return { day: totalDailySupply, night: totalNightSupply };
  }
  isEnough() {
    const totalDemand = this.totalDemand();
    const totalSupply = this.totalSupply();
    const dayDifference = totalSupply.day - totalDemand.day;
    const nightDifference = totalSupply.night - totalDemand.night;
    if (dayDifference >= 0) {
      console.log('Energy is enough for day.\nWe can sell some');
      console.log(
        'We have ' + dayDifference + ' MegaWatts of extra energy at day'
      );
      this.sellEnergy(dayDifference);
    } else {
      console.log('Energy is not enough for day.\nWe should buy some');
      console.log(
        'We are lacking ' +
          Math.abs(dayDifference) +
          ' MegaWatts of  energy at day'
      );
      this.buyEnergy(dayDifference);
    }
    if (nightDifference >= 0) {
      console.log('Energy is enough for night.\nWe can sell some');
      console.log(
        'We have ' + nightDifference + ' MegaWatts of extra energy at night'
      );
      this.sellEnergy(nightDifference);
    } else {
      console.log('Energy is not enough for night.\nWe should buy some');
      console.log(
        'We are lacking ' +
          Math.abs(nightDifference) +
          ' MegaWatts of  energy at night'
      );
      this.buyEnergy(nightDifference);
    }
  }
  sellEnergy(energyAmount) {
    let profit = 0;
    let prevProfit = 0;
    if (energyAmount === 0) {
      console.log("Energy just enough. Can't sell.");
      profit = 0;
      return profit;
    }
    let electricalLines = this.elements.filter(
      (el) => el instanceof ElectricalLine
    );
    electricalLines.sort((a, b) => b.pricePerMegaWatt - a.pricePerMegaWatt);
    if (electricalLines.length > 0) {
      const lineToSell = electricalLines[0];
      const energySold = Math.min(energyAmount, lineToSell.capacity);
      profit = energySold * lineToSell.pricePerMegaWatt;
    }
    console.log('We can sell it all for ' + profit + ' dollars');
    return profit;
  }
  buyEnergy(energyAmount) {
    let expenses = 0;
    let prevExpenses = 0;
    const electricalLines = this.elements.filter(
      (el) => el instanceof ElectricalLine
    );
    electricalLines.sort((a, b) => b.pricePerMegaWatt - a.pricePerMegaWatt);
    if (electricalLines.length > 0) {
      const lineToSell = electricalLines[0];
      const energyToBuy = Math.min(energyAmount, lineToSell.capacity);
      expenses = energyToBuy * lineToSell.pricePerMegaWatt;
    }
    console.log(
      'We can buy need energy for ' + Math.abs(expenses) + ' dollars'
    );
    return expenses;
  }
}

const grid = new ElectricalGrid(500, 10);
grid.addElement(new Building(20));
grid.addElement(new Building(5));
grid.addElement(new ElectricityStation());
grid.addElement(new ElectricityStation());
grid.addElement(new SolarPanel());
grid.addElement(new SolarPanel());
grid.addElement(new SolarPanel());
grid.addElement(new ElectricalLine(500, 10));
grid.addElement(new ElectricalLine(500, 400));
grid.addElement(new ElectricalLine(100, 1));
console.log(grid.isEnough());
