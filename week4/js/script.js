let listaCompras = []

function adicionarItem() {
    let item = document.getElementById("item").value
    
    // listaCompras[listaCompras.length] = item
    if (item == "") {
        alert("Por favor, informe um item para ser adicionado na lista de compras!")
    } else {
        listaCompras.push(item)
    }

    limpar()
    imprimir()
}

function limpar() {
    document.getElementById("item").value = ""
}

function imprimir() {
    document.getElementById("lista").innerText = listaCompras.join(" - ")
}