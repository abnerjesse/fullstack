import { removePontos, removeHifens } from "./formatador.js"

let clientes = []

function cadastrar() {
    let novoCliente = {}
    novoCliente.nome = document.getElementById("nome").value
    novoCliente.cpf = document.getElementById("cpf").value
    novoCliente.cep = document.getElementById("cep").value
    novoCliente.numero = document.getElementById("numero").value
    novoCliente.limite = document.getElementById("limite").value

    novoCliente.cpf = removePontos(novoCliente.cpf)
    novoCliente.cpf = removeHifens(novoCliente.cpf)

    clientes.push(novoCliente)
    listarClientes()
    alert("Cliente cadastrado!")
    clearForm()
}

function listarClientes() {
    let tabelaClientes = document.getElementById("tabelaClientes")

    tabelaClientes.innerHTML = ""

    for (let index = 0; index < clientes.length; index++) {
        tabelaClientes.innerHTML += `
        <tr>
            <td>${clientes[index].nome}</td>
            <td>${clientes[index].cpf}</td>
            <td>${clientes[index].cep}</td>
            <td>${clientes[index].limite}</td>
        </tr>
        `
    }
}

function clearForm() {
    document.getElementById("nome").value = ""
    document.getElementById("cpf").value = ""
    document.getElementById("cep").value = ""
    document.getElementById("numero").value = ""
    document.getElementById("limite").value = ""
}

document.getElementById("btnCadastrar").onclick = cadastrar