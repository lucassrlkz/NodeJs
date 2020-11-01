const Icrud = require('./interfaces/interfaceCrud')

class MongoDB extends Icrud {
    constructor() {
        super()
    }
    create(item) {
        console.log("O item foi salvo no MongoDB");
    }

}

module.exports = MongoDB