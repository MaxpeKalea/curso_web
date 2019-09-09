'use strict'

// BUCLE while
// -----------

/*
    while (condición) {
        Instrucciones que se ejecutan mientras la condición sea verdadera

        Instrucciones de control para salir del bucle, que si se omite se crea un bucle infinito
    }
*/

var year = 2019;
while (year <= 2031) {
    console.log("El año es: " + year);
    year++;
}

// Hace lo mismo que el bucle for, pero: 
// - el valor inicial está antes del bucle
// - la condición está en el bucle
// - el incremento está dentro del bucle