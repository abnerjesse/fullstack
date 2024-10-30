document.body.onload = printClientList

let clients = {

}

function printClientList() {
    let table = document.getElementById("tableList")
    table.innerHTML += `
        <table>
            <thead>
                <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>CPF</th>
                <th>Foto</th>
                <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>Jão da Silva</td>
                <td>11111111111</td>
                <td><img src="img/man.png" alt="man"></td>
                <td><img src="img/bin.png" alt="man"><img src="img/edit.png" alt="man"></td>
                </tr>
                <tr>
                <td>2</td>
                <td>Maria de Jesus</td>
                <td>22222222222</td>
                <td><img src="img/woman.png" alt="woman"></td>
                <td><img src="img/bin.png" alt="man"><img src="img/edit.png" alt="man"></td>
                </tr>
                <tr>
                <td>3</td>
                <td>Zé Menezes</td>
                <td>33333333333</td>
                <td><img src="img/man.png" alt="man"></td>
                <td><img src="img/bin.png" alt="man"><img src="img/edit.png" alt="man"></td>
                </tr>
            </tbody>
        </table>
    `
}