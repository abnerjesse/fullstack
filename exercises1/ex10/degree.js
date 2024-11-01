let degreeInput = document.getElementById("degree")
let degreeOutput = document.getElementById("degreeResult")

function celsiusCalc() {

    let degree = degreeInput.value

    let celsius = ((degree - 32) / 9) * 5

    printDegreeC(celsius)

    clearInput()
}

function printDegreeC(d) {
    degreeOutput.innerHTML = ''
    degreeOutput.innerHTML = `
        <p>${d}°C</p>
    `
}
function farenheitCalc() {

    let degree = degreeInput.value

    let farenheit = ((degree / 5) * 9) + 32

    printDegreeF(farenheit)

    clearInput()
}

function printDegreeF(d) {
    degreeOutput.innerHTML = ''
    degreeOutput.innerHTML = `
        <p>${d}°F</p>
    `
}

function clearInput() {
    degreeInput.value = ''
}

document.getElementById("bntCelsius").onclick = celsiusCalc
document.getElementById("bntFarenheit").onclick = farenheitCalc