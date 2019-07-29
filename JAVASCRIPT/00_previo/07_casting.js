'use strict'

// Casting = cambiar temporalmente el tipo de un determinado valor para poder realizar una operación:

//Operaciones con Numbers:

let x = 2
let y = 3
let z = x * y

//Operaciones con Numbers y Strings:

y = '3'
z = x * y   // durante la operación el sistema invoca a una función denominada de casting, Number(y)
x = '5'
z = x * y


console.log(x, typeof x) // 5 // string
console.log(y, typeof y) // 3 // string
console.log(z, typeof z) // 15 // number


/* Sobrecarga del símbolo +
+3
2+2
'Hola' + 'Pepe'
*/

let w = x + y // no da 5 + 3 = 8 por la sobrecarga, sino que junta 5 y 3, 53

console.log(w, typeof w) // 53 // string


x = 23
y = '20'
w = x + y 


console.log(w, typeof w) // 2320 // string

// como hemos visto, la concatenación tiene preferencia respecto a la suma
// este problema puede ser especialmente importante en la web porque en un formulario, input type text, por ejemplo el usuario pone 23, en 10 años es 23+10 mi usuario tendria 2310 años
// o por ejemplo seria un error de contabilidad horrible en una empresa


// Podemos editarlo para que nos avise del error:

// function sumar (a,b) {
//     if (typeof a != 'number' || typeof b != 'number') {
//         return 'No se puede sumar'
//     }

//     let r = a + b
//     return 'La suma es ' + r


// Pero una solución mejor sería forzar el casting:


function sumar (a,b) {
    
    let r = Number(a) + Number(b)            // Esta es la mejor alternativa
    return 'La suma es ' + r
}

// Otra manera es parseFloat

// function sumar (a,b) {
    
//     let r = parseFloat(a) + parseFloat(b)
//     return 'La suma es ' + r
// }

// O aprovechar la sobrecarga del operador +:

// function sumar (a,b) {
    
//     let r = +a + +b
//     return 'La suma es ' + r
// }

function sumar (a,b) {
         if ( isNaN (a)  || isNaN (b)) {
             return 'No se puede sumar'
         }
        }


console.log(sumar(2,2))
console.log(sumar(2,0))
console.log(sumar(0,5.5))
console.log(sumar(2,'5'))
console.log(sumar('2','5'))
console.log(sumar(2,'Pepe'))