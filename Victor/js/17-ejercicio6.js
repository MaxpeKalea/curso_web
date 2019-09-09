'use strict'

/*
Programa que nos diga si un número es par o impar
*/

do {
    var numeroValido = true;
    var numero = parseInt(prompt("Introduce un número: ", 0));

    if (isNaN(numero)) {
        alert("ERROR: Debes introducir un número válido");
        numeroValido = false;
    }
} while(!numeroValido);

document.write("<h3>El número " + numero + "</h3>");
if (numero % 2 == 0) {
    document.write("El número es par");
} else {
    document.write("El número es impar");
}