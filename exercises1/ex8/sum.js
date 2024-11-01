let number1 = document.getElementById("number1")
let number2 = document.getElementById("number2")

function sumAlert() {

    let n1 = parseFloat(number1.value)
    let n2 = parseFloat(number2.value)

    let sum = parseFloat(n1 + n2)

    alert(sum)

    clearInput()
}

function clearInput() {
    number1.value = ''
    number2.value = ''
}

document.getElementById("bntCalc").onclick = sumAlert