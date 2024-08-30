let produtos = [
    {
        valor: 99.99,
        imagem: "https://storage.alboom.ninja/sites/9123/albuns/1108559/fotografia-moda-lauro-de-freitas-moda-feminina-fotografia-loja-roupa-salvador-moda-praia-do-forte-moda-loja-roupa-feminina-blackfriday-natal-acessorios-femininos__14_.jpeg?t=1672060574"
    },
    {
        valor: 109.99,
        imagem: "https://storage.alboom.ninja/sites/9123/albuns/1108559/fotografia-moda-lauro-de-freitas-moda-feminina-fotografia-loja-roupa-salvador-moda-praia-do-forte-moda-loja-roupa-feminina-blackfriday-natal-acessorios-femininos__2_.jpeg?t=1672060555"
    },
    {
        valor: 119.99,
        imagem: "https://storage.alboom.ninja/sites/9123/albuns/1108559/fotografia-moda-lauro-de-freitas-moda-feminina-fotografia-loja-roupa-salvador-moda-praia-do-forte-moda-loja-roupa-feminina-blackfriday-natal-acessorios-femininos__18_.jpeg?t=1672060577"
    },
    {
        valor: 129.99,
        imagem: "https://storage.alboom.ninja/sites/9123/albuns/1108559/fotografia-moda-lauro-de-freitas-moda-feminina-fotografia-loja-roupa-salvador-moda-praia-do-forte-moda-loja-roupa-feminina-blackfriday-natal-acessorios-femininos__13_.jpeg?t=1672060573"
    },
    {
        valor: 139.99,
        imagem: "https://storage.alboom.ninja/sites/9123/albuns/1108559/fotografia-moda-lauro-de-freitas-moda-feminina-fotografia-loja-roupa-salvador-moda-praia-do-forte-moda-loja-roupa-feminina-blackfriday-natal-acessorios-femininos__4_.jpeg?t=1672060558"
    },
    {
        valor: 89.99,
        imagem: "https://storage.alboom.ninja/sites/9123/albuns/1108559/fotografia-moda-lauro-de-freitas-moda-feminina-fotografia-loja-roupa-salvador-moda-praia-do-forte-moda-loja-roupa-feminina-blackfriday-natal-acessorios-femininos__3_.jpeg?t=1672060558"
    }
]

function criaCatalogo() {
    const catalogoSessao = document.getElementById("catalogo")
    
    for (let index = 0; index < produtos.length; index++) {
        catalogoSessao.innerHTML += `
        <div>
            <img src="${produtos[index].imagem}">
            <p>R$ ${produtos[index].valor}</p>
        </div> 
        `
    }
}