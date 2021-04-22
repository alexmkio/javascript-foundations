

class Part {
  constructor(thisPart) {
    this.name = thisPart.name;
    this.type = thisPart.type;
    this.value = thisPart.value;
    this.broken = false;
    this.checkForValidity = checkFn();
    this.isValid = false;
  }
  checkFn() {
    
  }
}

module.exports = Part;