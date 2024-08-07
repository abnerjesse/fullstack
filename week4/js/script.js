let listaCompras = []

function adicionarItem() {
    let item = document.getElementById("item").value

    // listaCompras[listaCompras.length] = item

    // hasItem(item)?listaCompras.push(item):alert("Por favor, informe um item para ser adicionado na lista de compras!")

    if (!hasItem(item)) {
        alert("Por favor, informe um item para ser adicionado na lista de compras!")
    } else {
        if (checkItem(item)) {
            listaCompras.push(item)
            limpar()
            imprimir()
        } else {
            alert("Item já adicionado, por favor informe outro item para ser adicionado na lista de compras!")
            limpar()
        }
    }
}

function checkItem(it) {
    return (listaCompras.indexOf(it) < 0)
}

function hasItem(it) {
    return (it != "")
}

function limpar() {
    document.getElementById("item").value = ""
}

function imprimir() {
    document.getElementById("lista").innerText = listaCompras.join(" - ")
}