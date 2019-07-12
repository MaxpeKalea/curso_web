'use strict'

console.log(sumaRaices(6,7)) /*Esta la puedo invocar aquí porque es una funcion declarada y hace hoisting*/

/* Declaración de funciones */

/** sumaRaices
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */

function sumaRaices(a = 0, b = 0) {
    let r = Math.sqrt(a) + Math.sqrt(b)
    return r
}

/* Asignación de funciones */

let x = {}  /*asignación a un objeto vacío*/

let restaRaices = function (a = 0, b = 0) {
    return  Math.sqrt(a) - Math.sqrt(b)   
}


console.log(restaRaices(6,7)) /*Esta no es una función declarada y tengo que invocarla en alguna linea después de asignarla*/


/* Asignación de funciones ARROW o lambda*/

/* Antiguo:

 let productoRaices = function (a = 0, b = 0) {
     return  Math.sqrt(a) * Math.sqrt(b)
 }

Nuevo: 

let productoRaices = (a = 0, b = 0) => {
    return  Math.sqrt(a) * Math.sqrt(b)
}

Resumido: */

let productoRaices = (a = 0, b = 0) => Math.sqrt(a) * Math.sqrt(b)

let mediaRaiz = a => Math.sqrt(a)/2

console.log(productoRaices(6,7))
console.log(mediaRaiz(6))

