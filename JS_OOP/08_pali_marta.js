'use strict'

/** function isPali
 * @description: comprobar si un string es palindomo
 * @param: {string} cadena
 * @returns: {boolean}
 */

const isPali = (cadena = '') => {
    let r = false
    const minusculasSinEspacios = cadena.split(' ').join('').toLowerCase()
    console.log(minusculasSinEspacios)
    const cadenaInversa = minusculasSinEspacios.split('').reverse().join('')
    console.log(cadenaInversa)
    if (minusculasSinEspacios === cadenaInversa) {
        r = true
    }
    return r
}

const isPaliShort = (cadena = '') => {
    const sinEspacios = cadena.split(' ').join('').toLowerCase()
    return sinEspacios === sinEspacios.split('').reverse().join('')
}

console.log(isPali('jejej'))
console.log(isPaliShort('jejej'))
