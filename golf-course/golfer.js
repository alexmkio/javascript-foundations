class Golfer {
  constructor(golfer) {
    this.name = golfer.name;
    this.handicap = golfer.handicap;
    this.frustration = 0;
    this.confidence = 0;
  }
  calculateAvg(par) {
    return `I usually shoot a ${this.handicap + par} on average.`
  }
  playRound(golfCourse) {
    if (golfCourse.difficulty === "hard") {
      this.frustration = 500;
    } else {
      this.frustration = 100;
    }
  }
  hitTheRange() {
    this.confidence = this.confidence + 10;
  }
  marvel(golfCourse) {
    return `I love the ${golfCourse.features[0]} and ${golfCourse.features[1]} on this course!`
  }
  whatYaShoot(num) {
    if (num === 4) {
      this.frustration = 20;
      return `Doh!`
    } else  if (num === 0) {
      this.frustration = 10;
      return `Booyah!`
    } else  if (num === 2) {
      this.frustration = 30;
      return `Doh!`
    } else  if (num === -2 || num === -1) {
      this.frustration = 0;
      return `I AM THE GREATEST GOLFER ALIVE!`
    } else  if (num === 3) {
      this.frustration = 20;
      return `Doh!`
    // } else  if (num === -1) {
    //   this.frustration = 0;
    //   return `I AM THE GREATEST GOLFER ALIVE!`
    }
  }
}

module.exports = Golfer;
