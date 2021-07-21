function conversor () {
    var celsios = Number(prompt('Difite uma temperrratura em °C (Celsius)'))
    var resusltado = document.querySelector('article.resultado')

    resusltado.innerHTML =  `<h2>A temperatura de ${celsios}°C, corresponde a...</h2>`
    var CalculoFahrenhait = Number((celsios * 9/5) + 32)
    resusltado.innerHTML += `${CalculoFahrenhait} K (Fahrenhait)`
}