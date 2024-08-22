function buscarPalavra() {
    let frase = document.getElementById("frase").value
    let palavra = document.getElementById("palavra").value

    let divResultado = document.querySelector(".resultado")
    
    return (frase.includes(palavra) ? divResultado.innerText="Palavra encontrada!" : divResultado.innerText="Palavra não encontrada")
}