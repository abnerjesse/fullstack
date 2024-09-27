let produtos = [
    {
        valor: 99.99,
        imagem: "https://storage.alboom.ninja/sites/9123/albuns/1108559/fotografia-moda-lauro-de-freitas-moda-feminina-fotografia-loja-roupa-salvador-moda-praia-do-forte-moda-loja-roupa-feminina-blackfriday-natal-acessorios-femininos__14_.jpeg?t=1672060574",
        descricao: "Vestido Florido"
    },
    {
        valor: 109.99,
        imagem: "https://storage.alboom.ninja/sites/9123/albuns/1108559/fotografia-moda-lauro-de-freitas-moda-feminina-fotografia-loja-roupa-salvador-moda-praia-do-forte-moda-loja-roupa-feminina-blackfriday-natal-acessorios-femininos__2_.jpeg?t=1672060555",
        descricao: "Vestido Laranja"
    },
    {
        valor: 119.99,
        imagem: "https://storage.alboom.ninja/sites/9123/albuns/1108559/fotografia-moda-lauro-de-freitas-moda-feminina-fotografia-loja-roupa-salvador-moda-praia-do-forte-moda-loja-roupa-feminina-blackfriday-natal-acessorios-femininos__18_.jpeg?t=1672060577",
        descricao: "Vestido Amarelo"
    },
    {
        valor: 129.99,
        imagem: "https://storage.alboom.ninja/sites/9123/albuns/1108559/fotografia-moda-lauro-de-freitas-moda-feminina-fotografia-loja-roupa-salvador-moda-praia-do-forte-moda-loja-roupa-feminina-blackfriday-natal-acessorios-femininos__13_.jpeg?t=1672060573",
        descricao: "Conjunto Laranja"
    },
    {
        valor: 139.99,
        imagem: "https://storage.alboom.ninja/sites/9123/albuns/1108559/fotografia-moda-lauro-de-freitas-moda-feminina-fotografia-loja-roupa-salvador-moda-praia-do-forte-moda-loja-roupa-feminina-blackfriday-natal-acessorios-femininos__4_.jpeg?t=1672060558",
        descricao: "Vestido Azul"
    },
    {
        valor: 89.99,
        imagem: "https://storage.alboom.ninja/sites/9123/albuns/1108559/fotografia-moda-lauro-de-freitas-moda-feminina-fotografia-loja-roupa-salvador-moda-praia-do-forte-moda-loja-roupa-feminina-blackfriday-natal-acessorios-femininos__3_.jpeg?t=1672060558",
        descricao: "Vestido Verde"
    }
]

let produtosCatalogo

function criaCatalogo() {
    const catalogoSessao = document.getElementById("catalogo")

    for (let index = 0; index < produtos.length; index++) {
        catalogoSessao.innerHTML += `
        <div class="produto">
            <img src="${produtos[index].imagem}">
            <div class="produtoDetalhe">
                <p class="produtoTitulo">${produtos[index].descricao}</p>
                <p class="produtoValor">R$ ${produtos[index].valor}</p>
            </div>
        </div> 
        `
    }
}

function buscarProd() {
    const buscaProd = document.getElementById("buscarProd")
    let busca = buscaProd.value

    produtosCatalogo = produtos //salva o catalogo original

    produtos = produtos.filter((p) => {
        return p.descricao.toLowerCase().includes(busca.toLowerCase())
    })

    buscaProd.value = "" //limpa o input de busca
    document.getElementById("catalogo").innerHTML = ""
    criaCatalogo()
    produtos = produtosCatalogo //restaura o backup do catalogo
}

function limpar() {
    produtos = produtosCatalogo //restaura o backup do catalogo
    document.getElementById("catalogo").innerHTML = ""
    criaCatalogo()
}