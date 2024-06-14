class PowerStation {
    constructor(power) {
        this.power = power; // мегават
    }
}

class SolarPanel {
    constructor(dayPower) {
        this.dayPower = dayPower; // мегават, які генеруються вдень
    }
}

class ResidentialBuilding {
    constructor(numApartments) {
        this.numApartments = numApartments;
    }

    // Розрахунок споживаної електроенергії вдень і вночі
    calculatePowerConsumption() {
        // Припускаємо, що споживання 4 кВт на квартиру вдень і 1 кВт вночі
        const dayConsumption = this.numApartments * 4 / 1000; // у мегаватах
        const nightConsumption = this.numApartments * 1 / 1000; // у мегаватах

        return { day: dayConsumption, night: nightConsumption };
    }
}

class PowerLine {
    constructor(powerCapacity, pricePerMW) {
        this.powerCapacity = powerCapacity; // мегават
        this.pricePerMW = pricePerMW; // ціна за мегават
    }
}

// Функція для розрахунку балансу та витрат/прибутку
function calculateDailyBalance(powerNetwork) {
    let totalCost = 0;
    let totalPowerNeeded = { day: 0, night: 0 };

    powerNetwork.forEach(element => {
        if (element instanceof PowerStation) {
            // Враховуємо виробництво електростанцій
            totalPowerNeeded.day -= element.power; // від'ємне значення, бо це виробництво
        } else if (element instanceof SolarPanel) {
            // Враховуємо виробництво сонячних панелей (тільки вдень)
            totalPowerNeeded.day += element.dayPower;
        } else if (element instanceof ResidentialBuilding) {
            // Враховуємо споживання житлових будинків
            const consumption = element.calculatePowerConsumption();
            totalPowerNeeded.day += consumption.day;
            totalPowerNeeded.night += consumption.night;
        } else if (element instanceof PowerLine) {
            // Враховуємо можливість передачі енергії по лініях
            if (totalPowerNeeded.day > 0) {
                // Якщо є надлишок енергії вдень, можемо продати
                const transferablePower = Math.min(totalPowerNeeded.day, element.powerCapacity);
                totalCost += transferablePower * element.pricePerMW;
                totalPowerNeeded.day -= transferablePower;
            } else if (totalPowerNeeded.day < 0) {
                // Якщо не вистачає енергії вдень, маємо витрати на покупку
                const neededPower = Math.abs(totalPowerNeeded.day);
                const transferablePower = Math.min(neededPower, element.powerCapacity);
                totalCost -= transferablePower * element.pricePerMW; // від'ємне значення, бо це витрати
                totalPowerNeeded.day += transferablePower;
            }
            // Нічне споживання може просто передаватися без додаткових витрат/прибутків
        }
    });

    return { totalPowerNeeded, totalCost };
}

// Приклад використання:
let powerNetwork = [
    new PowerStation(50), // припустимо, що електростанція виробляє 50 МВт
    new SolarPanel(3), // припустимо, що сонячні панелі генерують 3 МВт вдень
    new ResidentialBuilding(200), // житловий будинок з 200 квартирами
    new PowerLine(30, 20), // лінія, яка передає 30 МВт за ціною 20 за МВт
    new PowerLine(20, 25) // інша лінія, передає 20 МВт за ціною 25 за МВт
];

const { totalPowerNeeded, totalCost } = calculateDailyBalance(powerNetwork);

console.log("Електроенергії потрібно:");
console.log("- вдень:", totalPowerNeeded.day.toFixed(2), "МВт");
console.log("- вночі:", totalPowerNeeded.night.toFixed(2), "МВт");
console.log("Загальні витрати/прибуток:", totalCost.toFixed(2), "грн");
