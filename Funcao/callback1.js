const fabricantes = ["Mercedes", "Audi", "Fiat"]

function Imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(Imprimir)

fabricantes.forEach((marca, posicao)=>console.log(`${posicao}. ${marca}`))
