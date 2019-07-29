'use strict' // Modo estricto de JS, no te deja inicializar variables sin declarar

///////////////////////////////////////

// undefined
// boolean
// number (int, float)
// object      // es el único complejo, ya que es la agrupación de todos los demás
// string

///////////////////////////////////////


// ES6


// let saludo // declarar variable => tipo undefined.
// saludo = 'hola' // inicializar la variable saludo. Adquiere el tipo string.
// let user = 'Pepe' // declarar + inicializar (le doy nombre y valor) Es lo mas recomendable.

// MALA PRÁCTICA:

// curso = 'JavaScript' // Inicializar la variable sin declarar.

// CARÁCTER VACÍO O NULO es MEJOR PRÁCTICA (se define mas tarde):

// let saludo = ''

// LO IDEAL

// let saludo = 'Hola' // declarar + inicializar (le doy nombre y valor)




// DECLARACIÓN DE LA FUNCIÓN: (QUIZÁS NO LA USE, LA TENGO DECLARADA POR SI LUEGO ME HACE FALTA INVOCARLA O EJECUTARLA O USARLA)

function saludar() {
    let saludo = 'Hola'
    console.log(saludo)
}



// SI QUIERO QUE SALUDE A ALGUIEN:
// (Declaración)

function saludar(nombre) {
    let saludo = 'Hola '
    console.log(saludo + nombre)
}

// INVOCACIÓN:

saludar('Pepe')
saludar('Marta')
saludar()

//////////////////////////////////////////////////

// SEPARACIÓN DE RESPONSABILIDADES o INTERESES:
// (separation of concerns - Edsger W. Dijkstra )


 /**
  * JSDOc
  */

/** FUNCIÓN SUMAR:
 * 
 * @description recibe dos parámetros y devuelve la suma de ambos
 * @param {number}
 * @param {number}
 * @returns {number}
 * 
 */

function sumar (a = 0, b = 0) {
    // let c = a + b
    // return c
    return a + b
}

/** FUNCIÓN RESTAR:
 * 
 * @description recibe dos parámetros y devuelve la resta de ambos
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */

function restar(a = 0, b = 0) {
    return a - b
}


/**FUNCIÓN MULTIPLICAR:
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */

function multiplicar(a = 0, b = 1) {
    return a * b
}

/**FUNCIÓN DIVIDIR:
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function dividir(a = 0, b = 1) {
    return a / b
}


/** FUNCIÓN MOSTRAR:
 * 
  * @description Recibe un texto y lo saca por pantalla
  * @param {string}
  * @returns {void}
  * 
  */

function mostrar(neuronas = '') {
    console.log(neuronas)
} 


function probar() {
    let x = 12
    let y = 12
    mostrar(sumar(2,2))
    mostrar(sumar(x,y))
    mostrar(restar(8,2))
    mostrar(multiplicar(8,2))
    mostrar(dividir(73,37))
}

probar()

/**
* not !
* or ||
* and &&
 */




function mostrar(cadena = '') {
    console.log(cadena)
}

mostrar()