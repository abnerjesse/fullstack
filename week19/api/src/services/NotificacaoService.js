const notificacaoModel = require('./../models/Notificacao')

module.exports = {
    buscarPorId: async (id) => {
        try {
            return await notificacaoModel.findOne({ _id: id })
        } catch (error) {
            throw { message: error.message, status: 500 }
        }
    },

    buscarPorPerfilId: async (perfilID) => {
        try {
            return await notificacaoModel.find({ $or: [{ remetente: perfilID }, { destinatario: perfilID }] })
        } catch (error) {
            throw { message: error.message, status: 500 }
        }
    },

    cadastrar: async (notificacao) => {
        try {
            return await notificacaoModel.create(notificacao)
        } catch (error) {
            throw { message: error.message, status: 500 }
        }
    },

    marcarLida: async (id) => {
        try {
            let notificacao = await notificacaoModel.findOne({ _id: id })

            if (!notificacao) {
                throw { message: "Notificação inexistente!", status: 404 }
            }
            notificacao.lida = true
            await notificacao.save()
            return { message: "Notificação lida!", status: 200 }
        } catch (error) {
            throw { message: error.message, status: 500 }
        }
    }
}