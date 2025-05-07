const data = {
    ua: {
        days: ["Понеділок", "Вівторок", "Середа", "Четверг", "П'ятниця", "Субота", "Неділя"],
        askDay: "Введіть номер дня неділі від 1 до 7?",
        invalidDay: "Невірне число!",
    },
    en: {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        askDay: "Enter the day number of the week (from 1 to 7)?",
        invalidDay: "Invalid number!",
    }
}
while (true) {
    let lang = prompt("Оберіть мову \"ua\" або \"en\"").toLowerCase()
    if(data[lang]){
        while(true){
            let resultNum = +prompt(data[lang].askDay)
            if(!isNaN(resultNum) && (resultNum >= 1 && resultNum <= 7)){
                console.log(data[lang].days[resultNum - 1])
                break
            }else{
                alert(data[lang].invalidDay)
            }
        }
        break
    }else{
        alert("Неправильно, веедіть \"ua\" або \"en\"!")
    }
}


class GridElement {
    getDayPower() { return 0 }
    getNightPower() { return 0 }
}

class PowerPlant extends GridElement {
    constructor(power) {
        super(); this.power = power
    }
    getDayPower() { return this.power }
    getNightPower() { return this.power }
}

class SolarPanel extends GridElement {
    constructor(dayPower) {
        super(); this.dayPower = dayPower
    }
    getDayPower() { return this.dayPower }
    getNightPower() { return 0 }
}

class ResidentialBuilding extends GridElement {
    constructor(apartments) {
        super(); this.apartments = apartments
    }
    getDayPower() { return -this.apartments * 0.004 }
    getNightPower() { return -this.apartments * 0.001 }
}

class PowerLine {
    constructor(capacity, pricePerMW) {
        this.capacity = capacity
        this.pricePerMW = pricePerMW
    }
}

class ElectricGrid {
    elements = []
    powerLines = []

    addElement(el) { this.elements.push(el) }
    addPowerLine(line) { this.powerLines.push(line) }

    calcBalance(day) {
        return this.elements.reduce((sum, el) => sum + (day ? el.getDayPower() : el.getNightPower()), 0)
    }

    calcCost(day) {
        const balance = this.calcBalance(day)
        let cost = 0, remaining = Math.abs(balance)

        const sorted = [...this.powerLines].sort((a, b) => a.pricePerMW - b.pricePerMW)
        for (let line of sorted) {
            if (remaining <= 0) break
            const transfer = Math.min(remaining, line.capacity)
            cost += transfer * line.pricePerMW * (balance < 0 ? 1 : -1)
            remaining -= transfer
        }

        return { balance: +balance.toFixed(2), cost: +cost.toFixed(2) }
    }
}

const grid = new ElectricGrid()
grid.addElement(new PowerPlant(80))
grid.addElement(new PowerPlant(50))
grid.addElement(new SolarPanel(3))
grid.addElement(new SolarPanel(4))
grid.addElement(new ResidentialBuilding(300))
grid.addElement(new ResidentialBuilding(150))
grid.addPowerLine(new PowerLine(20, 100))
grid.addPowerLine(new PowerLine(30, 80))

for (let time of [true, false]) {
    const { balance, cost } = grid.calcCost(time)
    console.log(time ? "День:" : "\nНіч:")
    console.log("Баланс (МВт):", balance)
    console.log(balance < 0 ? "Потрібно купити на суму:" : "Можна продати на суму:", Math.abs(cost), "грн")
}