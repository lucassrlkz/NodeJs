//database = show dbs 
//mudando para um databse = use herois
//mostrar tabelas (collections) show collections


db.herois.find().pretty()
//db.herois.count() = n° de dados registrados

for (let i = 0; i <= 100000; i++) {
    db.herois.insert({
        nome: `Clone-${i}`,
        poder: `Velocidade${i}`,
        dataNascimento: '1998-01-01'
    })

}


//create
db.herois.insert({
    nome: 'Flash',
    poder: 'Velocidade',
    dataNascimento: '1998-01-01'
})

//read
db.herois.findOne()
db.herois.find().limit(100).sort({ nome: -1 })
db.herois.find({}, { poder: 1, _id: 0 })

//update
db.herois.update({ _id: ObjectId("5f78d142ac491c22a949d9e6") },
    { nome: 'Mulher Maravilha' })


db.herois.update({ _id: ObjectId("5f78d21fac491c22a949da14") },
    { $set: { nome: 'Lanterna Verde' } })


db.herois.update({ poder: 'Velocidade' },
    { $set: { poder: 'Super-Força' } })

//delete
db.herois.remove({})
db.herois.remove({ nome: 'Mulher Maravilha' })