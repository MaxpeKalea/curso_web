function Coche (marca,modelo,color,energia,precio) {
    this.marca = marca
    this.modelo = modelo
    this.color = color
    this.energia = energia
    this.precio = precio
}

Coche.prototype.arrancar = function () {
    console.log('run,run')
    return this
}
Coche.prototype.ver = function () {
    console.log(this)
}


// new coche es instanciar
const c1 = new Coche('Marca Blanca', 'El Mejor', 'Pistacho', 'Híbrido', 'Gratis')


c1.arrancar().ver()

/////////////////////////19:40//////////////////////////20min
/**
class Coche {
    constructor()
}

///////////////////////////////////////////////////////////////*/