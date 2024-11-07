let tagNum1 = document.getElementById("num1");
let tagNum2 = document.getElementById("num2");
let tagNum3 = document.getElementById("num3");

function checkNumber() {
    // Pegando os valores dos inputs dentro da função
    let n1 = parseFloat(tagNum1.value);
    let n2 = parseFloat(tagNum2.value);
    let n3 = parseFloat(tagNum3.value);

    // Verifica se algum campo está vazio
    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        alert("Todos os números devem ser preenchidos corretamente.");
        return;
    }

    // Verifica se todos os números são iguais
    if (n1 === n2 && n1 === n3) {
        alert("Todos os números digitados são iguais.");
        return;
    }

    // Encontrando o maior número
    let numbers = [n1, n2, n3];
    let maxNumber = Math.max(...numbers);

    // Exibindo o resultado
    alert(`${maxNumber} é o maior dos três números!`);
}

// Associando o evento ao botão
document.getElementById("bntCheckNumber").onclick = checkNumber;