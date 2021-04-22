var Part = require('../src/part');
var Being = require('../src/being');

class Shop {
  constructor(thisShop) {
    this.name = thisShop.name;
    this.inventory = {

    }
  }
  addInventory(newInventory) {
    if (newInventory instanceof Shop || newInventory instanceof Part) {
      this.inventory[newInventory.type] = newInventory
    }
  }
  outfitShip(aShip, aPart) {
    if (!aShip.captian) {
      return `cannot outfit a ship without a captian`
    } else if (aShip.captian.credits < this.inventory[aPart].value) {
      return `you require ${this.inventory[aPart].value - aShip.captian.credits} more credits to make this purchase`
    } else {
      aShip.captian.credits -= this.inventory[aPart].value
      aShip.parts[aPart] = this.inventory[aPart]
      this.inventory = {}
      return `shell added to ship`
    }
  }
}

module.exports = Shop;