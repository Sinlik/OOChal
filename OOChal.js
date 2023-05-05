class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  honk() {
    return "Beep";
  }
  toString() {
    return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
  }
}

class Car extends Vehicle {
  numWheels() {
    return 4;
  }
}

class Motorcycle extends Vehicle {
  numWheels() {
    return 2;
  }
  revEngine() {
    return "Vrooom!";
  }
}

class Garage {
  constructor(capacity) {
    this.vehicles = [];
    this.capacity = capacity;
  }
  add(newVehicle) {
    if (!(newVehicle instanceof Vehicle)) {
      return "Not a valid vehicle.";
    }
    if (this.vehicles.length >= this.capacity) {
      return "Sorry, garage is full.";
    }
    if (this.vehicles.push(newVehicle)) {
      return "New vehicle added!";
    }
  }
}
