require("dotenv").config()
const mongoose = require('mongoose')

const currentEnv = process.env
const URI = `${currentEnv.DB_PROTOCOL}://${currentEnv.DB_USER}:${currentEnv.DB_PASSWORD}@${currentEnv.DB_HOST}/?${currentEnv.DB_OPTIONS}`

let db

module.exports = {
    connect: async () => {
        db = await mongoose.connect(URI)
        console.log('Conectado ao MongoDB!')
    },
    getDB: () => {
        return db
    }
}