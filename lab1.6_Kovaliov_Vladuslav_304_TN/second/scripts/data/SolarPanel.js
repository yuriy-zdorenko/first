export class SolarPanel {
    constructor(dayPower) {
      this.dayPower = dayPower;
    }
  
    getPower(daytime) {
      return daytime ? this.dayPower : 0;
    }
  }