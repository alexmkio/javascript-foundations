var Skier = require('./Skier');

class Lift {
  constructor(limit) {
    this.inService = true;
    this.limit = limit;
    this.skiers = [];
    this.safetyBar = `up`;
  }
  admitSkier(name, boolean) {
    if (!boolean) {
      return `Sorry, ${name}. You need a lift ticket!`
    }
    if (this.limit > 0) {
      this.limit--
      var skier = new Skier(name, boolean);
      this.skiers.push(skier)
    }
    return `Sorry, ${name}. Please wait for the next lift!`
  }
  startLift() {
    if (!this.limit) {
      this.safetyBar = `down`;
      return
    }
    if (this.limit === 1) {
      return `We still need ${this.limit} more skier!`
    }
    return `We still need ${this.limit} more skiers!`
  }
}

module.exports = Lift;