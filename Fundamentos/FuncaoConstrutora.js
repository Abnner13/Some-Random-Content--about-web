function Carro(VelocidadeMaxima = 200, aceleracao = 5) {

    //atributo privado
    let VelocidadeAtual = 0

    // metodo publico
    this.acelerar = () => {
        if(VelocidadeAtual + aceleracao > VelocidadeMaxima){
            VelocidadeAtual = VelocidadeMaxima
        }else{
            VelocidadeAtual += aceleracao
        } 
    }

    // metodo publico
    this.getVelocidadeAtual = _ => VelocidadeAtual
}

const uno = new Carro
uno.acelerar()
uno.acelerar()
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const Rari = new Carro(350, 40)
Rari.acelerar()
Rari.acelerar()
Rari.acelerar()
console.log(Rari.getVelocidadeAtual())

