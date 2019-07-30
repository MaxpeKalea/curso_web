'use strict'

/**
 * parseInt para que sea un numero
 * ventanas emergentes: promt(pido usuario introduzca texto) y alert(solo mostrar mi texto)
 * condicional if/else if
 */

let a=parseInt(prompt('Introduce el primer número',0));

let b=parseInt(prompt('Introduce el segundo número',0));

while(a<0||b<0||isNaN(a)||isNaN(b)){
  alert('Introduce números válidos')
  a=parseInt(prompt('Introduce el primer número',0));
  b=parseInt(prompt('Introduce el segundo número',0));
}

if (a===b) {
   alert(a+' es igual que '+b)
} else if (a<b) {
  alert(a+' es menor que '+b)
}
else if (a>b) {
  alert(a+' es mayor que '+b)
}
