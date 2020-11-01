const Icrud = require('./interfaces/interfaceCrud')

class Postgres extends Icrud {
    constructor() {
        super()
    }
    isConnected() {

    }
    create(item) {
        console.log("O item foi salvo no Postgres");
    }

}

module.exports = Postgres