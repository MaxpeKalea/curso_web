'use strict'

// OPERADORES ARITMÉTICOS
// ----------------------

//  +
//  -
//  *
//  /
//  % (resto de la división)

var numero1 = 7;
var numero2 = 12;
var resultado = numero1 + numero2;

console.log("El resultado de la operación es " + resultado);


// TIPOS DE DATOS
// --------------

var numero_entero = 44;
var cadena_texto = "Hola, 'qué' tal?";
var booleano = true;    // or false


// CONVERTIR ENTRE TIPOS DE DATOS
// ------------------------------

var numero_cadena_texto = "33";
console.log(numero_cadena_texto + 7);    // Resultado 337, lo concatena porque es un string

console.log(Number(numero_cadena_texto) + 7);   // Resultado: 40, lo convertimos a número

// Number()     convierte a número, que puede ser entero o flotante según su contenido
// parseInt()   convierte a entero
// parseFloat() convierte un número a decimal
// String()     convierte a string cualquier número

console.log(parseInt(55.6));    // Resultado 55, al convertir a entero pierde la parte decimal

var numero_entero = 7;
var numero_flotante = 3.2;
console.log(numero_entero + 4);         // Resultado: 11, el + suma 2 números enteros
console.log(String(numero_entero) + 4)  // Resultado: 74, el + concatena un string y un número


// CONOCER TIPO DE DATO DE UNA VARIABLE. typeof
// --------------------------------------------

console.log(typeof(numero_entero));     // Resultado: number    Enteros y flotantes los considera como tipo number
console.log(typeof(numero_flotante));   // Resultado: number