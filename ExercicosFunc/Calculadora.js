function Calculadora(num1, num2) {

    this.somar = () => num1+num2
    
    this.subtracao = () => num1-num2
    
    this.mult = () => num1 * num2
    
    this.divisao = () => {
    
        if(num1 === 0 || num2 === 0){
           console.log("Erro divisao por zero")
        }else{
            return num1 / num2
        }
    }
}


const facil = new Calculadora(2, 3)

console.log(facil.somar())
console.log(facil.subtracao())
console.log(facil.mult())
console.log(facil.divisao())
