let areaTag = document.getElementById("area")
let peopleTag = document.getElementById("people")
let devicesTag = document.getElementById("devices")

function btusCalc() {

    let a = parseFloat(areaTag.value)
    let p = parseInt(peopleTag.value)
    let d = parseInt(devicesTag.value)

    let finalArea = a * 600
    let finalPeole = 0
    if (p > 1) { finalPeole = (p - 1) * 600 }
    let finalDevice = d * 600

    let btus = parseInt(finalArea + finalPeole + finalDevice)

    alert(`A potência do ar deve ser de ${btus} BTUS`)

    clearInput()
}

function clearInput() {
    areaTag.value = ''
    peopleTag.value = ''
    devicesTag.value = ''
}

document.getElementById("bntCalc").onclick = btusCalc