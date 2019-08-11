'use strict'


// Variable de ámbito global (scope), donde a es la variable y 2 el dato. Antes se decía var en vez de let.
let a = 2    
let b = 4

// let solo existe dentro de los {} en los que este, o en este caso globalmente. Si no quiero que nadie manipule mis variables debo darles un ámbito local.

// c = 3 daría error debido al use strict

function prueba() {
    // Esta es una variable de ámbito local a la función
    var int = 3                  
    let i = 6      // la variable i sale en distinto color porque no ha sido usada (por ejemplo con console.log)
    let b = 9

  // Condición. En este caso decir true es como decir 1 = 1. Siempre se cumplirá la condición y se ejecutará la función.
    if (true) {
        // variable de ámbito local al bloque if
        let w = 7
        console.log('Es verdad')
        console.log('Desde el if', a)  // 2
        console.log('Desde el if', b)  // 9
        console.log('Desde el if', w)  // 7
    }

    console.log('Desde la función', a)  // 2
    console.log('Desde la función', b)  // 9
//  console.log('Desde la función', w)  // error porque no existe w fuera del if, y como hemos dicho al principio, let solo existe dentro de los {} en los que esté o si está globalmente.
}

prueba()



function ejemplo () {
    let v = 3
    console.log(v)
}

function sample () {
    
}

ejemplo()
sample()