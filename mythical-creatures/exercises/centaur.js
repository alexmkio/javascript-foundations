

class Centaur {
  constructor(centObj) {
    this.name = centObj.name;
    this.breed = centObj.type;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.crankMeter = 0;
  }
  shootBow() {
    if (!this.layingDown) {
      this.crankMeter++;
      if (this.crankMeter <= 3) {
        this.cranky = true;
        return `Twang!!!`
      }
    }
    return `NO!`
  }
  run() {
    if (!this.layingDown) {
      this.crankMeter++;
      if (this.crankMeter <= 3) {
        this.cranky = true;
        return `Clop clop clop clop!!!`
      }
    }
    return `NO!`
  }
  sleep() {
    if (this.layingDown) {
      this.cranky = false;
      this.crankMeter = 0;
      return `ZZZZ`
    }
    return `NO!`
  }
  layDown() {
    this.standing = false;
    this.layingDown = true;
  }
  standUp() {
    this.standing = true;
    this.layingDown = false;
  }
  drinkPotion() {
    if (this.standing) {
      this.cranky = false;
      this.crankMeter = 0;
    }
    return `Not while I\'m laying down!`
  }
}

module.exports = Centaur;
