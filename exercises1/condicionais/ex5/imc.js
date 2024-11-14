const tagWeight = document.getElementById("weight");
const tagHeight = document.getElementById("height");
const tagResult = document.getElementById("show-result");

function calculateIMC() {
    const weight = parseFloat(tagWeight.value);
    const height = parseFloat(tagHeight.value);
    return ((weight / (height * height)) * 10000).toFixed(1);
}

function calculate() {
    const imc = calculateIMC();
    tagResult.innerHTML = `<p>O seu IMC é ${imc}</p>`;
    tagResult.className = "result";
}

function classify() {
    const imc = parseFloat(calculateIMC());
    let situacao = '';
    let classe = '';

    if (imc < 18.5) {
        situacao = "Magreza";
        classe = "magreza";
    } else if (imc < 24.9) {
        situacao = "Ideal";
        classe = "ideal";
    } else if (imc < 30) {
        situacao = "Sobrepeso";
        classe = "sobrepeso";
    } else {
        situacao = "Obesidade";
        classe = "obesidade";
    }

    tagResult.innerHTML = `<p>IMC: ${imc} - ${situacao}</p>`;
    tagResult.className = `result ${classe}`;
}

document.getElementById("calculate").onclick = calculate;
document.getElementById("classify").onclick = classify;