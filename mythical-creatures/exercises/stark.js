const Direwolf = require("./direwolf");


class Stark {
    constructor(starkObj=``) {
        this.name = starkObj.name;
        this.location = starkObj.area || `Winterfell`;
        this.safe = false;
    }
    sayHouseWords() {
        if (this.safe) {
            return `The North Remembers`
        }
        return `Winter is Coming`
    }
    callDirewolf(name, home) {
        // niceeee
        var direwolf = new Direwolf(name, home)
        direwolf.home = this.location
        // Whoa@this
        direwolf.protect(this)
        return direwolf
    }
}



module.exports = Stark;