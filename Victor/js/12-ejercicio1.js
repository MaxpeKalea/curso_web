'use strict'

/*
Programa que pida dos números y que diga cuál es el mayor, el menor o si son iguales
*/

do {
    var numeros_validos = true;
    var numero1 = parseInt(prompt("Introduce el primer número", 0));
    var numero2 = parseInt(prompt("Introduce el segundo número", 0));

    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Debes introducir dos números válidos");
        numeros_validos = false;
    }
} while(!numeros_validos);

if (numero1 == numero2) {
    alert("Los números son iguales");
} else if (numero1 > numero2) {
    alert("El número " + numero1 + " es el mayor.\nEl número " + numero2 + " es el menor.");
} else {
    alert("El número " + numero2 + " es el mayor.\nEl número " + numero1 + " es el menor.");
}

// La variable isNaN(valor) comprueba si el valor pasado es un número o no (NaN = Not a Number)
// Devuelve true or false 