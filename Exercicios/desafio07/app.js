var doalReal = Number(prompt('Antes de mais nada quantos está do doloar agora? '.replace('.', ',')))

function converter () {

    var resultado = document.querySelector('article.resultado')
    resultado.innerHTML = ''
    var SobraReal = Number(prompt('Quantos R$ tem na carteira? '))

    var Covdolar = SobraReal / doalReal
    
    resultado.innerHTML += `<p>O seu dinheiro em Dolar sera de: ${Covdolar.toLocaleString('pt-br', {style:'currency', currency: 'USD'} )}</p>`

}