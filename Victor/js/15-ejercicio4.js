'use strict'

/*
Mostrar todos los números impares que hay entre 2 números introducidos por el usuario
*/

do {
    var numeroValido = true;
    var numero1 = parseInt(prompt("Introduce el primer número: ", 0));

    if (isNaN(numero1)) {
        alert("ERROR: Debes introducir un número válido");
        numeroValido = false;
    }
} while(!numeroValido);

do {
    var numeroValido = true;
    var numero2 = parseInt(prompt("Introduce el segundo número: ", 0));

    if (isNaN(numero2)) {
        alert("ERROR: Debes introducir un número válido");
        numeroValido = false;
    }
} while(!numeroValido);

var menor = numero1;
var mayor = numero2;

if (numero1 > numero2) {
    menor = numero2;
    mayor = numero1;
}

document.write("<h3>Números impares entre " + menor + " y " + mayor + "</h3>")
for (var i = menor + 1; i < mayor; i++) {
    if (i % 2 != 0)
    document.write(i + "<br>");
}