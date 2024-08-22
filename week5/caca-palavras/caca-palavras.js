function buscarPalavra() {
    let frase = document.getElementById("frase").value
    let palavra = document.getElementById("palavra").value

    let divResultado = document.querySelector(".resultado")

    return (frase.includes(palavra) ? divResultado.innerHTML = `<p>Palavra '${palavra}' encontrada!</p>` : divResultado.innerHTML = "<p>Palavra '" + palavra + "' não encontrada!</p>")
}