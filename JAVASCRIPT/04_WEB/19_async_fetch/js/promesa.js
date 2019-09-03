function algoAsync() {
    return new Promise( (resolve,reject) => {
        setTimeout(() => {
            let n = Math.random()
            if ( n < 0.8 ) {
                // todo correcto, ejecuta resolve
                resolve(n)
            }
            else {
                // generador de errores
                reject(n)
            }
        },1000)
    } )
}

/* algoAsync()
.then( datos => console.log('Acierto: '+ datos) ) // es igual a function (datos) console.log('Acierto: '+ datos)
.catch( error => console.log('Error: '+ error) ) */


// es solo un ejemplo a traves de un juego de azar

// los resolve van al then y los reject al catch

// en este caso datos=n

(() => {}) ()  // funcion anonima que se ejecuta a si misma

//ES 2017

(async () => {}) ()  // lo mismo pero la funcion es asíncrona (avisas de que tiene que esperar a algo)

(async () => {
    try {
        let datos = await algoAsync()  // espera a que se resuelva la funcion y lo que te devuelva esta lo guardas en la variable datos
        console.log('Acierto: ' + datos)  
    } catch (error) {
        console.log('Error: ' + error) 
    }
    
}) ()  