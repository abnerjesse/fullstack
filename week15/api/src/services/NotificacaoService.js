const perfilService = require('./../services/PerfilService')

//Controle de ID da estrutura de dados
let genID = 4

//Estrutura de Dados
let notificacoes = [
    {
        "id": 1,
        "tipo": "Contato",
        "titulo": "Notificação 1",
        "descricao": "Esta é a notificação de número 1",
        "lida": false,
        "remetente": 2,
        "destinatario": 3
    },
    {
        "id": 2,
        "tipo": "Solicitação de amizade",
        "titulo": "Notificação 2",
        "descricao": "Esta é a notificação de número 2",
        "lida": false,
        "remetente": 3,
        "destinatario": 4
    },
    {
        "id": 3,
        "tipo": "Contato",
        "titulo": "Notificação 3",
        "descricao": "Esta é a notificação de número 3",
        "lida": false,
        "remetente": 4,
        "destinatario": 5
    }
]

module.exports = {
    buscarPorId: (req, res) => {
        let notificacaoID = req.params.id
        let notificacaoEncontrada = notificacoes.find((notificacao) => notificacao.id == notificacaoID)

        if (notificacaoEncontrada) res.json(notificacaoEncontrada)
        else {
            res.json({
                message: "Erro ao buscar notificação. Notificação não encontrada!"
            })
        }
    },
    buscarPorPerfilId: (req, res) => {
        let perfilId = req.params.id

        let resposta = notificacoes.filter((notificacao) => notificacao.destinatario == perfilId || notificacao.remetente == perfilId)

        res.json(resposta)
    },
    cadastrar: (req, res) => {
        let novaNotificacao = req.body

        if (novaNotificacao) {
            novaNotificacao.id = genID
            notificacoes.push(novaNotificacao)
            genID++

            res.json(novaNotificacao)
        } else {
            res.status(400).json({
                message: "Erro ao cadastrar notificação. Dados incompletos!"
            })
        }
    },
    marcarLida: (req, res) => {
        let notificacaoId = req.params.id

        let notificacaoEncontrada = notificacoes.find((notificacao) => notificacao.id == notificacaoId)

        if (notificacaoEncontrada) {
            notificacaoEncontrada.lida = true
            res.json({
                message: "Notificação marcada como lida!"
            })
        } else {
            res.json({
                message: "Erro ao marcar notificação como lida. Notificação não encontrada!"
            })
        }
    }
}