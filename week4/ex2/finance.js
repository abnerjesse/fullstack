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
    // if (entradas.length === 0) {
    //     document.getElementById('receitas').textContent = 'Total das receitas: -';
    //     document.getElementById('situacaoBalanco').textContent = 'Balanço: -';
    //     document.getElementById('situacaoBalanco').className = 'situacao';
    //     return;
    // }
    // if (saidas.length === 0) {
    //     document.getElementById('despesas').textContent = 'Total das despesas: -';
    //     document.getElementById('situacaoBalanco').textContent = 'Balanço: -';
    //     document.getElementById('situacaoBalanco').className = 'situacao';
    //     return;
    // }

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

    let cor;

    if (balanco == 0) {
        cor = 'black';
    } else if (balanco < 0) {
        cor = 'red';
    } else {
        cor = 'green';
    }

    document.getElementById('receitas').textContent = `Total das despesas: R$ ${income.toFixed(1)}`;
    // document.getElementById('receitas').className = `situacao ${cor}`;
    document.getElementById('despesas').textContent = `Total das despesas: R$ ${outcome.toFixed(1)}`;
    // document.getElementById('despesas').className = `situacao ${cor}`;
    document.getElementById('situacaoBalanco').textContent = `Balanço: R$ ${balanco.toFixed(1)}`;
    document.getElementById('situacaoBalanco').className = `situacao ${cor}`;
}