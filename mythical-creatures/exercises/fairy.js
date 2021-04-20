class Fairy {
    constructor(name) {
        this.name = name;
        this.dust = 10;
        this.clothes = {
            dresses: ['Iris']
        };
        this.disposition = `Good natured`
        this.humanWards = [];
    }
    receiveBelief() {
        this.dust++
    }
    believe() {
        this.dust = this.dust + 10
    }
    makeDresses(array) {
        var array3 = this.clothes.dresses.concat(array)
        this.clothes.dresses = array3
    }
    becomeProvoked() {
        this.disposition = `Vengeful`
    }
    replaceInfant(infant) {
        if (this.disposition === `Vengeful` && this.humanWards.length <= 2) {
            infant.disposition = 'Malicious'
            this.humanWards.push(infant)
            if (this.humanWards.length === 3) {
                this.disposition = `Good natured`
            }
        }
        return infant
    }
}



module.exports = Fairy;