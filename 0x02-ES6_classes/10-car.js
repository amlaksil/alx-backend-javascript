// car.js
class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Getter and setter for brand
  get brand() {
    return this._brand;
  }

  set brand(newBrand) {
    this._brand = newBrand;
  }

  // Getter and setter for motor
  get motor() {
    return this._motor;
  }

  set motor(newMotor) {
    this._motor = newMotor;
  }

  // Getter and setter for color
  get color() {
    return this._color;
  }

  set color(newColor) {
    this._color = newColor;
  }

  // Method to clone the car
  cloneCar() {
    const clonedCar = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    return clonedCar;
  }
}

module.exports = Car;
