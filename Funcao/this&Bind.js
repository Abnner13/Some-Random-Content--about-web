// const pessoa = {
//     saudaçao: 'BOM DIA!!!',
//     falar(){
//         console.log(this.saudaçao)
//     }
// }

// function pessoa2 (){}
// pessoa.falar()

// const falei = pessoa.falar
// falei()

// const agrfalo = pessoa.falar.bind(pessoa)
// agrfalo()



const petos = {
    firstName: 'Abnner',
    secondName: 'sales',
    pets: ['cat', 'fish', 'cow'],
    tShowPets() {
        this.pets.forEach(function (pet) {
            console.log(`${this.firstName} ${pet}`)
        }, this)

    }
}


petos.tShowPets()
