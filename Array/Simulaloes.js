const Myarray = [1, 6, 8, 10, 22, 4, 2]

const newArray = Myarray.map(n => n *10)
console.log(newArray)


const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: false },
    { nome: 'Notebook', preco: 1499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

const precos = (p) => p.preco < 2000
const Notebook = (p) => p.nome === 'Notebook'

const filter = produtos.filter(precos).filter(Notebook)



const alunos = [
    {nome: "Abnner", nota: 7.0, bolsista: true},
    {nome: "Bruno", nota: 7.5, bolsista: false},
    {nome: "Zoboo", nota: 4.0, bolsista: true},
    {nome: "Caio", nota: 7.0, bolsista: false},
    {nome: "Davi", nota: 10.0, bolsista: false},
    {nome: "Junim", nota: 8.5, bolsista: true}
]


const getnota = (a) => a.nota
const maiorqueseven = (n) => n >= 7.5
const somarNota = (acc, ind) => acc + ind

const aprovados = alunos.map(getnota).filter(maiorqueseven)

const allNOtes = aprovados.reduce(somarNota)

console.log(allNOtes)
