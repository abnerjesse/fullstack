const perfilService = require('./../services/PerfilService')

module.exports = {
    autenticar: (req, res) => {
        let usuario = req.body

        if (usuario.email && usuario.senha) {
            let usuarioEncontrado = perfilService.perfis.find((perfil) => perfil.usuario.email == usuario.email && perfil.usuario.senha == usuario.senha)

            if (usuarioEncontrado) {
                let resposta = {}
                resposta.perfil = usuarioEncontrado.id
                resposta.token = "TokenSecreto"

                res.json(resposta)
            } else {
                res.json({
                    message: "Erro ao efetuar o login. Usuário ou senha incorretos!"
                })
            }
        } else {
            res.status(400).json({
                message: "Erro ao efetuar o login. Dados incompletos!"
            })
        }
    }
}