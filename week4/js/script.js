let listaCompras = []

function adicionarItem() {
    let item = document.getElementById("item").value
    
    // listaCompras[listaCompras.length] = item
    listaCompras.push(item)

    limpar()
    imprimir()
}

function limpar() {
    document.getElementById("item").value = ""
}

function imprimir() {
    document.getElementById("lista").innerText = listaCompras.join(" - ")
}