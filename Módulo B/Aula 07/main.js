// OPERADORES
let n1 = parseFloat(window.prompt('Escolha um número:'))
let n2 = parseFloat(window.prompt('Escolha outro número:'))

let soma = (n1 + n2)
let subtra = (n1 - n2)
let multi = (n1 * n2)
let divi = (n1 / n2)

document.write('Vamos mostrar as opções dos operadores aritméticos com os números escolhidos.<br><br>')

document.write(`${n1} + ${n2} = ${soma}<br>`)
document.write(`${n1} - ${n2} = ${subtra}<br>`)
document.write(`${n1} * ${n2} = ${multi}<br>`)
document.write(`${n1} / ${n2} = ${divi.toFixed(2)}<br>`)        //  .toFixed(2) para limitar a duas casas decimais       .toFixed(3) para 3 casas e assim sussecivamente


/*
Operadores aritméticos
+     soma
-     subtração
*     multiplicação
/     divisão

Operadores de atribuição
=
+=
-=
*=
/=
%=

Operadores relacionais
>     maior que
<     menor que
>=    maior ou igual a
<=    menor ou igual a
==    igual
!=    diferente

Operadores lógicos
!     negação
&&    conjunção
||    disjunção

Operadores ternários:
teste ? true : false
condition ? expression1 : expression2
Ex.: 
let age = 25;
let canDrink;
if (age >= 21) {
  canDrink = "Can drink";
} else {
  canDrink = "Cannot drink";
}
console.log(canDrink); // Output: "Can drink"
*/
