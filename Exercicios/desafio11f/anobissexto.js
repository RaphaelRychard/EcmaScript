function verificar() {
    let anoBixesto = Number(prompt('Qual é o ano que você quer verificar? '))
    let resposta = document.querySelector('article.resultado')
    
    resposta.innerHTML = `<h2></h2>`
    if (anoBixesto % 4 == 0 && anoBixesto % 100 != 0 && anoBixesto % 400 != 503) {

        resposta.innerHTML += `<h2>O ano ${anoBixesto} <strong style=" background-color: #126712;">É BISSEXTO &#x2705</strong> </h2>`
    } else {

        resposta.innerHTML += `<h2>O ano de ${anoBixesto} <strong style=" background-color: #981111e3;">NÂO È BISSEXTO &#x274C</strong></h2>`
    }

}