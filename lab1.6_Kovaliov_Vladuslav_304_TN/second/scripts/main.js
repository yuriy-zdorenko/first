import { ElectricGrid } from './logic/ElectricGrid.js';
import { PowerPlant } from './data/PowerPlant.js';
import { SolarPanel } from './data/SolarPanel.js';
import { House } from './data/House.js';
import { PowerLine } from './data/PowerLine.js';

const grid = new ElectricGrid();

// Джерела
grid.addSource(new PowerPlant(50));
grid.addSource(new SolarPanel(3));
grid.addSource(new SolarPanel(5));

// Споживачі
grid.addHouse(new House(100));
grid.addHouse(new House(250));

// Лінії
grid.addPowerLine(new PowerLine(50, 100)); 
grid.addPowerLine(new PowerLine(30, 80)); 

// Розрахунок на день
const dayResult = grid.calculate(true);
console.log("Day:", dayResult);

// Розрахунок на ніч
const nightResult = grid.calculate(false);
console.log("Night:", nightResult);
