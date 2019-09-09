'use strict'

// BUCLE do-while
// --------------

/*
    var valor_inicial = 0;
    do {
        Instrucciones que se van a ejecutar al menos una vez y mientras sea verdadero

        Instrucciones de control para salir del bucle
    } while(condición);
*/

var year = 2019;

do {
    console.log("El año es: " + year);
    
    if (year == 2023) {
        break;
    }
    
    year ++;
} while(year < 2031);


/*
    Es parecido a los bucles for y while, pero en este caso, al menos se ejecuta alguna vez,
    aunque la condición sea evaluada como falsa.
    En for y while, si la condición no se cumple no se ejecutaría ninguna vez
*/

// break corta la ejecución del bucle y sigue la ejecución normal