export class ElectricGrid {
    constructor() {
      this.sources = [];
      this.houses = [];
      this.powerLines = [];
    }
  
    addSource(source) {
      this.sources.push(source);
    }
  
    addHouse(house) {
      this.houses.push(house);
    }
  
    addPowerLine(line) {
      this.powerLines.push(line);
    }
  
    calculate(daytime) {
      const totalProduction = this.sources.reduce((sum, s) => sum + s.getPower(daytime), 0);
      const totalConsumption = this.houses.reduce((sum, h) => sum + h.getConsumption(daytime), 0);
      const balance = totalProduction - totalConsumption;
  
      if (balance === 0) {
        return { status: "balanced", energy: 0, cost: 0 };
      }
  

      const sortedLines = this.powerLines.sort((a, b) => {
        return balance < 0
          ? a.getPricePerMW() - b.getPricePerMW() 
          : b.getPricePerMW() - a.getPricePerMW(); 
      });
  
      let remaining = Math.abs(balance);
      let totalCost = 0;
  
      for (const line of sortedLines) {
        const available = Math.min(remaining, line.getCapacity());
        totalCost += available * line.getPricePerMW();
        remaining -= available;
        if (remaining <= 0) break;
      }
  
      if (remaining > 0) {
        return {
          status: "not enough line capacity",
          energy: balance,
          cost: null,
          unmet: remaining,
        };
      }
  
      return {
        status: balance < 0 ? "buy" : "sell",
        energy: Math.abs(balance),
        cost: balance < 0 ? -totalCost : totalCost,
      };
    }
  }