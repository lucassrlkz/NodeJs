const Icrud = require('./interfaces/interfaceCrud')
const Sequelize = require('sequelize')

class Postgres extends Icrud {
    constructor() {
        super()
        this._driver = null
        this._herois = null
        this.connect()

    }
    async isConnected() {
        try {
            await this._driver.authenticate()
            return true
        } catch (error) {
            console.log('fail', error)
            return false
        }
    }


    async defineModel() {
        this._Herois = this._driver.define('herois', {
            id: {
                type: Sequelize.INTEGER,
                require: true,
                primaryKey: true,
                autoIncrement: true
            },
            nome: {
                type: Sequelize.STRING,
                require: true
            },
            poder: {
                type: Sequelize.STRING,
                require: true
            }
        }, {
            tableName: 'TB_HEROIS',
            freezeTableName: false,
            timestamps: false
        })

        await this._Herois.sync()
    }
    async connect() {
        this._driver = new Sequelize(
            'heroes',
            'lkz',
            'postgrespass',
            {
                host: 'localhost', //172.17.0.2
                dialect: 'postgres',
                quoteIdentifiers: false
            }
        )
        await this.defineModel()
    }

    async create(item) {
        const { dataValues } = await this._Herois.create(item)
        return dataValues
    }
    async update(id, item) {
        const r = await this._Herois.update(item, { where: { id: id } })
        return r
    }
    async read(item = {}) {
        return this._Herois.findAll({ where: item, raw: true })
    }
    async delete(id) {
        const query = id ? { id } : {}
        return this._Herois.destroy({ where: query })
    }
}

module.exports = Postgres