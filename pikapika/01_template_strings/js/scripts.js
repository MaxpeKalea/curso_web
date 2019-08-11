'use strict'

/**
 * document**
 * 
 * querySelector**
 * 
 * selector(#)**
 * 
 * template strings**
 * 
 * innerHTML**
 */

const nombre= 'Marta',
    curso='Javascript';

const contenedor=  document.querySelector('#template')

let html=  `<ul>
                <li>Nombre: ${nombre}</li>
                <li>Curso: ${curso}</li>
            </ul>`

contenedor.innerHTML=html;