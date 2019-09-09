'use strict'

/*
Utilizando un bucle, mostrar la suma y la media de los números introducidos
hasta introducir un número negativo y ahí mostrar el resultado
*/

var suma = 0;
var contador = 0;

do {
    var numero = parseInt(prompt("Introduce un número (número negativo para finalizar): ", 0));

    if (isNaN(numero)) {
        alert("El número introducido no es válido");
        numero = 0;
    }
    else if (numero >= 0) {
        suma += numero;
        contador++;
    }
} while (numero >= 0);

var media = 0;
if (suma > 0 && contador != 0) {
    media = parseFloat(suma / contador);
}

alert("La suma de todos los números es: " + suma + "\nY la media es: " + media);