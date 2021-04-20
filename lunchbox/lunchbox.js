var Snack = require('./snack');

class LunchBox {
  constructor(thisLunchbox) {
    this.owner = thisLunchbox.owner;
    this.material = thisLunchbox.madeOf;
    this.shape = thisLunchbox.shape;
    this.color = thisLunchbox.color;
    this.snacks = [];
    this.snack;
  }
  acquireSnack(snack) {
    this.snacks.push(snack);
    this.snack = snack;
    this.snack.isInLunchBox = true;
  }
  findHealthySnacks() {
    var healthySnacks = [];
    for (var i = 0; i < this.snacks.length; i++) {
      if (this.snacks[i].type.includes(`fruit`) || this.snacks[i].type.includes(`Fruit`)) {
        healthySnacks.push(this.snacks[i].type)
      }
    }
    return healthySnacks
  }
}

module.exports = LunchBox;
