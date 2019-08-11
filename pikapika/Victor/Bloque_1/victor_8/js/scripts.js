'use strict'

/**
 * Introducir dos numeros
 * Si no son validos repetir
 * Sumarlos, restarlos, multiplicarlos y dividirlos
 * Mostrar los resultados por consola + documento + alerta
 */



let numero1= parseInt(prompt('Introduce el primer número',0)) 
while (isNaN(numero1)) {
    numero1=parseInt(prompt('esta vez introduce un primer numero válido',0))
}
let numero2= parseInt(prompt('Introduce el segundo número',0))
while (isNaN(numero2)) {
    numero2=parseInt(prompt('esta vez introduce un segundo numero válido',0))
}

console.log(`${numero1} + ${numero2} = ${numero1+numero2}
${numero1} - ${numero2} = ${numero1-numero2}
${numero1} x ${numero2} = ${numero1*numero2}
${numero1} % ${numero2} = ${numero1/numero2}`)
document.write(`${numero1} + ${numero2} = ${numero1+numero2}`+"</br>"+
`${numero1} - ${numero2} = ${numero1-numero2}`+"</br>"+
`${numero1} x ${numero2} = ${numero1*numero2}`+"</br>"+
`${numero1} % ${numero2} = ${numero1/numero2}`+"</br>")
alert(`${numero1} + ${numero2} = ${numero1+numero2}
${numero1} - ${numero2} = ${numero1-numero2}
${numero1} x ${numero2} = ${numero1*numero2}
${numero1} % ${numero2} = ${numero1/numero2}`)