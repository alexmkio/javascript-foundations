class Material {
  constructor(name, price, amount, units) {
    this.name = name;
    this.price = price;
    this.amount = amount;
    this.units = units;
  }
  useMaterial(number) {
    var newAmount = this.amount - number;
    if (newAmount > 0) {
      this.amount = newAmount;
      return `You now have ${this.amount} ${this.units} of ${this.name} left.`
    }
    return `You don\'t have enough ${this.name}! Try using ${this.amount} ${this.units} or less.`
  }
  calculateMaterialCost() {
    return this.price * this.amount
  }
}

module.exports = Material;
