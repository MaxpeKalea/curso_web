// En ES6 aparece la posibilidad de añadir, además de variables, constantes.

// CONSTANTES:

const b = 6       // no se le puede asignar otro valor, ni en un if ni en ningún lado. 

// Siempre que puedas poner const ponlo, es mas seguro, por ejemplo, nombres, apellidos, no varían.


///////////////////////////

const datos = [110, 13, 42]
const persona = { nombre: 'Pepe', edad: 22 }

console.log(datos[0])          // se empiezan a contar por 0, 1, 2, por lo que datos[0] devolvería 110.
console.log(persona.nombre)    // Pepe.


// si quiero añadir mas números al array 'datos' hay tres maneras:

// datos[3] = 65
// datos[datos.length] = 65
// datos.push(65, 56, 90, 41)

// también podría añadir propiedades al objeto persona:

persona.altura = 178

// al añadir esta información extra no afectaría el hecho de que sea una constante ya que no he alterado ningún objeto asignado, sólo he añadido nuevos datos.