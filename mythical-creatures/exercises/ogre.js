const Human = require("./human");

class Ogre {
  constructor(thisOgre) {
    this.name = thisOgre.name;
    this.home = thisOgre.abode || `Swamp`;
    this.swings = 0;
  }
  encounter(human) {
    human.encounterCounter++
    if (human.encounterCounter % 3 == false) {
      this.swingAt(human)
    }
  }
  swingAt(human) {
    this.swings++
    if (this.swings % 2 == false) {
      human.knockedOut = true;
    }
  }
  apologize(human) {
    human.knockedOut = false;
  }
}



module.exports = Ogre;