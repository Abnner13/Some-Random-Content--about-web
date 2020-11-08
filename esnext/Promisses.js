function Falar (frase, segundos) {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}


Falar("Ola Boa Tarde", 5)
    .then(frase => frase.concat("Mano"))
    .then(FinalFrase => console.log(FinalFrase))
    .catch(e => console.log(e))
