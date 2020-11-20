const express = require("express")
const app = express()
const data = require("./data.json")

app.use(express.json())

app.get("/clients", function (req, res) {
    res.json(data)
})


app.get("/clients/:id", function (req, res) {
    const { id } = req.params
    const client = data.find(cli => cli.id == id)

    if (!client) return res.status(404).json()

    res.json(client)
})

app.post("/clients", function (req, res) {
    const client = req.body

    data.push(client)

    res.json(data)
    console.log("cliente cadastrado");
})

app.put("/clients/:id", function (req, res) {
    const { id } = req.params
    const client = data.find(cli => cli.id == id)

    if (!client) return res.status(404).json()

    const { username, name } = req.body
    client.username = username
    client.name = name
    res.json(client)
})

app.delete("/clients/:id", function (req, res) {
    const { id } = req.params
    const clientFiltered = data.filter(cli => cli.id != id)

    res.json(clientFiltered)
})

app.listen(2300, function () {
    console.log("Server is Running")
});
