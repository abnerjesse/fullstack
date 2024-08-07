let listaCompras = []

function adicionarItem() {
    let item = document.getElementById("adicionarItem").value

    if (!hasItem(item)) {
        alert("Por favor, informe um item para ser adicionado na lista de compras!")
    } else {
        if (checkItem(item)) {
            listaCompras.push(item)
            imprimir()
        } else {
            alert("Item já adicionado, por favor informe outro item para ser adicionado na lista de compras!")
        }
    }
    limparA()
}

function removerItem() {
    let itemRemover = document.getElementById("removerItem").value

    let indiceRemover = listaCompras.indexOf(itemRemover)

    if (checkItem(itemRemover)) {
        alert("Item não encontrado!")
    } else {
        listaCompras.splice(indiceRemover, 1)
        alert("Item removido!")
        imprimir()
    }
    limparR()
}

function checkItem(it) {
    return (listaCompras.indexOf(it) < 0)
}

function hasItem(it) {
    return (it != "")
}

function limparA() {
    document.getElementById("adicionarItem").value = ""
}

function limparR() {
    document.getElementById("removerItem").value = ""
}

function imprimir() {
    document.getElementById("lista").innerText = listaCompras.join(" - ")
}