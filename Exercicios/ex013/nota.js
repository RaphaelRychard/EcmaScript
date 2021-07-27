function VerificarNota () {
    var nome = prompt('Qual é nome do aluno? ')
    var PrimeiraNota = Number(prompt(`Qual foi a Primeira Nota de ${nome} ?`))
    var SegundaNota  = Number(prompt(`Qual foi a Segunda Nota de ${nome} ?`))
    var res = document.querySelector('article.resultado')

    var media = (PrimeiraNota + SegundaNota) / 2
    /* MÉDIA*/

    res.innerHTML += `<h2>Analisando Situação de ${nome}</h2>`
    res.innerHTML += `<p>Com as notas ${PrimeiraNota}, e ${SegundaNota}, a média é ${media}</p>`

    /* Validadeção de estrutura condicionais compostas */
    if (media < 3) {
        
        res.innerHTML += `Com a média abaixo de 3,0, o aluno está <strong style="color: red; background-color: #500606;">Reprovado</strong>`
        /* Repreovado */
    } else if (media < 6) {

        res.innerHTML += `Com a média entre 3,0 e 6,0, o aluno está em <strong style="color: yellow; background-color: #ffff0036;">Recuperação</strong>`
        /* Recuperação */
    } else {
        res.innerHTML += `Com  a média acima de 6,0, o aluno está <strong style="color: #096d09; background-color: #2fff5a5e;">Aprovado</strong>`
        /* Aprovado */
    }

}