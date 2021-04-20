var LunchBox = require('./lunchbox');

class Snack {
  constructor(name) {
    this.type = name;
    this.deliciousLevel = `extra`;
    this.amount = 100;
    this.isInLunchBox = false;
    this.cuttingItClose = false;
  }
  getEaten() {
    this.amount = this.amount - 10
    if (this.amount / 100 <= 0.2) {
      this.cuttingItClose = true;
    }
  }
  checkForHealthy() {
    if (this.type.includes(`fruit`) || this.type.includes(`Fruit`)) {
    return true
    }
    return false
  }
}

module.exports = Snack;
