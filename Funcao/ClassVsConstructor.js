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


//Constructor Function
function Pearson(nome = "Abnner") {
    //nome Publico
    //this.nome = nome

    this.MostrarNome = () => console.log(nome)
}

const eu = new Pearson('Davi')
eu.MostrarNome()
