function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imgem')
    var data = new Date()
    var hora = 19/*  data.getHours() */
    msg.innerHTML = `Agora são ${hora} horas`   
    if (hora >= 0 && hora <= 12){
        /* bom dia */
        img.src = 'img/foto-manha.png'
        document.body.style.backgroundColor = '#ff9346a2'
    }else if(hora >= 12 && hora < 18){
        /* boa tarde */
        img.src = 'img/foto-tarde.png'
        document.body.style.backgroundColor = '#92aba7'
    }else{
        /* boa noite */
        img.src = 'img/foto-noite.png' 
        document.body.style.backgroundColor = '#0252ab9c'
    }
}