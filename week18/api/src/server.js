const db = require('mongoose')
db.connect('mongodb+srv://abnerjesse:<db_password>@<db_address>/?retryWrites=true&w=majority&appName=ajdbhightech')

const perfilRoute = require('./routes/PerfilRoute')
const notificacaoRoute = require('./routes/NotificacaoRoute')
const loginRoute = require('./routes/LoginRoute')

const express = require('express')
const api = express()
api.use(express.json())

api.use('/perfil', perfilRoute)
api.use('/notificacao', notificacaoRoute)
api.use('/login', loginRoute)


//Rota raiz
api.get('/', (req, res) => {
    res.send('Bem-vindo(a) ao Perfil Profissional API!')
})

module.exports = api