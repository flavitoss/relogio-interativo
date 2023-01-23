var msg = window.document.getElementById('msg')
    var data = new Date()
    var hora = data.getHours()
    var pic = document.getElementById('imagem')
function carregar(){
    
    msg.innerHTML = `agora são ${hora} horas`
    if(hora >= 0 && hora < 12){
        //bom dia
        pic.src = 'manha.png'
        document.body.style.background = '#A68A8C'
    } else if (hora >= 12 && hora <= 18){
        //boa tarde
        pic.src = 'tarde.png'
        document.body.style.background = '#F2A477'
    } else{
        //boa noite
        pic.src = 'noite.png'
        document.body.style.background = '#292D73'
    }

}
