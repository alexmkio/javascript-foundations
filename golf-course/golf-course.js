class GolfCourse {
  constructor(name, difficulty, openings, features) {
    this.name = name;
    this.difficulty = difficulty;
    this.openings = openings || 8;
    this.features = features;
    this.currentlyPlaying = [];
  }
  checkInGroup(group) {
    if (this.openings - group.length >= 0) {
      this.openings = this.openings - group.length;
      for (var i = 0; i < group.length; i++) {
        this.currentlyPlaying.unshift(group[i].name);
      }
      return `You\'re checked in. Have fun!`
    } else {
      return `Sorry, we are currently booked! Please come back later.`
    }
  }
}

module.exports = GolfCourse;
