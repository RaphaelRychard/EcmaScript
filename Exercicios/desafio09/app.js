function reajuste () {
    
    var nomeFuncionario = prompt('Qual é o nome do funcionario')
    var salario = Number(prompt(`Qual é o salário de ${nomeFuncionario}`))
    var Reajuste = Number(prompt(`O salário de ${nomeFuncionario} vai ser reajustado em qual porcentagem? `))
    var resultado = document.querySelector('article.resultado')

    var CalRejuste = Number(salario * (Reajuste / 100))
    var CalSalario = salario + CalRejuste
    
    resultado.innerHTML = '<h2></h2>'

    resultado.innerHTML += `<p>O salário atual era de ${salario.toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}.</p>`
    
    resultado.innerHTML += `<p>Com o aumento de ${Reajuste}%, o salário vai aumentar ${CalRejuste.toLocaleString('pt-br', {style:'currency', currency: 'BRL'})} no próximo mês.</p>`
    
    resultado.innerHTML += `<p>E a partir daí, ${nomeFuncionario} vai passar a ganhar ${CalSalario.toLocaleString('pt-bt', {style:'currency', currency: 'BRL'})}.</p>`

}