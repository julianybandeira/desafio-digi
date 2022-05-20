function convert(){
    let m = (prompt('Digite uma distancia em metros (m)')).replace(',', '.')

    let km = (m / 1000).toFixed(3).replace('.', ',')
    let hm = (m / 100).toFixed(3).replace('.', ',')
    let dam = (m / 10).toFixed(3).replace('.', ',')
    let dm = (m * 10).toFixed(1).replace('.', ',')
    let cm = (m * 100)
    let mm = (m * 1000)



    let result = document.getElementById('result')
    result.innerHTML = `<h2>A distância de ${m} metros, corresponde a...</h2>`

    result.innerHTML += `${km} quilômetros (Km)<br>`

    result.innerHTML += `<br> ${hm} hectômetros (Hm)<br>`

    result.innerHTML += `<br> ${dam} decatômetros (Dam)<br>`

    result.innerHTML += `<br> ${dm} decímetros (dm)<br>`

    result.innerHTML += `<br> ${cm} centímetros (cm)<br>`

    result.innerHTML += `<br> ${mm} milímetros (mm)`
    
}