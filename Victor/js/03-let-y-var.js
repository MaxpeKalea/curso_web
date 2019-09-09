'use strict'


// Palabras reservadas: var y let. 
// Diferencias:
//  let:    permite definir variables limitando su alcance al bloque, declaración o expresión donde se esté usando.
//  var:    permite definir una variable global o local en una función sin importar el ámbito del bloque.

// La principal diferencia es el alcance que tienen las variables y como actúan en función a los diferentes bloques


// Prueba con var
var numero = 40;
console.log(numero);    // valor 40

if (true) {
    var numero = 50;
    console.log(numero);    // valor 50 -------------- Actúa a nivel global
}

console.log(numero);    // valor 50

// Prueba con let
var texto = "texto 1";
console.log(texto);     // valor texto 1

if (true) {
    let texto = "texto 2";      // valor texto 2 ----------- Actúa sólo a nivel del bloque, crea una variable local a nivel de bloque
    console.log(texto);
}

console.log(texto);     // valor texto 1