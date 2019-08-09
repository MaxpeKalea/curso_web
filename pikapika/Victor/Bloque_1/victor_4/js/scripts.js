'use strict'

/**
 * Mostrar todos los numeros
 * que sean impares
 * entre dos numeros
 * introducidos por el usuario
 */

let numero1=parseInt(prompt('introduce numero1',0))
let numero2=parseInt(prompt('introduce numero2',0))
let resto=numero1%2;


console.log(resto)

while (numero1<(numero2-2)) {
    if (resto=0) {
       numero1=numero1+1
    } 
    numero1=numero1+=2
    document.write(numero1+', ')
}        


//who is the queen? im the queen // shut up motherfuckers

 