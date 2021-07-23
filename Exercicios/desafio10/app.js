function calcular() {

    var a = Number(prompt('Qual é o valor de a? '))
    var b = Number(prompt('Qual é o valor de b? '))
    var c = Number(prompt('Qual é o valor de c? '))

    var resultados = document.querySelector('article.resultado')
    var DeltaCalculo = b**2 - 4 * a * c
    resultados.innerHTML = `<h2>Resolvendo Bhaskara</h2>`
    resultados.innerHTML += `<p>A equação atual é ${a}x<sup>2</sup> + ${b}x + ${c} = 0</p>`
    resultados.innerHTML += `<p>O cálculo realizado será  <strong>&Delta;</strong> = ${b}<sup>2</sup> - 4 . ${a} . ${c}</p>`
    resultados.innerHTML += `<p>O valor calulcado foi <strong>${DeltaCalculo}</strong></p>`
}