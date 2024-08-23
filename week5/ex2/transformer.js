function upperWord() {
    let phrase = document.getElementById("phrase").value

    document.getElementById("resultPhrase").innerText = phrase.toUpperCase()
}
function lowerWord() {
    let phrase = document.getElementById("phrase").value

    document.getElementById("resultPhrase").innerText = phrase.toLowerCase()
}
function countWord() {
    let phrase = document.getElementById("phrase").value
    let count = phrase.length
    document.getElementById("resultPhrase").innerText = `O número de caracteres da frase é: ${count}`
}