'use strict'

/** Que nos diga si un numero introducido por usuario es par o impar
 * si no es valido que lo vuelva a pedir
 */

let numero=parseInt(prompt('introduce un numero',0))

while (isNaN(numero)) {
    numero=parseInt(prompt('esta vez introduce un numero válido',0))
}

if (numero%2 == 0) {
    alert(`El numero ${numero} es par`)
} else if (numero%2==1) {
    alert(`El numero ${numero} es impar`)
}