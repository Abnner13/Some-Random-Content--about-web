const contadorA = require('./InstaciaUnica')
const contadorB = require('./InstaciaUnica')

const contadorC = require('./InstaciaNova')()
const contadorD = require('./InstaciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)
