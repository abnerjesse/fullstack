function salvar() {
    let nome = document.formulario.nome.value
    let email = document.formulario.email.value
    let idade = document.formulario.idade.value
    let tipo = document.formulario.tipo.value

    // let nome = document.getElementById("nome").value
    // let email = document.getElementById("email").value
    // let idade = document.getElementById("idade").value
    // let tipo = document.querySelector("input[type=radio]:checked").value

    let err = ""

    if (nome == "")
        err = err + "nome, "
    if (email == "")
        err += "email, "
    if (idade == "")
        err += "idade, "
    if (tipo == "")
        err += "tipo, "

    if (err != "") {
        alert("Os campos: " + err + "não foram preenchidos corretamente")
    } else {
        alert("Tudo certo!")
    }

    // if (nome == "")
    //     alert("Campo nome é obrigatório")
    // else if(email == "")
    //     alert("Campo email é obrigatório")
    // else if(idade == "")
    //     alert("Campo idade é obrigatório")
    // else if(tipo == "")
    //     alert("Campo tipo é obrigatório")

    // if (nome != "") {
    //     if (email != "") {
    //         if (idade != "") {
    //             if (tipo != "") {
    //                 alert("Tudo certo!")
    //             } else {
    //                 alert("Campo tipo é obrigatório")
    //             }
    //         } else {
    //             alert("Campo idade é obrigatório")
    //         }
    //     } else {
    //         alert("Campo email é obrigatório")
    //     }
    // } else {
    //     alert("Campo nome é obrigatório")
    // }
}