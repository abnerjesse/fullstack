let foodList = [];
let foodListOrigin;

function addFood() {
    let desc = document.getElementById("foodDesc").value
    let price = document.getElementById("foodPrice").value
    let url = document.getElementById("foodUrl").value
    let shipping = document.getElementById("shipping")

    let food = {
        descricao: desc,
        valor: price,
        imagem: url,
        frete: (shipping.checked) ? "Entrega grátis!" : ""
    }
    foodList.push(food)
    showMenu()
    clearForm()
}

function showMenu() {
    const foodMenu = document.getElementById("menu")

    // Limpa o conteúdo existente antes de adicionar novos itens
    foodMenu.innerHTML = "";

    for (let index = 0; index < foodList.length; index++) {
        foodMenu.innerHTML += `
        <div class="produto">
            <img src="${foodList[index].imagem}">
            <div class="produtoDetalhe">
                <p class="produtoTitulo">${foodList[index].descricao}</p>
                <p class="produtoValor">R$ ${foodList[index].valor}</p>
                <p class="produtoFrete">${foodList[index].frete}</p>
            </div>
        </div> 
        `
    }
}

function clearForm() {
    document.getElementById("foodDesc").value = ""
    document.getElementById("foodPrice").value = ""
    document.getElementById("foodUrl").value = ""
    document.getElementById("shipping").checked = false
}

function findFood() {
    const foodFind = document.getElementById("foodFind").value.toLowerCase();
    const foodShipping = document.getElementById("freeShipping");

    // Salva o catálogo original antes de aplicar o filtro
    foodListOrigin = [...foodList];

    foodList = foodList.filter((f) => {
        // Verifica se a descrição contém a palavra buscada
        const matchDescription = f.descricao.toLowerCase().includes(foodFind);
        // Verifica se o checkbox de frete grátis está marcado e se o item tem "Entrega grátis"
        const matchFrete = foodShipping.checked ? f.frete === "Entrega grátis!" : true;

        // Retorna true apenas se a descrição corresponder e se o filtro de frete for atendido
        return matchDescription && matchFrete;
    });

    // Limpa o input de busca
    document.getElementById("foodFind").value = "";

    // Atualiza o menu com os itens filtrados
    showMenu();

    // Restaura a lista original
    foodList = [...foodListOrigin]; // Faz uma cópia do foodListOrigin para foodList
}

function clearFilter() {
    // Restaura a lista original
    foodList = [...foodListOrigin]; // Faz uma cópia do foodListOrigin para foodList
    document.getElementById("foodFind").value = ""; // Limpa o campo de busca
    document.getElementById("freeShipping").checked = false; // Desmarca o checkbox de frete grátis
    document.getElementById("menu").innerHTML = ""; // Limpa o menu
    showMenu(); // Exibe a lista original
}