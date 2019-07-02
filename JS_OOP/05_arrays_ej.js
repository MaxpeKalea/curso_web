/** function randomArray
 * @description: funcion que devuelve un array de n numeros aleatorio enteros y positivos menores o iguales a 100
 * @param {number} n
 * @returns {array}
 */


// Despues de definir lo que voy a hacer lo hago. A hacerlo se le llama implementación:


function randomArray(n = 0) {
    const r = []
    for (let i = 0; i < n; i++) {
        r[i] = parseInt(Math.random() * 100)
        } 
    return r   
}

console.log(String(randomArray(65)))


/** funcion letraDni
 * @description: funcion que calcula la letra de un dni
 * @param {number | string} dni
 * @returns {string}
 */

function letraDni(dni) {
    const aLetras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']
    return aLetras[dni%23]
}

console.log(letraDni(70909144))


/** funcion darFormatoDni
 * @description: funcion que da formato al numero de un dni
 * @param {number | string} dni
 * @returns {number}
 */

