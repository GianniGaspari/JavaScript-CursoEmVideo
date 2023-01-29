let area = window.document.getElementById('area')
area.addEventListener('click', clicar)
area.addEventListener('mouseenter', entrar)
area.addEventListener('mouseout', sair)


function clicar() {
    area.innerText = 'Tcharammm!'
    area.style.background = 'red'
}

function entrar() {
    area.innerText = ('ENTROU')
}

function sair() {
    area.innerText = ('Saiuuuuu')
    area.style.background = 'green'
}

function somar() {
    let tn1 = window.document.getElementById('txtn1')
    let tn2 = window.document.getElementById('txtn2')
    let res = window.document.getElementById('res')
    let n1 = Number(tn1.value)
    let n2 = Number(tn2.value)
    let s = n1 + n2
    
    res.innerHTML = `${n1} + ${n2} = ${s}`
    res.style.color = 'white'
    res.style.background = 'black'

}
