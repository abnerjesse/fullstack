let guests = [];
let id = 0;
let editingId = null;

class Guest {
    constructor(id, name, age, gender) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

document.getElementById("btnAddGuest").onclick = addGuest;

function addGuest() {
    const name = document.getElementById("name").value.trim();
    const age = Number(document.getElementById("age").value);
    const gender = document.querySelector('input[name="gender"]:checked')?.value || "";

    if (!name || !age || !gender) {
        alert("Preencha todos os campos corretamente!");
        return;
    }

    if (age <= 0) {
        alert("A idade deve ser um número positivo!");
        return;
    }

    if (editingId !== null) {
        const guestIndex = guests.findIndex(g => g.id === editingId);
        if (guestIndex !== -1) {
            guests[guestIndex] = new Guest(editingId, name, age, gender);
            editingId = null;
        }
    } else {
        guests.push(new Guest(++id, name, age, gender));
    }

    printGuests();
    classify();
    clearInput();
}

function printGuests() {
    const tbody = document.querySelector("#guestList tbody");
    tbody.innerHTML = guests.map(guest => `
    <tr>
      <td>${guest.id}</td>
      <td>${guest.name}</td>
      <td>${guest.age}</td>
      <td>${guest.gender}</td>
      <td>
        <img src="img/delete.png" class="delete-btn" data-id="${guest.id}" alt="Excluir" />
        <img src="img/edit.png" class="edit-btn" data-id="${guest.id}" alt="Editar" />
      </td>
    </tr>
  `).join("");

    // Adiciona eventos de clique nos botões de ação
    document.querySelectorAll(".delete-btn").forEach(button => {
        button.addEventListener("click", deleteGuest);
    });

    document.querySelectorAll(".edit-btn").forEach(button => {
        button.addEventListener("click", editGuest);
    });
}

function deleteGuest(event) {
    const guestId = Number(event.target.dataset.id);
    guests = guests.filter(guest => guest.id !== guestId);

    printGuests();
    classify();
}

function editGuest(event) {
    const guestId = Number(event.target.dataset.id);
    const guest = guests.find(g => g.id === guestId);

    if (guest) {
        document.getElementById("name").value = guest.name;
        document.getElementById("age").value = guest.age;
        document.querySelector(`input[name="gender"][value="${guest.gender}"]`).checked = true;

        editingId = guest.id;
    }
}

function classify() {
    const classifications = {
        Crianças: guests.filter(g => g.age < 14).length,
        Adolescentes: guests.filter(g => g.age >= 14 && g.age < 18).length,
        Adultos: guests.filter(g => g.age >= 18 && g.age < 60).length,
        Idosos: guests.filter(g => g.age >= 60).length,
    };

    const tbody = document.querySelector("#guestClassify tbody");
    tbody.innerHTML = Object.entries(classifications).map(([key, value]) => `
    <tr>
      <td>${key}</td>
      <td>${value}</td>
    </tr>
  `).join("");
}

function clearInput() {
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.querySelectorAll('input[name="gender"]').forEach(input => input.checked = false);
    editingId = null;
}