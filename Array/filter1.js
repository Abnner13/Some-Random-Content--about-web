const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: false },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

console.log(produtos.filter(function(p) {
    return p.preco > 2000 && p.fragil
}))

const fragil = (p) => p.fragil
const caro = (p) => p.preco > 2000  

console.log( produtos.filter(fragil).filter(caro))
