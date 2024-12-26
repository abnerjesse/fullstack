const calculadora = require('./calculadora')

console.log("O resultado da some é " + calculadora.add(2, 3) + "!");
console.log(`O resultado da subtração é ${calculadora.sub(2, 3)}!`);
console.log(`O resultado da multiplicação é ${calculadora.mul(2, 3)}!`);

let divResult = calculadora.div(20, 0)
if (divResult != null) console.log(`O resultado da divisão é ${divResult}!`)
else console.log(`O divisor deve ser maior que zero!`)
