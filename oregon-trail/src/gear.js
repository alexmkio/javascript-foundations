class Gear {
  constructor(type, quantity) {
    this.type = type;
    this.quantity = quantity;
  }
  checkForValidity() {
    if (this.type === `mp3 player`) {
      return  `I don\`t think a ${this.type} will help us.`
    }
    return `Great, we\'ll need lots of ${this.type}!`
  }
}

module.exports = Gear;
