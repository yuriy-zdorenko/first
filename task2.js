class PowerPlant {
  constructor(power) {
    this.power = power
  }
  getPower() {
    return this.power
  }
  setPower(power) {
    this.power = power
  }

  calculateDayPower() {
    return this.power * 24
  }
}

class SolarPanel {
  constructor(power) {
    this.power = power
  }
  getPower() {
    return this.power
  }
  setPower(power) {
    this.power = power
  }

  calculateDayPower() {
    return this.power * 16
  }
}

class House {
  constructor(apartmentNumber) {
    this.apartmentNumber = apartmentNumber
  }
  getApartmentNumber() {
    return this.apartmentNumber
  }
  setApartmentNumber(apartmentNumber) {
    this.apartmentNumber = apartmentNumber
  }

  showHouseUsage() {
    return this.apartmentNumber * (4 * 16 + 1 * 8)
  }
}

class PowerLine {
  constructor(power, price) {
    this.power = power
    this.price = price
  }
  getPower() {
    return this.power
  }
  setPower(power) {
    this.power = power
  }

  getPrice() {
    return this.price
  }
  setPrice(price) {
    this.price = price
  }

  calculatePowerPrice() {
    return this.price * this.power
  }
}

class ElectricNetwork {
  constructor() {
    this.power = 0
    this.spending = 0
    this.powerStations = []
    this.solarPanels = []
    this.houses = []
    this.powerLines = []
  }

  addPowerStation(powerStation) {
    this.powerStations.push(powerStation)
  }

  addSolarPanel(solarPanel) {
    this.solarPanels.push(solarPanel)
  }

  addHouse(house) {
    this.houses.push(house)
  }

  addPowerLine(powerLine) {
    this.powerLines.push(powerLine)
  }

  calculatePower() {
    let power = 0

    for (let i = 0; i < this.powerStations.length; i++) {
      power += this.powerStations[i].calculateDayPower()
    }

    for (let i = 0; i < this.solarPanels.length; i++) {
      power += this.solarPanels[i].calculateDayPower()
    }

    this.power = power
  }

  calculateSpending() {
    let spending = 0

    for (let i = 0; i < this.houses.length; i++) {
      spending += this.houses[i].showHouseUsage()
    }

    this.spending = spending
  }

  showDifference() {
    return this.spending - this.power
  }

  showPrice() {
    return (this.spending - this.power) * this.powerLines[0].getPrice()
  }
}

const network = new ElectricNetwork()

const house = new House(Math.floor(Math.random() * 400))
const powerLine = new PowerLine(500, 10)
const solarPanel = new SolarPanel(Math.floor(Math.random() * 5))
const powerStation = new PowerPlant(Math.floor(Math.random() * 100))

network.addHouse(house)
network.addPowerLine(powerLine)
network.addSolarPanel(solarPanel)
network.addPowerStation(powerStation)
network.addPowerStation(powerStation)
network.addPowerStation(powerStation)
network.addPowerStation(powerStation)
network.addPowerStation(powerStation)

network.calculatePower()
network.calculateSpending()
console.log('Необхідно купити електрики:', network.showDifference(), 'МВт')
console.log('Вартість покупки електрики:', network.showPrice(), 'грн')
console.log(network)
