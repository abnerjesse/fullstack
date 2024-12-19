let cart = [];

let tshirtP = document.getElementById("tshirtP");
let tshirtM = document.getElementById("tshirtM");
let tshirtG = document.getElementById("tshirtG");

let cartTable = document.getElementById("cartList").querySelector("tbody");
let cartTotal = document.getElementById("cartTotal");

const P = 10;
const M = 12;
const G = 15;

let cTotal = 0;
let orderId = 0;

function calcCart() {
    let teeP = parseInt(tshirtP.value);
    let teeM = parseInt(tshirtM.value);
    let teeG = parseInt(tshirtG.value);

    // Validação
    if (isNaN(teeP) || teeP <= 0 || isNaN(teeM) || teeM <= 0 || isNaN(teeG) || teeG <= 0) {
        alert("Preencha todos os campos com valores maiores que zero!");
        return;
    }

    let orderTotal = teeP * P + teeM * M + teeG * G;
    cTotal += orderTotal;
    orderId += 1;

    // Adicionar pedido ao array
    const order = { id: orderId, p: teeP, m: teeM, g: teeG, t: orderTotal };
    cart.push(order);

    // Limpar campos
    clearInput();

    // Atualizar tabela
    printCart();
}

function printCart() {
    cartTable.innerHTML = "";
    let newCTotal = 0;

    cart.forEach(order => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${order.p}</td>
            <td>${order.m}</td>
            <td>${order.g}</td>
            <td>R$ ${order.t.toFixed(2)}</td>
            <td><span onclick="deleteOrder(${order.id})">Excluir</span></td>
            <td><span onclick="editOrder(${order.id})">Editar</span></td>
        `;
        cartTable.appendChild(row);
        newCTotal += order.t;
    });

    cTotal = newCTotal;
    cartTotal.innerHTML = `<p>Total: R$ ${cTotal.toFixed(2)}</p>`;
}

function clearInput() {
    tshirtP.value = "";
    tshirtM.value = "";
    tshirtG.value = "";
}

function deleteOrder(id) {
    const orderIndex = cart.findIndex(order => order.id === id);
    if (orderIndex !== -1) {
        cTotal -= cart[orderIndex].t;
        cart.splice(orderIndex, 1);
        printCart();
    }
}

function editOrder(id) {
    const orderIndex = cart.findIndex(order => order.id === id);
    if (orderIndex !== -1) {
        const order = cart[orderIndex];
        tshirtP.value = order.p;
        tshirtM.value = order.m;
        tshirtG.value = order.g;

        // Remover pedido do carrinho
        cTotal -= order.t;
        cart.splice(orderIndex, 1);

        printCart();
    }
}

// Tornar as funções globais
window.calcCart = calcCart;
window.deleteOrder = deleteOrder;
window.editOrder = editOrder;

document.getElementById("bntCalc").addEventListener("click", calcCart);