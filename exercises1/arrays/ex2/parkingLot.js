let carArray = [];

// Elementos
const tagBrand = document.getElementById("brand");
const tagModel = document.getElementById("model");
const tagYear = document.getElementById("year");

function addCar() {
    const carBrand = tagBrand.value.trim();
    const carModel = tagModel.value.trim();
    const carYear = parseInt(tagYear.value);

    // Validação
    if (!carBrand || !carModel || isNaN(carYear)) {
        alert("Preencha todos os campos corretamente!");
        return;
    }

    // Adicionar carro ao array
    const car = { brand: carBrand, model: carModel, year: carYear };
    carArray.push(car);

    // Limpar campos
    tagBrand.value = "";
    tagModel.value = "";
    tagYear.value = "";

    // Atualizar tabela
    printCars();
}

function printCars() {
    const tagTableBody = document.getElementById("carList").querySelector("tbody");
    tagTableBody.innerHTML = "";

    carArray.forEach(car => {
        const row = document.createElement("tr");
        row.innerHTML = `
      <td>${car.brand}</td>
      <td>${car.model}</td>
      <td>${car.year}</td>
    `;
        tagTableBody.appendChild(row);
    });
}

function carDetail() {
    if (carArray.length === 0) {
        alert("Nenhum carro cadastrado!");
        return;
    }

    const years = carArray.map(car => car.year);
    const newerYear = Math.max(...years);
    const olderYear = Math.min(...years);
    const avgYear = calculateAverage(years);

    const newerCar = carArray.find(car => car.year === newerYear);
    const olderCar = carArray.find(car => car.year === olderYear);

    document.getElementById("output-result").innerHTML = `
    <p><strong>Mais Novo:</strong> ${newerCar.model}, ${newerCar.year}</p>
    <p><strong>Mais Velho:</strong> ${olderCar.model}, ${olderCar.year}</p>
    <p><strong>Média:</strong> ${avgYear}</p>
  `;
}

function calculateAverage(numbers) {
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return Math.round(sum / numbers.length);
}

// Eventos
document.getElementById("btnAdd").onclick = addCar;
document.getElementById("btnResult").onclick = carDetail;