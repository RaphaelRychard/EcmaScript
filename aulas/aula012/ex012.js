var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes()

console.log(`Agora são exatamente ${hora}h ${minutos}m`)

if(hora < 6 || hora >= 23){
    console.log('Boa madrugada')
}else if (hora < 12){
    console.log('Bom Dia.')
}else if(hora < 18){
    console.log('Boa Tarde.')
}else if (hora < 23){
    console.log('Boa Noite.')
}