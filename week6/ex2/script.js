// Recupera as notas do Local Storage ou inicializa um novo array
function getNotas() {
    const notas = localStorage.getItem('notas');
    return notas ? JSON.parse(notas) : [];
}

// Salva o array de notas no Local Storage
function saveNotas(notas) {
    localStorage.setItem('notas', JSON.stringify(notas));
}

function adicionarNota() {
    const notaInput = document.getElementById('newNote');
    const nota = parseFloat(notaInput.value);

    if (isNaN(nota) || nota < 0 || nota > 10) {
        alert('Por favor, digite uma nota válida entre 0 e 10.');
        return;
    }

    const notas = getNotas();
    notas.push(nota);
    saveNotas(notas);
    notaInput.value = '';
    printNotas();
}

function printNotas() {
    const notas = getNotas();
    document.getElementById("notas").textContent = `Notas: ${notas.join(", ")}`;
}

function limparNotas() {
    localStorage.removeItem('notas');
    printNotas();
}

function goToSubs() {
    window.location.href = 'nota-substitutiva.html';
}

// Inicializa a visualização das notas quando a página carrega
document.addEventListener('DOMContentLoaded', printNotas);

// Recupera as notas do Local Storage
function getNotas() {
    const notas = localStorage.getItem('notas');
    return notas ? JSON.parse(notas) : [];
}

// Salva o array de notas no Local Storage
function saveNotas(notas) {
    localStorage.setItem('notas', JSON.stringify(notas));
}

function substituirNota() {
    const notaSubs = document.getElementById('newNoteSubs');
    const nota = parseFloat(notaSubs.value);

    if (isNaN(nota) || nota < 0 || nota > 10) {
        alert('Por favor, digite uma nota válida entre 0 e 10.');
        return;
    }

    let notas = getNotas();
    const menorNota = Math.min(...notas);
    
    // Substitui a menor nota se a nova nota for maior
    if (nota > menorNota) {
        notas[notas.indexOf(menorNota)] = nota;
        saveNotas(notas);
        printNotas();
    } else {
        alert('A nota substitutiva deve ser maior que a menor nota atual.');
    }
    atualizarResultados();
    notaSubs.value = '';
}

function atualizarResultados() {
    const notas = getNotas();
    
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

    document.getElementById('situacaoNota').innerHTML = `Situação: <span class="situacao ${cor}">${situacao}</span>`;
}

function printNotas() {
    const notas = getNotas();
    document.getElementById("notas").textContent = `Notas: ${notas.join(", ")}`;
}

// Navega para a página de notas
function goToNotes() {
    window.location.href = 'notas.html';
    limparNotas();
}

// Limpa as notas do Local Storage e atualiza a visualização
function limparNotas() {
    localStorage.removeItem('notas');
    printNotas();
}

// Inicializa a visualização dos resultados quando a página carrega
document.addEventListener('DOMContentLoaded', () => {
    printNotas();
    atualizarResultados();
});
