// comentário em uma linha

/*
comentario em mais de 
uma linha
*/

/*
window.alert('Introdução ao JS') 
var nome = prompt('Qual seu nome?')
var idade = prompt('Qual sua idade?')
window.alert('Olá ' + nome + '. Seja bem vindo!')
window.alert('Você tem ' + idade + ' anos.')
if (idade >= 30) {
    alert('Boa sorte para achar emprego!')
}
*/

// concatenação
var n1 = window.prompt('Digite um número: ')     // window.prompt recebe string
var n2 = window.prompt('Digite outro número: ')
var concatenar = n1 + n2
window.alert('A concatenação ficou assim: '+ concatenar)

// soma
var n3 = Number.parseFloat(window.prompt('Digite um número: '))
var n4 = Number.parseFloat(window.prompt('Digite outro número: '))
var soma = n3 + n4
window.alert('A soma dos números ficou assim: ' + n3 + ' + ' + n4 + ' = ' + soma)

/*

String(n)

n.toString()

*/



/*
var s = 'JavaScript'
'Estou aprendendo s'     // não faz interpolação
'Estou aprendendo' + s   // usa a concatenação 
`Estou aprendendo ${s}`  // usa template string
