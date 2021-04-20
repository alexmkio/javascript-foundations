class Unicorn {
  constructor(name, color = 'white') {
    this.name = name;
    this.color = color;
  }
  isWhite(color) {
    if (color !== 'white') {
      return false
    }
  }
  says (string) {
    return `**;* ${string} *;**`
  }
}

module.exports = Unicorn;
