const Sequelize = require('sequelize')
// npm install sequelize pg-hstore pg

// drivers do postgres, pode rodar na mesma linha do comando de cima
//npm install pg-hstore pg

const driver = new Sequelize(
    'heroes',
    'lkz',
    'postgrespass',
    {
        host: 'localhost',
        dialect: 'postgres',
        quoteIdentifiers: false
    }
)

async function main() {
    const Herois = driver.define('herois', {
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
        tableName: 'tb_herois',
        freezeTableName: false,
        timestamps: false
    })
    await Herois.sync()
    await Herois.create({
        nome: 'Lanterna Verde',
        poder: 'Anel'
    })
    const result = await Herois.findAll({
        raw: true
    })
    console.log('result', result);
}

main()