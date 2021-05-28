/* function clicar(){
            var area =  document.getElementById('area')
            area.innerText = 'CLICOU'
            area.style.backgroundColor = 'blue'
} */
function clicksegurado(){
    area.style.backgroundColor = 'gray'
    area.innerText = 'CLICK PRECIONADO!'
}
function clicksouto(){
    area.style.backgroundColor = 'pink'
    area.innerText = 'CLICK DEPRESSIONADO!'
}
function entrou(){
    area.innerText = 'MOVENDO!'
    area.style.backgroundColor = 'yellow'
    area.style.color = 'black'
}
function saiu(){
    area.innerText = 'SAIU!'
    area.style.backgroundColor = 'red'
}