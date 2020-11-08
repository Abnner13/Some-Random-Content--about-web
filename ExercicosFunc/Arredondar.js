function formatarvalor(valorDecimal) {
    let valorEmReais = `R$ ${valorDecimal.toFixed(2).toString().replace(".", ",")}`
    console.log(valorEmReais)
}

formatarvalor(0.1 + 0.2)
