class Hobbit {
  constructor(hobbitObj) {
      this.name = hobbitObj.name;
      this.age = 0;
      this.adult = false;
      this.old = false;
      this.hasRing = false;
  }
  celebrateBirthday() {
    this.age++
    if (this.age >= 101) {
      this.old = true;
    } else if (this.age <= 32) {
      this.adult = false;
    } else {
      this.adult = true;
    }
  }
  getRing() {
    if (this.name === "Frodo") {
      this.hasRing = true;
      return `Here is the ring!`
    } else {
      this.hasRing = false;
      return `You can\'t have it!`
    }
  }
}

module.exports = Hobbit;
