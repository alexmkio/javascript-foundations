class Pirate {
  constructor(name, job = "scallywag", cursed = false) {
    this.name = name;
    this.job = job;
    this.cursed = cursed;
    this.booty = 0;
  }
  robShip() {
    if (this.booty < 500) {
      this.booty = this.booty + 100;
      return `YAARRR!`
    } else {
      this.cursed = true;
      return `ARG! I\'ve been cursed!`
    }
  }
  liftCurse() {
    if (this.cursed === true) {
      this.booty = this.booty - 300;
      this.cursed = false;
      return `Your curse has been lifted!`
    }
    return `You don\'t need to lift a curse!`
  }
}

module.exports = Pirate;
