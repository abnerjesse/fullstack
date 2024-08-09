let notas = [];

function adicionarNota() {
    const notaInput = document.getElementById('notaInput');
    const nota = parseFloat(notaInput.value);

    if (isNaN(nota) || nota < 0 || nota > 10) {
        alert('Por favor, digite uma nota válida entre 0 e 10.');
        return;
    }

    notas.push(nota);
    notaInput.value = '';
    printNotas();
    atualizarResultados();
}

function atualizarResultados() {
    if (notas.length === 0) {
        document.getElementById('maiorNota').textContent = 'Maior Nota: -';
        document.getElementById('menorNota').textContent = 'Menor Nota: -';
        document.getElementById('mediaNota').textContent = 'Média: -';
        document.getElementById('situacaoNota').textContent = 'Situação: -';
        document.getElementById('situacaoNota').className = 'situacao';
        return;
    }

    const maiorNota = Math.max(...notas);
    const menorNota = Math.min(...notas);
    const mediaNota = notas.reduce((acc, curr) => acc + curr, 0) / notas.length;

    let situacao;
    let cor;

    if (mediaNota < 4) {
        situacao = 'REPROVADO';
        cor = 'reprovado';
    } else if (mediaNota >= 4 && mediaNota < 7) {
        situacao = 'RECUPERAÇÃO';
        cor = 'recuperacao';
    } else {
        situacao = 'APROVADO';
        cor = 'aprovado';
    }

    document.getElementById('maiorNota').textContent = `Maior Nota: ${maiorNota.toFixed(1)}`;
    document.getElementById('menorNota').textContent = `Menor Nota: ${menorNota.toFixed(1)}`;
    document.getElementById('mediaNota').textContent = `Média: ${mediaNota.toFixed(1)}`;
    document.getElementById('situacaoNota').textContent = `Situação: ${situacao}`;
    document.getElementById('situacaoNota').className = `situacao ${cor}`;
}

function printNotas() {
    document.getElementById("notas").textContent = `Notas: ${notas.join(", ")}`
}