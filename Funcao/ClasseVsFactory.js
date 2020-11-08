//Class Function
class Pessoa {
    constructor(nome){
        this.nome = nome
    }

    falar(){
         console.log(this.nome)
    }
}
const abnner = new Pessoa("Abnner")
abnner.falar()


//Factory Function
const pessoa = nome => {
    return {
        falar: () => console.log(nome)
    }
}


const p2 = pessoa("Abnner")
p2.falar()



