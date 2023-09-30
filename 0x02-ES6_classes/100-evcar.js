// 10-car.js
const Car = require('./10-car');

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  // Getter and setter for range
  get range() {
    return this._range;
  }

  set range(newRange) {
    this._range = newRange;
  }

  // Override cloneCar method to return an instance of Car
  cloneCar() {
    const clonedCar = super.cloneCar();
    const carInstance = new Car(clonedCar.brand, clonedCar.motor, clonedCar.color);
    return carInstance;
  }
}

module.exports = EVCar;
