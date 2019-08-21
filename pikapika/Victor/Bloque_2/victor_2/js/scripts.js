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

document.write('Estos son tus numeros:</br>'+aNumeros)

let ordenados= aNumeros.sort()

document.write('</br>Ordenandolos:</br>'+ordenados)

let invertidos=aNumeros.reverse()

document.write('</br>Invirtiendo el orden:</br>'+invertidos)

let cuantos = aNumeros.length

document.write('</br>Hay '+cuantos+' números</br>')

let buscar = prompt('Introduce el numero que quieras buscar en tu lista')

document.write(`</br>Buscando el número ${buscar}...</br>`)

let busqueda=aNumeros.findIndex(buscar) 

    if (busqueda && busqueda != -1) {
    document.write(`El número ${buscar} se encuentra en la posición ${busqueda} de tu lista`)
} else {
    document.write(`Lo siento, el número ${buscar} no se encuentra en tu lista`)
}
