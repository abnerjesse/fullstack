function checkTriangle() {
    const lado1 = parseFloat(document.getElementById("lado1").value);
    const lado2 = parseFloat(document.getElementById("lado2").value);
    const lado3 = parseFloat(document.getElementById("lado3").value);

    // Verifica se todos os campos foram preenchidos corretamente
    if (!isFilled(lado1) || !isFilled(lado2) || !isFilled(lado3)) {
        alert("Por favor, preencha todos os campos com valores numéricos.");
        return;
    }

    // Verifica se os valores formam um triângulo válido
    if (!isTriangle(lado1, lado2, lado3)) {
        alert("Os valores informados não formam um triângulo válido.");
        return;
    }

    // Determina o tipo de triângulo
    if (lado1 === lado2 && lado2 === lado3) {
        alert("Esse triângulo é equilátero!");
    } else if (lado1 !== lado2 && lado2 !== lado3 && lado1 !== lado3) {
        alert("Esse triângulo é escaleno!");
    } else {
        alert("Esse triângulo é isósceles!");
    }
}

// Função auxiliar para verificar se um valor é preenchido e é um número válido maior que zero
function isFilled(value) {
    return !isNaN(value) && value > 0;
}

// Função auxiliar para verificar se os lados formam um triângulo válido pela desigualdade triangular
function isTriangle(a, b, c) {
    return (a + b > c) && (a + c > b) && (b + c > a);
}
