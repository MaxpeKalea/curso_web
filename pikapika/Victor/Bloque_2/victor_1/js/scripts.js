'use strict'

/**
 * 1.Pida 6 numeros por pantalla y los meta en un array
 * 2.Mostrar el array entero (todos sus elementos) en el cuerpo de la pagina y en la consola
 * 3.Ordenarlo y mostrarlo
 * 4.Invertir su orden y mostrarlo
 * 5.Mostrar cuantos elementos tiene el array
 * 6.Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice
 * (Se valorara el uso de funciones)
 */


let numeros = prompt('Introduce seis numeros', 0)

let aNumeros= numeros.split('')

setTimeout( () => document.write('Estos son tus numeros</br>'),0)

setTimeout( () => document.write(aNumeros), 1000)

setTimeout( () => document.write('</br>Ordenandolos...</br>'), 2000)

setTimeout( () => aNumeros.sort(), 2000)

setTimeout( () => document.write(aNumeros), 3000)

setTimeout( () => document.write('</br>Invirtiendo el orden...</br>'), 4000)

setTimeout( () => aNumeros.reverse(), 4000)

setTimeout( () => document.write(aNumeros), 5000)

setTimeout( () => document.write('</br>Calculando cuantos numeros hay...</br>'), 6000)

setTimeout( () => document.write(aNumeros.length), 7000)

setTimeout( () => {let buscar = prompt('Introduce el numero que quieras buscar en tu lista')
document.write(`</br>Buscando el número ${buscar}...</br>`)
}, 8000)

setTimeout( () => {let busqueda=aNumeros.findIndex(buscar) 
    if (busqueda && busqueda != -1) {
    document.write(`El número ${buscar} se encuentra en la posición ${busqueda} de tu lista`)
} else {
    document.write(`Lo siento, el número ${buscar} no se encuentra en tu lista`)
}
}, 10000)
