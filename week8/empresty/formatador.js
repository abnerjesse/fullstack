// export function removePontosHifens(texto) {
//     return texto.replaceAll(/[.-]/g,"")
// }

export function removePontos(texto) {
    return texto.replaceAll(".", "")
}

export function removeHifens(texto) {
    return texto.replaceAll("-", "")
}