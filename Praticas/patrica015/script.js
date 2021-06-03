function verificar(){

    var ano = new Date()
    var anoFull = ano.getFullYear()
    var formularioAno = document.getElementById('validaçãodeAno')
    var res = document.getElementById('respostas')

    if(formularioAno.value.length == 0 || Number(formularioAno.value) > anoFull || formularioAno.value < 0){
        alert('[ERRO] Dado incorreto! VERIFIQUE AS INFORMAÇÕES!')
        res.innerHTML = `<strong style="color:red;">DADO INCORRETO!</strong>`
    }else{
        var sexo = document.getElementsByName('radSex')
        var idade =  anoFull - Number(formularioAno.value)
        res.innerHTML = `A idade calculadaa: ${idade}`
        if(idade <= 5){
            
            res.innerHTML += ``
        }
    } 
}