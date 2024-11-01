let valueTag = document.getElementById("value")
let percentageTag = document.getElementById("percentage")
let resultTag = document.getElementById("printResult")

function calcPercentage() {

    let value = valueTag.value
    let percentage = percentageTag.value


    let result = value * (percentage / 100)

    resultTag.innerHTML = `
        <p>${result} é ${percentage}% de ${value}</p>
    `
    clearInput()
}

function clearInput() {
    valueTag.value = ''
    percentageTag.value = ''
}

document.getElementById("bntCalc").onclick = calcPercentage