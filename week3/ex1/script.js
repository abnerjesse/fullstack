function checkNumber() {
    let n = document.getElementById("num").value
    let div = (n % 2)

    if (div == 0) {
        alert(n + " é um número par!")
    } else {
        alert(n + " é um número ímpar!")
    }
}