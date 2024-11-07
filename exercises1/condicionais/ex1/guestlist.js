let guests = [];
let id = 0;
let editingId = null;

function addGuest() {
    const tagName = document.getElementById("name");
    const tagAge = document.getElementById("age");
    const tagGender = document.querySelector('input[name="gender"]:checked');

    let name = tagName.value;
    let age = tagAge.value;
    let gender = tagGender ? tagGender.value : "";

    if (name === "" || age === "" || gender === "") {
        alert("Preencha o formulário corretamente!");
        return;
    }

    if (age <= 0) {
        alert("A idade deve ser um número positivo!");
        return;
    }

    if (editingId !== null) {
        // Atualiza o convidado existente
        const guestIndex = guests.findIndex(g => g.id === editingId);
        if (guestIndex !== -1) {
            guests[guestIndex] = { id: editingId, name, age, gender };
            editingId = null;
        }
    } else {
        // Adiciona um novo convidado
        id++;
        let guest = new Guest(id, name, age, gender);
        guests.push(guest);
    }

    printGuests();
    clearInput();
}

function printGuests() {
    const tagTableBody = document.getElementById("guestList").querySelector("tbody");
    tagTableBody.innerHTML = "";

    guests.forEach((guest) => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${guest.id}</td>
            <td>${guest.name}</td>
            <td>${guest.age}</td>
            <td>${guest.gender}</td>
            <td>
                <!-- Adicionando 'aria-label' para os botões de ação -->
                <img src="img/delete.png" alt="Excluir" class="delete-btn" data-id="${guest.id}" aria-label="Excluir convidado" />
                <img src="img/edit.png" alt="Editar" class="edit-btn" data-id="${guest.id}" aria-label="Editar convidado" />
            </td>
        `;
        tagTableBody.appendChild(row);
    });
}

// Use Event Delegation para acionar eventos de edição e exclusão
document.getElementById("guestList").addEventListener("click", (event) => {
    const target = event.target;

    if (target.classList.contains("delete-btn")) {
        const guestId = parseInt(target.getAttribute("data-id"));
        deleteGuest(guestId);
    } else if (target.classList.contains("edit-btn")) {
        const guestId = parseInt(target.getAttribute("data-id"));
        editGuest(guestId);
    }
});

function deleteGuest(guestId) {
    if (confirm("Tem certeza que deseja excluir este convidado?")) {
        guests = guests.filter(guest => guest.id !== guestId);
        printGuests();
    }
}

function editGuest(guestId) {
    const guest = guests.find(g => g.id === guestId);

    if (guest) {
        document.getElementById("name").value = guest.name;
        document.getElementById("age").value = guest.age;
        document.querySelector(`input[name="gender"][value="${guest.gender}"]`).checked = true;
        editingId = guestId;
    }
}

function clearInput(reset = true) {
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    if (reset) {
        document.querySelectorAll('input[name="gender"]').forEach(input => input.checked = false);
    }
    editingId = null;
}

class Guest {
    constructor(id, name, age, gender) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

document.getElementById("bntAddGuest").onclick = addGuest;