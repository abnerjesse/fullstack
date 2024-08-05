let index = 0
let listaCompras = []

function adicionarItem() {
    let item = document.getElementById("item").value
    listaCompras[index] = item
    index ++
    document.getElementById("item").value = ""
    document.getElementById("lista").innerText = listaCompras
}
