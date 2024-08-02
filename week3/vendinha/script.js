let total = 0
function adicionar() {
    let frutaSelecionada = document.getElementById("fruta").value
    switch (frutaSelecionada) {
        case "abacate":
            total += 2.5
            alert("Abacate, a 2.5 reais, adicionado com sucesso. Valor total da compra é " + total + " reais.")
            break;

        case "abacaxi":
            total += 3.5
            alert("Abacaxi, a 3.5 reais, adicionado com sucesso. Valor total da compra é " + total + " reais.")
            break;

        case "banana":
            total += 2
            alert("Banana, a 2 reais, adicionada com sucesso. Valor total da compra é " + total + " reais.")
            break;

        case "maca":
            total += 4
            alert("Maçã, a 4 reais, adicionada com sucesso. Valor total da compra é " + total + " reais.")
            break;

        default:
            alert("Por gentileza, seleciona uma fruta!")
            break;
    }
}

function finalizar() {
    alert("Sua compra foi finalizada com sucesso, o total da sua compra é de " + total + " reais.")
    total = 0
}