/*

tag → getElementsByTagName()

id → getElementsById()

name → getElementsByName()

class → getElementsByClassName()

.innerTEXT → chama apenas o conteúdo do que foi selecionado, sem as suas filhas

.innerHTML → chama apenas o conteúdo do que foi selecionado, COM as suas filhas

*/

let p1 = window.document.getElementsByTagName('p')[0]
p1.style.color = 'red'

let d = window.document.querySelector('div#msg')
d.style.color = 'yellow'
d.style.background = 'purple'