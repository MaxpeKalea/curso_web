const obj = new Object()

const animal1 = { nombre: 'Perro', raza: 'Pastor Alemán'}

animal1.peso = 'Depende de lo que coma y lo que se mueva'

const animales = ['Pez Payaso', 'Ameba']

const persona1 = { nombre: 'Marta', edad: 28, hijos: 'Uno muy guapo', estadoCivil: 'Prometida', mascotas: [animal1, animales] }

console.log(persona1)

console.log(persona1.nombre)


console.log(animal1)
console.log(animal1.nombre)
let propiedad = 'raza'
console.log(animal1['raza']) // Nunca se usa
console.log(animal1[propiedad])
