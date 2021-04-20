var Human = require("../src/Human");

class Snowman {
  constructor(thisSnowman) {
    this.carrots = thisSnowman.carrots;
    this.coal = thisSnowman.coal;
    this.buttons = thisSnowman.buttons;
    this.snowballs = thisSnowman.snowballs;
    this.magicHat = false;
  }
  canWearMagicHat() {
    if (this.coal >= 2 && this.buttons >= 5 && this.carrots >= 1 && this.snowballs >= 2) {
      this.magicHat = true;
    }
  }
}

module.exports = Snowman;