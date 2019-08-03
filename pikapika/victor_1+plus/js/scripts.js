'use strict'

/**
 * parseInt**  para que sea un number
 * 
 * ventanas emergentes:** promt(pido usuario introduzca texto) y alert(solo mostrar mi texto)
 * 
 * bucle while** (si no se cumplen mis condiciones, crea un bucle hasta que se cumplan las condiciones que quiero)
 * 
 * condicional if/else if** (que hacer con cada condicion posible)
 * 
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
