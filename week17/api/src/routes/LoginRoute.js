const express = require('express')
const router = express.Router()

const loginService = require('./../services/LoginService')

//Rotas de Login
router.post('', loginService.autenticar)

module.exports = router