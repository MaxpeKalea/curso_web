'use strict'

// valores primitivos
// (nombre, string, boolean)


let a = 2
let b = a  // asignación de valor // a no cambia en esta situación, solo b adquiere su valor.
console.log('al crear b', a, b)
b = b * b
a = a / 2      // 1

console.log('valor de b', b) // 4
console.log('valor de a', a) // 2

b = a

console.log('valor de b', b)


// valores referenciados

let p1 = {nombre: 'Pepe', edad: 34}
let p2 = p1  // asignación de referencia
p1.nombre = 'Juan'

console.log(p1)
console.log(p2)



let a1 = {nombre : 'Raquel', edad: 34, saldo : 1000}
let a2 = {nombre : 'Maria', edad: 34, saldo: 1200}
let a3 = {nombre : 'Juan', edad: 34 , saldo: 1300}


function inscribirMal() {
    a1.curso = 'JS'
}

function inscribirEnJS(alumno) {
    if (alumno) {
        alumno.curso = 'JS'
    }
}


function inscribir(alumno, curso = 'JS') {
    if (alumno) {
        alumno.curso = curso
    }
}


/* inscribirEnJS(a1) // paso por referencia
inscribirEnJS(a2)
inscribirEnJS(a3) */

inscribir(a1, 'HTML') // paso por referencia
inscribir(a2)
inscribir(a3)

console.log(a1)
console.log(a2)
console.log(a3)

function invertir(x = 0) {
    let z = Math.random()
    let rendimiento =  (x * z) / 10
    return (x + rendimiento).toFixed(2)
}

a1.saldoNew = invertir(a1.saldo) // Paso por valor
a2.saldoNew = invertir(a2.saldo) // Paso por valor
a3.saldoNew  = invertir(a3.saldo) // Paso por valor
console.log(a1)
console.log(a2)
console.log(a3)




