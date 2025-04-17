//A parte de baixo é referente a aula sobre modularização (week11-aula3).
module.exports = {
    add(n1, n2) {
        return n1 + n2
    },

    sub(n1, n2) {
        return n1 - n2
    },

    mul(n1, n2) {
        return n1 * n2
    },

    div(n1, n2) {
        if (n2 > 0) return n1 / n2
        return null
    }
}



//A parte de baixo é referente a aula inicial (week11-aula2), criando uma calculadora, as funções básicas com execução.

// function add(n1, n2) {
//     return n1 + n2
// }

// function sub(n1, n2) {
//     return n1 - n2
// }

// function mul(n1, n2) {
//     return n1 * n2
// }

// function div(n1, n2) {
//     if (n2 > 0) return n1 / n2
//     return null
// }

// console.log("O resultado da some é " + add(2, 3) + "!");
// console.log(`O resultado da subtração é ${sub(2, 3)}!`);
// console.log(`O resultado da multiplicação é ${mul(2, 3)}!`);

// let divResult = div(20, 0)
// if (divResult != null) console.log(`O resultado da divisão é ${divResult}!`)
// else console.log(`O divisor deve ser maior que zero!`)
