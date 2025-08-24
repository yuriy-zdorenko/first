export class PowerLine {
    constructor(capacity, pricePerMW) {
      this.capacity = capacity;
      this.pricePerMW = pricePerMW;
    }
  
    getCapacity() {
      return this.capacity;
    }
  
    getPricePerMW() {
      return this.pricePerMW;
    }
}