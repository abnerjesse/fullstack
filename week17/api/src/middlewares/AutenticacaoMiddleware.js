const tokenUtil = require('../utils/TokenUtil')

module.exports = {
    verificar: (req, res, next) => {
        const resultado = tokenUtil.verificarToken(req)
        if (resultado.autorizado) {
            next()
        } else {
            res.status(401).json({
                message: resultado.message
            })
        }
    }
}