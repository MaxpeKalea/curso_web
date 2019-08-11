/**
 * JSDoc
 * @description Programa que calcula y muestra 
 *              si un número es par o impar
 */



////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////funcion helper, ayudante o tool////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////



/**
 * @description Función que comprueba si una expresión 
 *      es convertible a un número valido
 *      rechazando objects, arrays, booleans, null 
 *      undefined, '' y string no numéricos
 * @param {any} n 
 * @returns {boolean}
 */ 


function isValidNumber(n) {
    let r = true
    if ( isNaN(n) || typeof n == 'boolean' 
    || Array.isArray(n) || n === ''  || n === null) {
        r = false
    }
    return r
}

/////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////esta función ya existe en el sistema//////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////



/**
 * 
 * @param {number} n 
 * @returns {boolean}
 */


function isEntero( n = 0) {
     return (parseInt(n) === parseFloat(n))
}



//////////////////////////////////////////////////////////////////////////////////////////////




 /**
  * @description Función que calcula si un número es par
  *     Puede devolver: -2, -1, true, false
  * @param {number}: n
  * @returns {*}
  * 
  */



//   function esPar(n) {
//     let r = true 
//     if (!isValidNumber(n)) {
//         // Excepción: n no es un número
//         throw -2
//     } else if (!isEntero(n)) {
//         // Excepción: n no es entero
//         throw -1
//     } else if (n%2)  {
//         r = false
//     }
//     return r
//   }

function esPar(n) {
    let r = true 
    if (!isValidNumber(n)) {
        // Excepción: n no es un número
        //throw 1 // antes -2
        throw new Error(`${n} no es un número`)
    } else if (!isEntero(n)) {
        // Excepción: n no es entero
        // throw 0 // antes -1
        throw new Error(`El número ${n} no es entero`)
    } else if (n%2)  {
        r = false
    }
    return r
  }

//////////////////////////////////////////////////////////////////////////////////////////



  /**
   * @description Función que muestra si un número es par o impar
   * @param {number}: n
   * @returns {void}
   */




//    function mostrar(n) {
//        let mensajes = [
//            `El número ${n} es impar`,
//            `El número ${n} es par`,
//            `El número ${n} no es entero`,
//            `${n} no es un número`
//        ]
//        try {
//            let i = Number(esPar(n)) 
//        } catch (error) {
           
//        }
       
//        if ( i< 0) { // código de error
//          i = -i + 1 // -1 -> 2 // -2 -> 3
//        }
//        console.log(mensajes[i])
//    }

function mostrar(n) {
    let output = ''
    let mensajes = [
        `El número ${n} es impar`,
        `El número ${n} es par`,
    ]
    let excepciones = [
         `El número ${n} no es entero`,
        `${n} no es un número`
    ]
    try {
        let i = Number(esPar(n))   //i: 0, 1
        output = mensajes[i]
    } catch (error) { // error: -2 -1
         // i = -error + 1 // -1 -> 2 // -2 -> 3
         // output = excepciones[error]
         output = error
    }
    console.log(output)
}



/////////////////////////////////////////////////////////////////////////////////////////////////





//    function probar() 
//         {
//         let x
//         x = 1
//         x = 2
//         x = 345
//         x = 98
//         x = 0
//         x = -4
//         x = -5
//         x = 4.3
//         x = -56.7
//         x = 'pepe'
//         x = '56'
//         mostrar(x)
//         }
   
//    probar()




/////////////////////////////////////////03 de junio (16:45?)//////////////////////////////////////////////////





// function errores () {
    const x = 'Llora cuanto quieras, no servirá de nada'

    try {
        //x = 51
        throw 'Error 113: No mantienes la concentración'
    } catch (error) {
        console.log('Disculpa belleza, es que se ha producido un error:') 
        if(error.name) {
            console.log(error.name, error.message) 
        } else{
            console.log(error)
        }
        
    }
console.log(x)
// }


// errores()



module.exports = esPar;





  /*   
    Gestión de errores
    const x = 67
    let z = 45
    try {
        x = 51 // => un throw
        // throw 'Probando un error'
        z = z + x
        console.log('z vale', z)
    } catch (e) {
        console.log('Disculpa, se ha producido un error')
        if(e.name) {
            console.log(e.name, e.message)
        } else {
            console.log(e)
        }
    }
    console.log('x vale',x)
 */
   

/*     esPar('pepe')
    mostrar('pepe') */
    


