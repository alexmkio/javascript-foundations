class Settler {
  constructor(thisSettler) {
    this.name = thisSettler.name;
    this.age = thisSettler.age;
    this.nationality = thisSettler.nationality || `unknown`;
    this.status = `healthy`;
    this.ailments = [];
  }
  experienceDistress(issue) {
    if (this.status === `healthy`) {
      this.ailments.push(issue)
      this.status = `fair`
    } else if (this.status === `fair`) {
      this.ailments.push(issue)
      this.status = `poor`
    } else if (this.status === `poor`) {
      this.ailments.push(issue)
      this.status = `dead`
    }
  }
  heal() {
    if (this.status !== `dead`) {
      this.ailments = []
      this.status = `healthy`
    }
    return `Sorry, we can\'t heal a corpse. ${this.name} needs a proper burial!`
  }
}

module.exports = Settler;