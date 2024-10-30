let imc

async function convertCmToMt(h) {
    return parseFloat(h / 100)
}

async function imcCalc() {
    // Obtenha os valores dos inputs ao chamar a função
    let weight = parseFloat(document.getElementById("weight").value)
    let height = parseFloat(document.getElementById("height").value)

    let convertedHeight = await convertCmToMt(height)
    let squareHeight = (convertedHeight * convertedHeight)

    // Evite divisão por zero e certifique-se de que os valores são números
    if (!isNaN(weight) && squareHeight > 0) {
        imc = weight / squareHeight
    } else {
        imc = "Valor inválido"
    }
}

async function imcPrint() {
    let resultSection = document.getElementById("imcResult")

    await imcCalc()
    clearInput()
    resultSection.innerHTML = ''

    resultSection.innerHTML += `<p class="imcInfo">O seu IMC é: ${imc}</p>`
}

function clearInput() {
    document.getElementById("weight").value = ''
    document.getElementById("height").value = ''
}

document.getElementById("bntCalc").onclick = imcPrint