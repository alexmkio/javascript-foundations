

class Being {
  constructor(name, type) {
    this.isAlive = true;
    this.name = name;
    this.species = type;
    this.credits = 0;
  }
  updateCredits(number) {
    this.credits += number;
  }
}

module.exports = Being;
