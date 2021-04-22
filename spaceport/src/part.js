

class Part {
  constructor(thisPart) {
    this.name = thisPart.name;
    this.type = thisPart.type;
    this.value = thisPart.value;
    this.broken = false;
    this.isValid = true;
    this.checkForValidity = this.checkFn();
  }
  checkFn() {
    if (!this.name) {
      this.isValid = false;
      return `This part needs a name!`
    } else if (!this.type) {
      this.isValid = false;
      return `This part needs a type!`
    } else if (!this.value) {
      this.isValid = false;
      return `This part needs a value!`
    }
  }
}

module.exports = Part;