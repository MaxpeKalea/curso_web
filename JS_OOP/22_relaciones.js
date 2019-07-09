function Direccion(calle,numero,localidad) {
    this.calle = calle
    this.numero = numero
    this.localidad = localidad   
}

function Persona(nombre,edad,direccion)  {
    this.nombre = nombre
    this.edad = edad
    this.direccion = direccion
    this.mascotas = []
}

Persona.prototype.adoptarMascota() = function(mascota) {
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