var Shop = require('../src/shop');

class Planet {
  constructor(thisPlanet) {
    this.name = thisPlanet.name;
    this.shop = thisPlanet.shop;
    this.currentShip;
  }
  landShip(aFighter) {
    this.currentShip = aFighter
  }
}

module.exports = Planet;