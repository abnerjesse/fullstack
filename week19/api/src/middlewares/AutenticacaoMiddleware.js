const tokenUtil = require('./../utils/TokenUtil')

module.exports = {
    verificar: (req, res, next) => {
        const token = req.headers.token

        if (!token) {
            return res.status(401).json({
                message: 'Token não informado'
            })
        } else {
            try {
                tokenUtil.verificarToken(token)
                next()
            } catch (error) {
                res.status(error.status).json({
                    message: error.message
                })
            }
        }
    }
}