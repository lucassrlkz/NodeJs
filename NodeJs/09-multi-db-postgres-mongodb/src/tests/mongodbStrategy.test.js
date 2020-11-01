const assert = require('assert')
const Mongodb = require('../db/strategies/mongodb')
const Context = require('../db/strategies/base/contextStrategy')

const context = new Context(new Mongodb())
const MOCK_HERO_CADASTRAR = {
    nome: 'Gaviao Arqueiro',
    poder: 'flexas'
}
// const MOCK_HERO_AUALIZAR = {
//     nome: 'Batman',
//     poder: 'Dinheiro'
// }

describe('Mongodb Strategy', function () {
    this.beforeAll(async () => {
        await context.connect()
    })
    it('Verificar Conexão', async () => {
        const result = await context.isConnected()
        const expected = 'Conectado'

        assert.equal(result, expected)
    })

    it('Cadastrar', async () => {
        const { nome, poder } = await context.create(MOCK_HERO_CADASTRAR)
        assert.deepEqual({ nome, poder }, MOCK_HERO_CADASTRAR)
    })
    it('listar', async () => {

        const [{ nome, poder }] = await context.read({ nome: MOCK_HERO_CADASTRAR.nome })
        const result = {
            nome, poder
        }
        assert.deepEqual(result, MOCK_HERO_CADASTRAR)
    })
})