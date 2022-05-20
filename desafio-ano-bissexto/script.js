function verifyLeapYear(){
    let year = prompt('Qual é o ano que você quer verificar?')

    let result = document.getElementById('result')

    result.innerHTML = `<h2>Analisando o ano de ${year}...</h2>`

    if (year%4 === 0){
        result.innerHTML += `<p>O ano de ${year} <mark id="trueLeap"><strong>É BISSEXTO</mark></strong> &#9989;</p>`
    }else {
        result.innerHTML += `<p>O ano de ${year} <mark id="falseLeap"><strong>É NÃO É BISSEXTO</mark></strong> &#10060;</p>`
    }
}