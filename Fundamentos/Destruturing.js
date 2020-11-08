function Rand({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
const obj = {min: 10, max: 40}
console.log(Rand(obj))
console.log(Rand({min: 500}))
console.log(Rand({}))
