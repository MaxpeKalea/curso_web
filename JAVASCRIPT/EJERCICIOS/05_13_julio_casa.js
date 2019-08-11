'use strict'

let banda = 'Stand high patrol',
    cancion = 'The big tree'

let musica = banda + ': ' + cancion.toUpperCase()  // Al punto e indicacion se le suele llamar metodo aunque sigue siendo una funcion ya que se ejecuta con '()'.

musica = musica.concat('. '+'Es una canción muy bonita')

musica = musica.concat('. ' + 'La escuchaba cuando me sentía triste')

musica = musica.concat(', ' + 'y me animaba un montón.')

let aficiones = 'Música Escribir Crear'

aficiones = aficiones.split(' ')

let correo = 'correo@correo.com'

correo = correo.includes('@')

let numeros = [1,2,3,4,5]

const arreglo = ['Hola',0,true,['arr','ay'],null,undefined]

console.log(musica)
console.log(aficiones)
console.log(correo)
console.table(numeros)
console.log(numeros[4])
console.table(arreglo)
console.log(arreglo)

