class Craft {
  constructor(thisCraft) {
    this.name = thisCraft.type;
    this.materials = thisCraft.materials;
    this.completed = false;
  }
  completeCraft() {
    this.completed = true;
    return `All done! It looks great!`
  }
  calculateProjectTotal() {
    return this.materials[0].calculateMaterialCost() + this.materials[1].calculateMaterialCost()
  }
}

module.exports = Craft;
