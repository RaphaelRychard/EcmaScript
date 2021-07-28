function VerificarNota() {
    var nome = prompt('Qual é nome do aluno? ')
    var PrimeiraNota = Number(prompt(`Qual foi a Primeira Nota de ${nome} ?`))
    var SegundaNota = Number(prompt(`Qual foi a Segunda Nota de ${nome} ?`))
    var res = document.querySelector('article.resultado')

    var media = (PrimeiraNota + SegundaNota) / 2
    /* MÉDIA*/
    res.innerHTML = `<h2></h2>`
    res.innerHTML += `<h2>Analisando Situação de ${nome}</h2>`
    res.innerHTML += `<p>Com as notas ${PrimeiraNota}, e ${SegundaNota}, a média é ${media}</p>`

    /* Validadeção de estrutura condicionais compostas */
    if (media < 3) {

        res.innerHTML += `Com a média abaixo de 3,0, o aluno está <strong style="color: red; background-color: #500602;">Reprovado</strong>`
        /* Repreovado */

    } else if (media < 6) {
        res.innerHTML += `Com a média entre 3,0 e 6,0, o aluno está em <strong style="color: yellow; background-color: #ffff0035;">Recuperação</strong>`
        /* Recuperação */

    } else if (media < 10) {
        res.innerHTML += `Com  a média acima de 6,0, o aluno está <strong style="color: #17bd12; background-color: #6cf06828;">Aprovado</strong>`
        /* Aprovado */

    } else {
        res.innerHTML = `<h2></h2>`
        res.innerHTML += `[<strong style="color: red;">ERRO</strong>!] Como assim media acima de 10??`
        /* ERRO MÉDIA INVALIDA */
    }

}