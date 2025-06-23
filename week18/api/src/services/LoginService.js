const perfilModel = require('./../models/Perfil')
const tokenUtil = require('./../utils/TokenUtil')
const bcrypt = require('bcrypt')

module.exports = {
    autenticar: async (usuario) => {
        try {
            if (usuario.email && usuario.senha) {
                let perfilEncontrado = await perfilModel.findOne({
                    "usuario.email": usuario.email
                }).select('+usuario.senha').exec()

                if (perfilEncontrado) {
                    const match = await bcrypt.compare(usuario.senha, perfilEncontrado.usuario.senha)

                    if (match) {
                        const token = tokenUtil.gerarToken(JSON.stringify(perfilEncontrado.usuario))
                        return ({
                            token: token,
                            email: perfilEncontrado.usuario.email,
                            id: perfilEncontrado._id
                        })
                    } else {
                        throw {
                            status: 200,
                            message: "Erro ao efetuar o login. Usuário ou senha incorretos!"
                        }
                    }
                } else {
                    throw {
                        status: 200,
                        message: "Erro ao efetuar o login. Usuário ou senha incorretos!"
                    }
                }
            } else {
                throw {
                    status: 400,
                    message: "Erro ao efetuar o login. Dados incompletos!"
                }
            }
        } catch (error) {
            throw error
        }
    }
}