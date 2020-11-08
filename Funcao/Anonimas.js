const soma = (x,y) => {
    return x+y
}

const imprimiresult = (a, b, operacao = soma) => {
    console.log(operacao(a,b))
}

imprimiresult(3, 4)
imprimiresult(3,4, (x,y) => x - y)


const Pessoa = {
    coisa() {
        console.log('ola') 
    }
}

Pessoa.coisa(2)
