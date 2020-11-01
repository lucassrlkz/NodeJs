const assert = require('assert')
const Postgres = require('../db/strategies/postegres')
const Context = require('../db/strategies/base/contextStrategy')

const context = new Context(new Postgres())
const MOCK_HERO_CADASTRAR = {
    nome: 'Gaviao Arqueiro',
    poder: 'flexas'
}
const MOCK_HERO_AUALIZAR = {
    nome: 'Batman',
    poder: 'Dinheiro'
}

describe('Postgres Strategy', function () {
    this.timeout(Infinity)
    this.beforeAll(async () => {
        await context.connect()
    })
    it('PostgresSQL isConnect', async function () {
        const result = await context.isConnected()
        assert.strictEqual(result, true)
    })

    it('Cadastrar', async function () {
        const result = await context.create(MOCK_HERO_CADASTRAR)
        delete result.id
        console.log('result', result);
        assert.deepStrictEqual(result, MOCK_HERO_CADASTRAR)
    })
    it('Listar', async function () {
        const [result] = await context.read({ nome: MOCK_HERO_CADASTRAR.nome })
        delete result.id
        assert.deepStrictEqual(result, MOCK_HERO_CADASTRAR)
    })
    it('Atualizar', async function () {
        const [itemAtualizar] = await context.read({ nome: MOCK_HERO_AUALIZAR.nome })
        const novoItem = {
            ...MOCK_HERO_AUALIZAR,
            nome: 'Mulher Maravilha'
        }
        const [result] = await context.update(itemAtualizar.id, novoItem)
        const [itemAtualizado] = await context.read({ id: itemAtualizar.id })
        assert.deepStrictEqual(result, 1)
        assert.deepStrictEqual(itemAtualizado.nome, novoItem.nome)
    })
    it('Remover por id', async function () {
        const [item] = await context.read({})
        const result = await context.delete(item.id)
        assert.deepStrictEqual(result, 1)
    })
})