class Dragon {
  constructor(name, rider, hungry = true) {
    this.name = name;
    this.rider = rider;
    this.hungry = hungry;
    this.mealNumber = 0;
  }
  greet() {
    return `Hi, ${this.rider}!`
  }
  eat() {
    this.mealNumber++
    if (this.mealNumber > 2) {
      this.hungry = false;
    }
    // if (this.mealNumber < 3) {
    //   this.hungry = true;
    // } else {
    //   this.hungry = false;
    // }
  }
}

module.exports = Dragon;
