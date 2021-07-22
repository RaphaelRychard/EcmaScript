function conversor() {
    var celsios = parseFloat(prompt('Difite uma temperrratura em °C (Celsius)'))
    var resusltado = document.querySelector('article.resultado')

    resusltado.innerHTML = `<h2>A temperatura de ${celsios}°C, corresponde a...</h2>`
    var CalculoKelvin = parseFloat(celsios + 273.15)
    var CalculoFahrenhait = parseFloat((celsios * 9 / 5) + 32)
    resusltado.innerHTML += `<p>${CalculoKelvin.toFixed(2).replace('.', ',')} °K (Kelvin)</p>`
    resusltado.innerHTML += `<p>${CalculoFahrenhait.toFixed(2).replace('.', ',')} °F (Fahrenhait)</p>`
}