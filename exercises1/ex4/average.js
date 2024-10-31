let number1 = document.getElementById("number1")
let number2 = document.getElementById("number2")

function avgAlert() {

    let n1 = parseFloat(number1.value)
    let n2 = parseFloat(number2.value)

    alert((n1 + n2) / 2)

    clearInput()
}

function clearInput() {
    number1.value = ''
    number2.value = ''
}

document.getElementById("bntCalc").onclick = avgAlert