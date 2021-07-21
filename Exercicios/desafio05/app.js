function conversor() {
    var metros = Number(prompt('Digite um distância em metros (M)? '))
    var resultado = document.getElementById('medicao')

    var km = metros / 1000
    var hm = metros / 100
    var Dam = metros / 10

    var dm = metros * 10
    var cm = metros * 100
    var mm = metros * 1000

    resultado.innerHTML = `<h2> A distancia em ${metros}, corresponde a...</h2>`
    
    resultado.innerHTML += `<p>${km.toFixed(3)} Quilômetros (Km)</p>`
    resultado.innerHTML += `<p>${hm.toFixed(3)} Hectômetro (Hm)</p>`
    resultado.innerHTML += `<p>${Dam.toFixed(3)} Decâmetros (Dam)</p>`

    resultado.innerHTML += `<p>${dm.toFixed(1)} Decímetro (Dm)</p>`
    resultado.innerHTML += `<p>${cm.toFixed(1)} Centímetro(Cm)</p>`
    resultado.innerHTML += `<p>${mm.toFixed(1)} Milímetro (mm)</p>`
}