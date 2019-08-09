'use strict'

/**
 * Muestra 
 * los divisores de un numero
 * introducido por el usuario
 */


let numero=parseInt(prompt('introduce un numero para calcular sus divisores',0))

for (let i = 0; i <= numero; i++) {
    if (numero % i == 0) {
        console.log(i)
    }
}


// lizto, ready