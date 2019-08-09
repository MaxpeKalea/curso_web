'use strict'
/**
 * Utilizando un bucle, 
 * mostrar la suma y la media de los numeros introducidos
 * hasta introducir un numero negativo 
 * y ahi mostrar el resultado
*/


var suma=0;
var contador=0;
do {
    var numero=parseInt(prompt('introduce un numero',0));
    if (numero>=0) {
       suma+=numero;
       contador++;
    }
} while (numero>=0);

alert('la suma es '+suma)
alert('la media es '+suma/contador)


/**Por que uso var?
 * En general se pefiere el uso de const (para constantes y funciones) o let (para variables) 
 * salvo que se necesite crear un closure, en cuyo caso se debe utilizar var.
 * 
 * Aquí estas creando un closure o una clausura. 
 * La creas en el momento que declaras una función dentro otra que usa variables de la funcion externa. (o en este caso un bucle)
 */
 