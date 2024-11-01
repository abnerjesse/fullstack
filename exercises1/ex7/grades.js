let gradeInput1 = document.getElementById("grade1");
let gradeInput2 = document.getElementById("grade2");
let gradeInput3 = document.getElementById("grade3");
let studentTag = document.getElementById("studentResult");

let studentsPassed = 0;
let studentsFailed = 0;

function gradesCheck() {
    let grade1 = parseFloat(gradeInput1.value);
    let grade2 = parseFloat(gradeInput2.value);
    let grade3 = parseFloat(gradeInput3.value);

    // Validação para verificar se todas as notas são números válidos
    if (isNaN(grade1) || isNaN(grade2) || isNaN(grade3)) {
        alert("Por favor, insira todas as três notas.");
        return;
    }

    let avg = (grade1 + grade2 + grade3) / 3;
    let studentStatus;
    let statusColor;

    if (avg >= 7) {
        studentStatus = "APROVADO";
        statusColor = "green";
        studentsPassed += 1;
    } else if (avg > 4 && avg < 7) {
        studentStatus = "PROVA FINAL";
        statusColor = "yellow";
    } else {
        studentStatus = "REPROVADO";
        statusColor = "red";
        studentsFailed += 1;
    }

    // Atualizar o HTML
    studentTag.innerHTML = `
        <p style="color: ${statusColor};">${studentStatus}</p>
        <p>Qtd Aprovados: ${studentsPassed}</p>
        <p>Qtd Reprovados: ${studentsFailed}</p>
    `;

    clearInput();
}

function clearInput() {
    gradeInput1.value = "";
    gradeInput2.value = "";
    gradeInput3.value = "";
}

document.getElementById("bntCalc").onclick = gradesCheck;