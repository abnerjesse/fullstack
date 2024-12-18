// let list = []

// function printList() {
//     let num = parseInt(document.getElementById("number").value)
//     document.getElementById("showList").innerHTML = ''

//     if (Number.isInteger(num) && num > 0) {
//         let numLoop = num
//         for (let index = 0; index < num; index++) {
//             list.push(numLoop)
//             numLoop--
//         }

//         document.getElementById("showList").innerHTML = `<p>${list.join(", ")}</p>`

//     } else {
//         alert('Digite um número inteiro maior que zero!')
//         document.getElementById("number").value = ''
//         document.getElementById("showList").innerHTML = ''
//     }
// }

// document.getElementById("btn").onclick = printList

function generateOrderedList() {
    const numInput = document.getElementById("number");
    const outputContainer = document.getElementById("showList");
    outputContainer.innerHTML = "";

    const num = parseInt(numInput.value);

    if (Number.isInteger(num) && num > 0) {
        const list = Array.from({ length: num }, (_, i) => i + 1);
        outputContainer.innerHTML = `<p>${list.join(", ")}</p>`;
        numInput.value = "";
    } else {
        alert("Digite um número inteiro maior que zero!");
        numInput.value = "";
    }
}

document.getElementById("btn").addEventListener("click", generateOrderedList);