function startTimer() {
    let min = parseInt(document.getElementById("min").value) -1;
    let sec = 59;

    // Função para iniciar e atualizar o temporizador a cada segundo
    function updateTimer() {
        if (min === 0 && sec === 0) {
            document.getElementById("showTimer").innerHTML = "Tempo esgotado!";
            return; // Para o temporizador quando atingir 00:00
        }

        document.getElementById("showTimer").innerHTML = `${checkTime(min)}:${checkTime(sec)}`;

        sec -= 1;
        if (sec < 0) {
            sec = 59;
            min -= 1;
        }

        setTimeout(updateTimer, 1000); // Chama a função novamente após 1 segundo
    }

    document.getElementById("min").value = ""
    updateTimer(); // Inicia o temporizador
}

// Adiciona um zero à esquerda para valores menores que 10
function checkTime(i) {
    return i < 10 ? "0" + i : i;
}