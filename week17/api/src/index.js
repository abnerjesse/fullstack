const api = require("./server")
const port = 3000

api.listen(port, () => {
    console.log(`Perfil Profissional API listening on port ${port}...`)
})