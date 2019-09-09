'use strict'

/*
Muestra todos los número divisores de un número introducido por el usuario
*/

do {
    var numeroValido = true;
    var numero = parseInt(prompt("Introduce el primer número: ", 0));

    if (isNaN(numero)) {
        alert("ERROR: Debes introducir un número válido");
        numeroValido = false;
    }
} while(!numeroValido);

document.write("<h3>Los divisores de " + numero + " son: </h3>");
if (numero == 0) {
    document.write("Ninguno <br>");
} else if (numero < 0) {
    for(var i = numero; i <= -1; i++) {
        if(numero % i == 0) {
            document.write(i + "<br>");
        }
    }
}

// Math.abs(), función que calcula el valor absoluto de un número

numero = Math.abs(numero);
for(var i = 1; i <= numero; i++) {
    if(numero % i == 0) {
        document.write(i + "<br>");
    }
}


