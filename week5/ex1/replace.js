function replaceWord() {
    let p = document.getElementById("phrase").value
    let wIn = document.getElementById("wordIn").value
    let wOut = document.getElementById("wordOut").value


    if (!(p.includes(wIn))) {
        alert("Palavra não encontrada! Busque outra palavra.")
        document.getElementById("wordIn").value = ''
    } else {

        let newPhrase = p.replace(wIn, wOut)

        // Exibir a nova frase
        document.getElementById("resultPhrase").innerText = `${newPhrase}`
    }

}