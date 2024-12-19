let tagInput = document.getElementById('number');
let tagTable = document.getElementById("table").querySelector("tbody");


function generateMultiplicationTable() {
    const num = parseFloat(tagInput.value); // Converter o valor para número de ponto flutuante

    // Validação
    if (isNaN(num) || tagInput.value.trim() === '') {
        alert("Campo de número obrigatório!");
        return;
    } else if (!Number.isInteger(num)) {
        alert("Por favor, insira um número inteiro!");
        return;
    } else if (num < 0 || num > 10) {
        alert("O valor deve estar entre 0 e 10!");
        return;
    }

    tagTable.innerHTML = ''

    for (let index = 0; index < 10; index++) {
        const row = document.createElement("tr");
        let calc = num * index
        row.innerHTML = `
            <td>${num}x${index}</td>
            <td>${calc}</td>
        `;
        tagTable.appendChild(row);
    }

    tagInput.value = ''
}

document.getElementById("btn").addEventListener("click", generateMultiplicationTable);