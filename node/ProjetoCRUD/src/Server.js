const port = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const db = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/products',(req, res, next) => {
    res.send(db.getProdutos())
})

app.get('/products/:id', (req, res, next) => {
    res.send(db.getProduto(req.params.id))
})

app.post('/products', (req, res, next) =>{
    const produto = db.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.put('/products/:id', (req, res, next) =>{
    const produto = db.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco,
        id: req.body.id
    })
    res.send(produto)
})

app.delete('/products/:id', (req, res, next) => {
    const produto = db.excluirProduto(req.params.id)
    res.send(produto) // JSON
})

app.listen(port, ()=> {
    console.log(`Servidor Executando na porta ${port}`)
})
