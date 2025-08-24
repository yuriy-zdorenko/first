export class House {
    constructor(apartments) {
      this.apartments = apartments;
    }
  
    getConsumption(daytime) {
      const kwPerApartment = daytime ? 4 : 1;
      const totalKW = this.apartments * kwPerApartment;
      return totalKW / 1000;
    }
  }