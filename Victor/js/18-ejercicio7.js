'use strict'

/*
Tabla de multiplicar de un número introducido por pantalla
*/

do {
    var numeroValido = true;
    var numero = parseInt(prompt("Introduce un número: ", 1));

    if (isNaN(numero)) {
        alert("ERROR: Debes introducir un número válido");
        numeroValido = false;
    }
} while(!numeroValido);

document.write("<h3>Tabla de  multiplicar del " + numero + "</h3>");
for (var i = 0; i <= 10; i++) {
    document.write(numero + " * " + i + " = " + (numero * i) + "<br>");
}

// Todas las tablas de multiplicar

document.write("<h2>Todas las tablas de multiplicar</h2>");
for (var i = 0; i <= 10; i++) {
    document.write("<h3>Tabla de  multiplicar del " + i + "</h3>");
    for (var j = 0; j <= 10; j++) {
        document.write(i + " * " + j + " = " + (i * j) + "<br>");
    }    
}