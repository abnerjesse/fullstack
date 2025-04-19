//Controle de ID da estrutura de dados
let genID = 8

let self = module.exports = {
    //Estrutura de Dados
    perfis: [
        {
            "usuario": {
                "email": "jao@email.com",
                "senha": "12345"
            },
            "id": 1,
            "nome": "Jão da Silva",
            "dataNascimento": "2022-02-14T00:00:00.000Z",
            "disponibilidadeMudanca": true,
            "disponibilidadeHorario": "Integral",
            "educacao": [
                {
                    "instituicao": "Escola 1",
                    "ingresso": "2012-02-28T00:00:00.000Z",
                    "conclusao": "2015-02-28T00:00:00.000Z",
                    "nivelEscolaridade": "Ensino Superior"
                }
            ],
            "certificacoes": [
                {
                    "instituicao": "High Tech Cursos",
                    "titulo": "Fábrica de Programador",
                    "cargaHoraria": 80
                }
            ],
            "conexoes": []
        },
        {
            "usuario": {
                "email": "maria@email.com",
                "senha": "123456666"
            },
            "id": 2,
            "nome": "Maria da Silva",
            "dataNascimento": "2022-02-14T00:00:00.000Z",
            "disponibilidadeMudanca": true,
            "disponibilidadeHorario": "Meio Período",
            "educacao": [
                {
                    "instituicao": "Escola 1",
                    "ingresso": "2012-02-28T00:00:00.000Z",
                    "conclusao": "2015-02-28T00:00:00.000Z",
                    "nivelEscolaridade": "Ensino Superior"
                }
            ],
            "certificacoes": [
                {
                    "instituicao": "High Tech Cursos",
                    "titulo": "Fábrica de Programador",
                    "cargaHoraria": 80
                }
            ],
            "conexoes": []
        },
        {
            "usuario": {
                "email": "ze@email.com",
                "senha": "123"
            },
            "id": 3,
            "nome": "Zé Araujo",
            "dataNascimento": "2022-02-14T00:00:00.000Z",
            "disponibilidadeMudanca": true,
            "disponibilidadeHorario": "Integral",
            "educacao": [
                {
                    "instituicao": "Escola 1",
                    "ingresso": "2012-02-28T00:00:00.000Z",
                    "conclusao": "2015-02-28T00:00:00.000Z",
                    "nivelEscolaridade": "Ensino Superior"
                }
            ],
            "certificacoes": [
                {
                    "instituicao": "High Tech Cursos",
                    "titulo": "Fábrica de Programador",
                    "cargaHoraria": 80
                }
            ],
            "conexoes": []
        },
        {
            "usuario": {
                "email": "leonardo@email.com",
                "senha": "123"
            },
            "id": 4,
            "nome": "Leonardo Fernandes",
            "dataNascimento": "2022-02-14T00:00:00.000Z",
            "disponibilidadeMudanca": true,
            "disponibilidadeHorario": "Integral",
            "educacao": [
                {
                    "instituicao": "Escola 1",
                    "ingresso": "2012-02-28T00:00:00.000Z",
                    "conclusao": "2015-02-28T00:00:00.000Z",
                    "nivelEscolaridade": "Ensino Superior"
                }
            ],
            "certificacoes": [
                {
                    "instituicao": "High Tech Cursos",
                    "titulo": "Fábrica de Programador",
                    "cargaHoraria": 80
                }
            ],
            "conexoes": []
        },
        {
            "usuario": {
                "email": "gabriela@email.com",
                "senha": "12345111"
            },
            "id": 5,
            "nome": "Gabriela Souza",
            "dataNascimento": "2022-02-14T00:00:00.000Z",
            "disponibilidadeMudanca": true,
            "disponibilidadeHorario": "Integral",
            "educacao": [
                {
                    "instituicao": "Escola 1",
                    "ingresso": "2012-02-28T00:00:00.000Z",
                    "conclusao": "2015-02-28T00:00:00.000Z",
                    "nivelEscolaridade": "Ensino Superior"
                }
            ],
            "certificacoes": [
                {
                    "instituicao": "High Tech Cursos",
                    "titulo": "Fábrica de Programador",
                    "cargaHoraria": 80
                }
            ],
            "conexoes": []
        },
        {
            "usuario": {
                "email": "beatriz@email.com",
                "senha": "123"
            },
            "id": 6,
            "nome": "Beatriz de Almeida",
            "dataNascimento": "2022-02-14T00:00:00.000Z",
            "disponibilidadeMudanca": true,
            "disponibilidadeHorario": "Integral",
            "educacao": [
                {
                    "instituicao": "Escola 1",
                    "ingresso": "2012-02-28T00:00:00.000Z",
                    "conclusao": "2015-02-28T00:00:00.000Z",
                    "nivelEscolaridade": "Ensino Superior"
                }
            ],
            "certificacoes": [
                {
                    "instituicao": "High Tech Cursos",
                    "titulo": "Fábrica de Programador",
                    "cargaHoraria": 80
                }
            ],
            "conexoes": []
        },
        {
            "usuario": {
                "email": "felipe@email.com",
                "senha": "123"
            },
            "id": 7,
            "nome": "Felipe Magalhães",
            "dataNascimento": "2022-02-14T00:00:00.000Z",
            "disponibilidadeMudanca": true,
            "disponibilidadeHorario": "Integral",
            "educacao": [
                {
                    "instituicao": "Escola 1",
                    "ingresso": "2012-02-28T00:00:00.000Z",
                    "conclusao": "2015-02-28T00:00:00.000Z",
                    "nivelEscolaridade": "Ensino Superior"
                }
            ],
            "certificacoes": [
                {
                    "instituicao": "High Tech Cursos",
                    "titulo": "Fábrica de Programador",
                    "cargaHoraria": 80
                }
            ],
            "conexoes": []
        }
    ],

    buscarUltimos: (req, res) => {
        res.json(self.perfis.length > 5 ? self.perfis.slice(self.perfis.length - 5) : perfis)
    },

    buscarPorId: (req, res) => {
        let perfilId = req.params.id
        let perfilEncontrado = self.perfis.find((perfil) => perfil.id == perfilId)

        if (perfilEncontrado) res.json(perfilEncontrado)
        else {
            res.status(400).json({
                message: "Erro ao buscar  perfil. Perfil não encontrado!"
            })
        }
    },

    cadastrar: (req, res) => {
        let novoPerfil = req.body

        if (novoPerfil) {
            novoPerfil.id = genID
            self.perfis.push(novoPerfil)
            genID++

            res.json(novoPerfil)
        } else {
            res.status(400).json({
                message: "Erro ao cadastrar perfil. Dados incompletos!"
            })
        }
    },

    editar: (req, res) => {
        let perfilId = req.params.id
        let perfilNovo = req.body

        if (perfilNovo) {
            let perfilIndex = self.perfis.findIndex((perfil) => perfil.id == perfilId)

            if (perfilIndex !== -1) {
                let perfilAntigo = perfis[perfilIndex]
                perfilNovo.id = perfilId
                self.perfis.splice(perfilIndex, 1, perfilNovo)

                res.json(perfilAntigo)
            } else {
                res.json({
                    message: "Erro ao editar perfil. Perfil não encontrado!"
                })
            }
        } else {
            res.status(400).json({
                message: "Erro ao editar perfil. Dados incompletos!"
            })
        }
    },

    conectar: (req, res) => {
        let info = req.body

        if (info) {
            let remetenteId = info.remetente
            let destinatarioId = info.destinatario

            let rem = self.perfis.find((perfil) => perfil.id == remetenteId)
            let dest = self.perfis.find((perfil) => perfil.id == destinatarioId)

            if (rem && dest) {
                rem.conexoes.push(destinatarioId)
                dest.conexoes.push(remetenteId)

                res.send({
                    message: "Conexão criada com sucesso!"
                })
            } else {
                res.json({
                    message: "Erro ao criar conexão. Perfil não encontrado!"
                })
            }
        } else {
            res.status(400).json({
                message: "Erro ao criar conexão. Dados incompletos!"
            })
        }
    }
}