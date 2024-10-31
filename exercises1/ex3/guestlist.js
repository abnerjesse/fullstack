let guests = []

function addGuest() {
    let guest = document.getElementById("name")
    let guestName = guest.value.trim()

    guests.push(guestName)


    clearInput()
    printGuestList()
}

function clearInput() {
    document.getElementById("name").value = ''
}

function printGuestList() {
    let guestList = document.getElementById("list")
    guestList.innerHTML = ''
    guests.forEach(name => {
        guestList.innerHTML += `
            <li>${name}</li>
        `
    });

}

document.getElementById("bntAdd").onclick = addGuest
