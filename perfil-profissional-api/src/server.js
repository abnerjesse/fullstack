const db = require('./db')
db.connect()

const perfilRoute = require('./routes/PerfilRoute')
const notificacaoRoute = require('./routes/NotificacaoRoute')
const loginRoute = require('./routes/LoginRoute')

const cors = require('cors')
const express = require('express')
const api = express()

api.use(express.json())
api.use(cors({
    origin: '*'
}))
api.use('/perfil', perfilRoute)
api.use('/notificacao', notificacaoRoute)
api.use('/login', loginRoute)


//Rota raiz
api.get('/', (req, res) => {
    res.send('Bem-vindo(a) ao Perfil Profissional API!')
})

module.exports = api