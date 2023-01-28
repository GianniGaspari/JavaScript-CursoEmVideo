let nome =  window.prompt('Qual seu nome?')
document.write(`Olá, <strong>${nome}</strong>!<br>Seu nome ${nome}, tem ${nome.length} letras<br>`)
document.write(`Seu nome em minúsculas é assim: ${nome.toLowerCase()}<br>`)
document.write(`Seu nome em maiúsculas é assim: ${nome.toUpperCase()}<br>`)


let n1 = 1545.5
document.write(n1.toFixed(2))
document.write('<br>')
document.write(n1.toFixed(2).replace('.', ','))
document.write('<br>')
document.write(n1.toLocaleString('pr-BR', {style: 'currency', currency: 'BRL'}))
document.write('<br>')
document.write(n1.toLocaleString('pr-BR', {style: 'currency', currency: 'USD'}))
document.write('<br>')
document.write(n1.toLocaleString('pr-BR', {style: 'currency', currency: 'EUR'}))

let n2 = 'abobora'
document.write(n2.toUpperCase())   // precisa colocar em parênteses para acionar a função toUpperCase
