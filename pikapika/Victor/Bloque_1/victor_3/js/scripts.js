'use strict'

/** Hacer un programa que muestre todos los numeros 
 * entre dos numeros
 * introducidos por el usuario
 */

let numero1=parseInt(prompt('introduce numero1',0))
let numero2=parseInt(prompt('introduce numero2',0))
numero1=numero1+1


    for (let i = numero1; i < numero2; i++) {
        document.write(i+',')
    }
    
