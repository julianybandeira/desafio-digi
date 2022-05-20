function calculate(){
    let a = prompt('Qual é o valor de a?')
    let b = prompt('Qual é o valor de b?')
    let c = prompt('Qual é o valor de c?')

    let calcBhaskara = (b ** 2) - (4 * a * c)

    let result = document.getElementById('result')
    result.innerHTML = `<h2>Resolvendo Bhaskara</h2>`

    result.innerHTML += `A equação atual é <strong>${a}x² + ${b}x + ${c} = 0</strong><br>`
    
    result.innerHTML += `<br>O cálculo realizado será <strong>Δ = ${b}² - 4 . ${a} . ${c}</strong><br>`

    result.innerHTML += `<br>O valor calculado foi <mark><strong>Δ = ${calcBhaskara}</mark></strong>`
}