let clients = []

async function findZip() {
    let zipCode = document.getElementById("cep").value
    let zipCodeObj = await fetch(`https://viacep.com.br/ws/${zipCode}/json/`)
    let zipCodeData = await zipCodeObj.json()

    document.getElementById("address1").value = zipCodeData.logradouro
    document.getElementById("address2").value = zipCodeData.complemento
    document.getElementById("district").value = zipCodeData.bairro
    document.getElementById("city").value = zipCodeData.localidade
    document.getElementById("state").value = zipCodeData.estado
}

function clientSubmit() {
    let newClient = {}

    newClient.name = document.getElementById("name").value
    newClient.age = document.getElementById("age").value
    newClient.gender = document.getElementById("gender").value
    newClient.cep = document.getElementById("cep").value
    newClient.address1 = document.getElementById("address1").value
    newClient.address2 = document.getElementById("address2").value
    newClient.district = document.getElementById("district").value
    newClient.city = document.getElementById("city").value
    newClient.state = document.getElementById("state").value

    clients.push(newClient)
    listClients()
    alert("Cliente cadastrado!")
    clearForm()
}

function listClients() {
    let clientBuffer = document.getElementById("clientList")

    clientBuffer.innerHTML = ""
    for (let index = 0; index < clients.length; index++) {
        clientBuffer.innerHTML += `
            <div class="clientCard">
                <p><span class="label">Nome:</span> <span class="value">${clients[index].name}</span></p>
                <p><span class="label">Idade:</span> <span class="value">${clients[index].age}</span></p>
                <p><span class="label">Sexo:</span> <span class="value">${clients[index].gender}</span></p>
                <p><span class="label">CEP:</span> <span class="value">${clients[index].cep}</span></p>
                <p><span class="label">Logradouro:</span> <span class="value">${clients[index].address1}</span></p>
                <p><span class="label">Complemento:</span> <span class="value">${clients[index].address2}</span></p>
                <p><span class="label">Bairro:</span> <span class="value">${clients[index].district}</span></p>
                <p><span class="label">Cidade:</span> <span class="value">${clients[index].city}</span></p>
                <p><span class="label">Estado:</span> <span class="value">${clients[index].state}</span></p>
            </div>
        `
    }
}

function clearForm() {
    document.getElementById("name").value = ""
    document.getElementById("age").value = ""
    document.getElementById("gender").value = ""
    document.getElementById("cep").value = ""
    document.getElementById("address1").value = ""
    document.getElementById("address2").value = ""
    document.getElementById("district").value = ""
    document.getElementById("city").value = ""
    document.getElementById("state").value = ""
}