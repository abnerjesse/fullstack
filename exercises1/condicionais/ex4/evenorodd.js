const tagNumber = document.getElementById("num");

function evenOrOdd() {
    const number = Number(tagNumber.value);

    if (isNaN(number)) {
        alert("Por favor, insira um número válido.");
        return;
    }

    if (number % 2 === 0) {
        alert("É par!");
    } else {
        alert("É ímpar!");
    }

    tagNumber.value = "";  // Limpa o campo de entrada após o cálculo
}

document.getElementById("discover").onclick = evenOrOdd;