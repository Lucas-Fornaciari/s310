function positions (firstPlace, secondPlace, lastPlace) {
    let posicaoFinal = []
    if (lastPlace == 'Daniel') {
         posicaoFinal.push('1º Colocado - Rafael 2º Colocado - Daniel 3º Colocado Manoel')
    } if (secondPlace == 'Daniel') {
         posicaoFinal.push('1º Colocado - Daniel 2º Colocado - Rafael 3º Colocado Manoel')
    } if (firstPlace == 'Daniel') {
        posicaoFinal.push('1º Colocado - Daniel 2º Colocado - Rafael 3º Colocado Manoel')
    }
    return posicaoFinal.toString()
}



console.log(positions('Rafael', 'Daniel', 'Manoel'))