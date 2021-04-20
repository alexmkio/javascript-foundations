var Part = require('../src/part.js');

class Wagon {
  constructor(thisWagon) {
    this.title = thisWagon.name;
    this.wheels = thisWagon.wheels || [];
    this.axles = thisWagon.axles || [];
    this.oxen = thisWagon.oxen || [];
    this.yokes = thisWagon.yokes || [];
    this.food = thisWagon.food;
    this.ammunition = thisWagon.ammunition;
    this.clothes = thisWagon.clothes;
    this.settlers = thisWagon.settlers || [];
  }
  addPart(thing) {
    if (thing.type === `wheel`) {
      this.wheels.push(thing)      
    } else if (thing.type === `axle`) {
      this.axles.push(thing)  
    } else if (thing.type === `ox`) {
      this.oxen.push(thing)  
    } else if (thing.type === `yoke`) {
      this.yokes.push(thing)  
    }
  }
  canTravel() {
    if (this.wheels.length <= 3
      || this.axles.length <= 1
      || this.oxen.length <= 1
      || this.yokes.length <= 0
      || this.settlers.length <= 0
      || this.wheels[0].brokenCount
      || this.axles[0].brokenCount
      || this.oxen[0].brokenCount
      || ((this.yokes.length / this.oxen.length) < 0.5)
      || this.settlers[0].status === 'dead') {
      return false
    } else {
      return true
    }
  }
}

module.exports = Wagon;