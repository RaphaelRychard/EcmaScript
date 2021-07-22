function ConversorMonetario () {
    var produto = prompt('Qual é o produto que está comprando? ')
    var preco = Number(prompt(`Qual é o preço do produto ${produto}`)) 
    var resposta = document.querySelector('article.resultado')

    let desconto = preco * (10/100)
    let DescontoReal = preco - desconto 
    resposta.innerHTML = '<h2>Desconto foi efetuado!</h2>'
    resposta.innerHTML += `<p>O preço original era de ${preco.toLocaleString('pt-bt', {style:'currency', currency: 'BRL'})}.</p>`
    resposta.innerHTML += `<p>Você acaba de ganhar ${desconto.toLocaleString('pt-br', {style:'currency', currency: 'BRL'})} de desconto (-10%)</p>`
    resposta.innerHTML += `<p>No fim você vai pagar ${DescontoReal.toLocaleString('pr-br', {style:'currency', currency: 'BRL'})} no preofuto ${produto}</p>`
    
}