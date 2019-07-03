'use strict'

/** function eliminar
 * @description: eliminar de un array nombres que empiecen por una letra determinada
 * @param: {array}: aNombres
 * @param: {string}: letra
 * @returns: {array}
 */

// 17:50 // bucles ya

function limpiarArray(letra = '', aNombres = []) {
    for (let i = 0; i < aNombres.length; i++) {
        const item = aNombres[i];
        if (item[0].toLowerCase() === letra.toLowerCase()) {
            aNombres.splice(i, 1)
        }
    }  
}

//18:50:

function algo(h) {
    h = h*h
}

let z = 4
algo(z)

// 19:00:


