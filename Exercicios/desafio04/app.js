function comprar() {
    produto = String(prompt('Que protudo você está comprando? '))
    preço = Number(prompt(`Quanto custa o ${produto} que você está comprando? `)).toFixed(2)
    valor = Number(prompt(`Qual foi o valor que deu para pagar o ${produto}`)).toFixed(2)
    conta = (valor - preço).toFixed(2)
    alert(`Você comprou o ${produto} que custou ${preço}\n Deu R$ ${valor} em dinheiro e vai receber R$ ${conta} de troco!`)
}