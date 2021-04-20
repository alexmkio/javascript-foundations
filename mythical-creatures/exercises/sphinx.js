

class Sphinx {
  constructor() {
    this.riddles = [];
    this.heroesEaten = 0;
  }
  collectRiddle(riddle) {
    if (this.riddles.length === 3) {
      this.riddles.shift()
      this.riddles.push(riddle)
    } else {
      this.riddles.push(riddle)
    }
  }
  attemptAnswer(answered) {
    for (var i = 0; i < this.riddles.length; i++) {
      if (this.riddles[i].answer === answered) {
        this.riddles.splice(i, 1)
        if (this.riddles.length) {
          return `That wasn\'t that hard, I bet you don\'t get the next one`
        }
        return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS \"${answered}"???`
      }
      this.heroesEaten = 1;
    }
  }
}



module.exports = Sphinx;