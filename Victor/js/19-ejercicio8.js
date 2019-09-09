'use strict'

/*
Calculadora que pida dos números por pantalla, que compruebe que sean válidos y que nos muestre en el body de la página
 el resultado de sumar, restar, multiplicar y dividir esas dos números.
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
    var numero2 = parseInt(prompt("Introduce el primer número: ", 0));

    if (isNaN(numero2)) {
        alert("ERROR: Debes introducir un número válido");
        numeroValido = false;
    }
} while(!numeroValido);

document.write("<h1>Calculadora</h1>");
document.write("<h2>Operaciones con " + numero1 + " y " + numero2 + "</h2>");
document.write("Suma: " + numero1 + " + " + numero2 + " = " + (numero1 + numero2) + "<br>");
document.write("Resta: " + numero1 + " - " + numero2 + " = " + (numero1 - numero2) + "<br>");
document.write("Multiplicación: " + numero1 + " * " + numero2 + " = " + (numero1 * numero2) + "<br>");
document.write("División entera: " + numero1 + " / " + numero2 + " = " + parseInt(numero1 / numero2) + "<br>");
document.write("División: " + numero1 + " / " + numero2 + " = " + (numero1 / numero2) + "<br>");