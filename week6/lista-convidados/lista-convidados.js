let convidados = []

function inserir(params) {
    let nomeConvidado = document.getElementById("nomeConvidado").value

    if (nomeConvidado == "") {
        alert("Preencha o nome do convidado!")
    } else {
        convidados.push(nomeConvidado)
        limpar()
        imprimir()
    }
}

function buscar() {
    let nomeBuscar = document.getElementById("nomeBuscar").value

    if (nomeBuscar == "") {
        alert("Preencha o nome a ser buscado!")
    } else {
        let i = 0
        let located = false

        while (i < convidados.length && !located) {
            if (convidados[i] == nomeBuscar) {
                located = true
                alert(`O nome ${nomeBuscar} está na posição ${i + 1}.`)
            }
            i++
        }
        alert("Convidado não está na lista!")
        limparBusca()
    }
}

function imprimir() {
    let tabela = document.getElementById("tabela")
    let cacheTabela = ""
    tabela.innerHTML = ""
    for (let index = 0; index < convidados.length; index++) {
        cacheTabela += `<tr><td>${convidados[index]}</td><td><img src="img/edit.png" alt="edit" onclick="editar(${index})"><img src="img/delete.png" alt="delete" onclick="remover(${index})"></td></tr>`
    }
    tabela.innerHTML = cacheTabela
}

function limpar() {
    document.getElementById("nomeConvidado").value = ""
}

function limparBusca() {
    document.getElementById("nomeBuscar").value = ""
}

function remover(c) {
    if (confirm("Deseja realmente deletar o convidado?")) {
        convidados.splice(c, 1)
        imprimir()
    }
}