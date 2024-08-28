let numbers = []

function addNumber() {
    let number = document.getElementById("number").value

    if (number < 0) {
        alert("O número deve ser igual ou maior que zero! Digige outro número.")
        clear()
    } else {
        numbers.push(number)
        clear()
        imprimir()
    }
}

function imprimir() {
    // let addedNumbers = ""

    // for (let index = 0; index < numbers.length; index++) {
    //     if (index == 0) {
    //         addedNumbers += numbers[index]
    //     } else {
    //         addedNumbers += `, ${numbers[index]}`;
    //     }
    // }

    // document.getElementById("listas").innerText = `Números Adicionados: ${addedNumbers}`
    document.getElementById("listas").innerText = `Números Adicionados: ${numbers}`
}

function orderList() {
    let orderedList = numbers.map(num => parseFloat(num));

    for (let i = 0; i < orderedList.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < orderedList.length; j++) {
            if (orderedList[j] < orderedList[minIndex]) {
                minIndex = j;
            }
        }

        // Troca o elemento encontrado com o elemento na posição i
        if (minIndex !== i) {
            let temp = orderedList[i];
            orderedList[i] = orderedList[minIndex];
            orderedList[minIndex] = temp;
        }
    }

    document.getElementById("listas").innerHTML = `Números Adicionados: ${numbers}<br><br>Números Ordenados: ${orderedList}`

}

function clear() {
    document.getElementById("number").value = ""
}