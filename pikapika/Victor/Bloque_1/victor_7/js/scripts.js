'use strict'

// tabla de multiplicar de un numero introducido por pantalla

let numero= parseInt(prompt('introduce un numero', 0))

document.write(`Tabla del ${numero}:`+ "</br>")
for (let i = 0; i <= 10; i++) {
    document.write(`
    ${numero} x ${i} = ${numero*i}` + "</br>")    
}

