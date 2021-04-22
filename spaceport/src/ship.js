var Part = require('../src/part');

class Ship {
  constructor(thisShip) {
    this.name = thisShip.name;
    this.type = thisShip.type;
    this.maxCrew = thisShip.maxCrew;
    this.odometer = thisShip.odometer || 0;
    this.fuelCapacity = thisShip.fuelCapacity || 10;
    this.fuel = 0;
    this.captian = thisShip.captian;
    this.crew = [];
    this.cargo = [];
    this.parts = thisShip.parts || {

    };
    this.difference = 0;
  }
  addCrew(newCrew) {
    this.maxCrew -= this.crew.length
    for (var i = 0; i < newCrew.length; i++) {
      if (this.maxCrew && newCrew[i].isAlive) {
        this.crew.push(newCrew[i])
        this.maxCrew--
      }
    }
  }
  loadCargo(newCargo) {
    if (newCargo instanceof Part) {
      this.cargo.push(newCargo)
    }
  }
  updatePart(newPart) {
    this.difference = this.parts[newPart.type].value - newPart.value
    this.parts[newPart.type] = newPart;
    return this.difference
  }
}

module.exports = Ship;