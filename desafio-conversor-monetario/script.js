function convert(){
    
    let dollarQuote = (prompt('Antes de mais nada. Quanto está a cotação do dólar agora?')).replace(',', '.')
    let moneyInReais = (prompt('Quantos R$ você tem na carteira?')).replace('.', ',')
    let reaisForCalcule = moneyInReais.replace(',', '.')

    let moneyInDollars = (reaisForCalcule / dollarQuote).toFixed(2).replace('.', ',')
    
    let result = document.getElementById('result')
    result.innerHTML = `<h2>Convertendo o valor de R$${moneyInReais}...</h2>`

    result.innerHTML += `Com a valor da cotação informada é possível comprar US$${moneyInDollars}.`
}