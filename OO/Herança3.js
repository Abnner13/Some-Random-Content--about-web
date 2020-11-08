const pai = {nome: 'Antonio', cordocabelo: 'branco'}

const filho1 = Object.create(pai)
filho1.nome = 'Abnner'
filho1.cordocabelo = 'Preto'
console.log(filho1.cordocabelo)


const filha = Object.create(pai, {
    nome: {
        value: 'ju', writable: false, enumerable: true
    }
})
 
filha.nome = 'Juliana'
console.log(filha.nome)

console.log(`${filha.nome} tem o cabelo da cor ${filha.cordocabelo}`)
console.log(Object.keys(filha))
console.log(Object.keys(filho1))

for(let key in filha){
    console.log(key)
}

for(let key in filha){
    filha.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança: ${key} `)
}

for(let key in filho1){
    filho1.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança: ${key} `)
}
