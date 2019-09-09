'use strict'

// Parámetros REST y SPREAD

// Parámetros REST (número indefinido de parámetros)
// ---------------

/*
    Se utiliza cuando el número de parámetros es indefinido.
    Se indica un último parámetro con 3 puntos delante.
    El resto de parámetros no definidos los almacena en un array.
*/

function listadoFrutas(fruta1, fruta2, ...otras_frutas) {
    console.log("Fruta 1: " + fruta1);
    console.log("Fruta 2: " + fruta2);
    console.log(otras_frutas);
}

listadoFrutas("Naranja", "Manzana", "Sandía", "Pera", "Melón", "Coco");

// Devuelve el parámetro 1, el parámetro 2 y un array con el resto de parámetros


// Parámetros SPREAD
// -----------------

// Se pasa un array y se sustituyen sus elementos en los parámetros de la función
// El orden en el que estén los elementos en el array es el orden de los parámetros
// que se van a ir asignando

var frutas = ["Naranja", "Manzana"];
listadoFrutas(...frutas, "Sandía", "Pera", "Melón", "Coco");

// El primer elemento del array es el primer parámetro de la función
// Es segundo elemento del array es el segundo parámetro de la función
// y el resto de parámetros son pasados como parámetros REST

