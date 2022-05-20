function discount(){
    
    let product = prompt('Qual é o produto que está sendo comprado?')
    let price = (prompt(`Qual é o preço de ${product}?`)).replace('.', ',')

    let priceForCalcule = price.replace(',', '.')

    let valueDiscount = (priceForCalcule / 100) * 10
    let discount = (valueDiscount).toFixed(2).replace('.', ',')

    let newPrice = (priceForCalcule - valueDiscount).toFixed(2).replace('.', ',')
    
    let result = document.getElementById('result')
    result.innerHTML = `<h2>Calculando desconto de 10% para ${product}...</h2>`

    result.innerHTML += `O preço original era R$ ${price}.<br>`

    result.innerHTML += `<br>Você acaba de ganhar R$ ${discount} de desconto (10%).<br>`

    result.innerHTML += `<br>No fim, você vai pagar R$ ${newPrice} no produto ${product}.`
}