function Direccion(calle,numero,localidad) {
    this.calle = calle
    this.numero = numero
    this.localidad = localidad   
}

function Persona(nombre,edad,direccion)  {
    this.nombre = nombre
    this.edad = edad
    this.direccion = direccion // Asociación (atributos)
    this.mascotas = []
}

Persona.prototype.adoptarMascota = function(mascota) {
    this.mascotas.push(mascota)
}

function Mascota(nombre,especie) {
    this.nombre = nombre
    this.especie = especie
}


const p1 = new Persona('Marta', 28, new Direccion('calle Falsa',123,'Disneylandia'));
const m1 = new Mascota('salamanquesa', 'Manquita')
const m2 = new Mascota('hurón', 'aún por decidir')

Direccion()
Persona()
p1.adoptarMascota(m1)
console.log(p1)



function Alumno(nombre, edad, direccion) {
    this.cursos = []
    Persona.prototype.constructor.call(this, nombre, edad, direccion)
}

Alumno.prototype = new Persona()
Alumno.prototype.constructor =  Alumno

Alumno.prototype.inscribirse = function(curso) {
    this.cursos.push(curso)
}

//---------------------------------------------------------

const a1 = new Alumno('Pepe', 34, 
        new Direccion('c/ Pez', 7, 'Cadiz', 'España'))
console.log(a1)

console.log(a1 instanceof Alumno)
console.log(a1 instanceof Persona)
console.log(a1 instanceof Object)

a1.inscribirse('Paginas Web')

const m1 = new Mascota('Amedio', 'mono')
const m2 = new Mascota('Perry', 'ornitorrrinco')

a1.comprarMascota(m2) // Inyeccion de dependencia

console.log(a1)

console.log(m2.nombre)
console.log(a1.mascotas[0].nombre)