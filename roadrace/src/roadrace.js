

class Roadrace {
  constructor(thisRoadrace) {
    this.name = thisRoadrace.title;
    this.location = thisRoadrace.city;
    this.distance = 0;
    this.participants = [];
  }
  setDistance(miles) {
    this.distance = miles;
    return `The ${this.name} in ${this.location} is a ${this.distance} mile race.`
  }
  registerParticipants(name) {
    this.participants.push(name)
  }
  completeRace() {
    for (var i = 0; i < this.participants.length; i++) {
      this.participants[i].runRace(this.name, this.distance)
    }
  }
}

module.exports = Roadrace;
