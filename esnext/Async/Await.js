const http = require('http')
const { promises } = require('fs')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res =>{
            let resultado = ''
    
            res.on('data', dados => {
                resultado += dados
            })
    
            res.on('end', ()=>{
                try {
                    resolve(JSON.parse(resultado))
                } catch (e) {
                    reject(e)
                }
            })
        })
    })
}

let Obteralunos = async () =>{
    const Ta = await getTurma('A')
    const Tb = await getTurma('B')
    const Tc = await getTurma('C')
    return [].concat(Ta, Tb, Tc)
}

Obteralunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(n => console.log(n))
