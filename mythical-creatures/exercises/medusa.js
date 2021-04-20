var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }
  gazeAtVictim(victim) {
    /// WHOA!!!
    var statue = new Statue(victim.name);
    if (this.statues.length <= 2) {
      this.statues.push(statue);
    } else {
      var freedPerson = new Person(this.statues[0].name, 'relieved');
      this.statues.shift();
      this.statues.push(statue);
      return freedPerson;
    }
  }
}

module.exports = Medusa;
