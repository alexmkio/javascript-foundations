

class Part {
  constructor(type) {
    this.type = type;
    this.broken = false;
    this.brokenCount = 0;
  }
  break() {
    this.broken = true;
    this.brokenCount++
  }
  repair() {
    if (this.broken && this.brokenCount <= 1) {
      this.broken = false;
    }
    return `This ${this.type} has seen better days, we\'ll need a brand new one!`
  }
}

module.exports = Part;
