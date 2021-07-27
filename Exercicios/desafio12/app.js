function verificar() {

    var precoAntigo = Number(prompt('Qaul era o preço anterior do produto? '))
    var precoNovo = Number(prompt('Qual é o preço atual do produto? '))
    var resposta = document.querySelector('article.resultado')

    resposta.innerHTML = `<h2>Analisando os valores informados.</h2>`

    if (precoNovo > precoAntigo) {
        /* preço mais caro */
        var diferencaPreço = precoNovo - precoAntigo

        resposta.innerHTML += `<p>O produto custava ${precoAntigo.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} e agora custa ${precoNovo.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>`
        resposta.innerHTML += `<p>Hoje o produto está mas caro.</p>`
        resposta.innerHTML += `<p>O preço subiu ${(diferencaPreço).toLocaleString('pr-br', { style: 'currency', currency: 'BRL' })}, em relação ao preço anterior</p>`
        resposta.innerHTML += `<p>Uma variação de ${((diferencaPreço * 100) / precoAntigo).toFixed(1).replace('.', ',')}% para cima.</p>`

    } else if (precoNovo < precoAntigo) {
        /* Preço mais Barato */
        var diferencaPreço = precoAntigo - precoNovo

        resposta.innerHTML += `<p>O produto custava ${precoAntigo.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} e agora custa ${precoNovo.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>`
        resposta.innerHTML += `<p>Hoje o produto está mais barato.</p>`
        resposta.innerHTML += `<p>O preço caiu ${(diferencaPreço).toLocaleString('pr-br', { style: 'currency', currency: 'BRL' })}, em relação ao preço anterior</p>`
        resposta.innerHTML += `<p>Uma variação de ${((diferencaPreço * 100) / precoAntigo).toFixed(1).replace('.', ',')}% para cima.</p>`

    } else {
        resposta.innerHTML = '<p><strong>Erro!</strong> Nenhum dado inserido</p>'
        alert('erro')
    }

}