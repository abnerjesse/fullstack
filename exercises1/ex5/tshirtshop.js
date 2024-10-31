let tshirtP = document.getElementById("tshirtP")
let tshirtM = document.getElementById("tshirtM")
let tshirtG = document.getElementById("tshirtG")
let cartTotal = document.getElementById("printCart")
const P = 10
const M = 12
const G = 15

function calcCart() {

    let teeP = parseInt(tshirtP.value)
    let teeM = parseInt(tshirtM.value)
    let teeG = parseInt(tshirtG.value)

    let total = (teeP * P) + (teeM * M) + (teeG * G)

    cartTotal.innerHTML = `
        <p>${teeP}x Camiseta P, ${teeM}x Camiseta M, ${teeG}x Camiseta G | Total: R$ ${total}</p>
    `
    clearInput()
}

function clearInput() {
    tshirtP.value = ''
    tshirtM.value = ''
    tshirtG.value = ''
}

document.getElementById("bntCalc").onclick = calcCart