function buscarPalavra() {
    let frase = document.getElementById("frase").value
    let palavra = document.getElementById("palavra").value

    console.log(frase, palavra)
    
    alert(frase.includes(palavra) ? palavra : "Palavra não encontrada")
}