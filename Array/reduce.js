const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: false },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

const resultado = produtos.map(p => p.preco).reduce((acumulador,valorAtual) => {
    console.log(acumulador, valorAtual)
    return acumulador + valorAtual
}, 0)
console.log("valor total da loja $"+resultado)

