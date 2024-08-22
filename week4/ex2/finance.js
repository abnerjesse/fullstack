let entradas = []
let saidas = []

function adicionarReceita() {
    const entradaInput = document.getElementById('adicionarReceita');
    const entrada = parseFloat(entradaInput.value);

    if (isNaN(entrada) || entrada < 0) {
        alert('Por favor, digite um valor válido.');
        entradaInput.value = '';
        return;
    }

    entradas.push(entrada);
    entradaInput.value = '';
    atualizarBalanco();
}

function adicionarDespesa() {
    const saidasInput = document.getElementById('adicionarDespesa');
    const saida = parseFloat(saidasInput.value);

    if (isNaN(saida) || saida < 0) {
        alert('Por favor, digite um valor válido.');
        saidasInput.value = '';
        return;
    }

    saidas.push(saida);
    saidasInput.value = '';
    atualizarBalanco();
}

function atualizarBalanco() {
    if (entradas.length === 0 && saidas.length === 0) {
        document.getElementById('receitas').textContent = 'Total das receitas: -';
        document.getElementById('despesas').textContent = 'Total das despesas: -';
        document.getElementById('situacaoBalanco').textContent = 'Balanço: -';
        document.getElementById('situacaoBalanco').className = 'situacao';
        return;
    }

    let income = entradas.reduce((acc, curr) => acc + curr, 0)
    let outcome = saidas.reduce((acc, curr) => acc + curr, 0)
    let balanco = income - outcome


    let corReceita = income === 0 ? 'black' : 'green';
    let corDespesa = outcome === 0 ? 'black' : 'red';
    let corBalanco = balanco === 0 ? 'black' : (balanco < 0 ? 'red' : 'green');

    // Atualizar o HTML com span para colorir os valores
    document.getElementById('receitas').innerHTML = `Total das receitas: R$ <span class="${corReceita}">${income.toFixed(1)}</span>`;
    document.getElementById('despesas').innerHTML = `Total das despesas: R$ <span class="${corDespesa}">${outcome.toFixed(1)}</span>`;
    document.getElementById('situacaoBalanco').innerHTML = `Balanço: R$ <span class="${corBalanco}">${balanco.toFixed(1)}</span>`;
    document.getElementById('situacaoBalanco').className = `situacao ${corBalanco}`;
}