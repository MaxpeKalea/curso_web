function Factura(empresa,cliente,articulos,numFactura,tipoIva,formaPago,fecha=new Date()) {
    this.empresa = empresa
    this.cliente = cliente 
    this.articulos = articulos
    this.numFactura = numFactura
    this.tipoIva = tipoIva
    this.formaPago = formaPago
    this.fecha = fecha
}

function Empresa(nombre,direccion,telefono,nif) {
    this.nombre = nombre
    this.direccion = direccion
    this.telefono = telefono
    this.nif = nif
}

function Articulo(descripcion,precio,cantidad) {
    this.descripcion = descripcion
    this.precio = precio
    this.cantidad = cantidad
}

function Direccion(calle,numero,localidad) {
    this.calle = calle
    this.numero = numero
    this.localidad = localidad
}

Factura.prototype.añadirArticulos = function(articulo) {
    this.articulos.push(articulo)
}

Factura.prototype.sumarArticulos = function () {
    const importe = {} 
    importe.base = 
        this.articulos
        .map( libro => libro.precio * libro.cantidad)
        .reduce( (total, item) => total + item ) 
    importe.iva = importe.base * this.tipoIVA
    importe.total = importe.base + importe.iva
    return importe
} 

Factura.prototype.mostrarArticulos = function () {

}

const factura1 = new Factura (
    new Empresa('Mascotas Pepe','calle del Pez Volador 51',915475965,'9678564J'), 
    new Empresa('Guardería Canina los 101','pasaje del can mayor 101',911101101,'3609494K') 
 )
const articulos = [new Articulo('pienso', 17.50,23), new Articulo('pelotas', 3.5,17), new Articulo('bolsas', 1,30)]



console.log(factura1,articulos,Factura.prototype.sumarArticulos)




// Direccion.prototype.toString = function () {
//     return `${this.calle} ${this.num} ${this.poblacion} - ${this.pais}`
// }

// Factura.prototype.calcularImporte = function() {
//     const importe = {} 
//     importe.base = 
//         this.items
//         .map( libro => libro.precioU * libro.cantidad)
//         .reduce( (total, item) => total + item ) 
//     importe.iva = importe.base * this.tipoIVA
//     importe.total = importe.base + importe.iva
//     return importe    
// }

// Factura.prototype.listarItems = function() {
//     let items = ``
//     this.items.forEach(
//         item => {
//             let desc = fijarLongitudCadena(item.descripcion, 30)
//             let pv = item.precioU
//                 .toLocaleString('es', {style: 'currency', currency: 'EUR'})
//             let cant = item.cantidad
//             items += 
// `
//     ${desc}     ${pv}          ${cant}
// `
//     })
//     return items
// }

// Factura.prototype.prepararFactura = function() {
//     const importe = this.calcularImporte()
//     const factura =
// `
//     _______________________________________________________________
//                                         ${this.empresa.nombre}
//                                         ${this.empresa.direccion}
//                                         ${this.empresa.telefono}
//                                         ${this.empresa.nif}
//     Num. Factura: ${this.numFactura}
//     ${this.cliente.nombre}
//     ${this.cliente.direccion}
//     ${this.cliente.telefono}
//     ${this.cliente.nif}
//     Descripción                         Precio      Cantidad
//     _______________________________     _______     ________
//     ${this.listarItems()}
//     Importe ....................................${importe.base
//         .toLocaleString('es', {style: 'currency', currency: 'EUR'})}
//     IVA ........................................${importe.iva
//         .toLocaleString('es', {style: 'currency', currency: 'EUR'})}
//     Importe Total ..............................${importe.total
//         .toLocaleString('es', {style: 'currency', currency: 'EUR'})}
//     Forma de Pago ..............................${this.formaPago}
//     Madrid, ${fechaEsp(this.fecha)}
//     ______________________________________________________________
// `
//     return factura
// }

// // Factura.prototype.mostrarImporte = function() {}

// Factura.prototype.render = function () {
//     console.log(this.prepararFactura())
// }

// Factura.prototype.resumir = function () {
//     console.log (
// `Factura: ${this.numFactura}: ${this.calcularImporte().total}`
//     )
// }

// const tuata = new Empresa(
//         'Ediciones Tuatalug',
//         new Direccion('c/ Pez', '1', 'Madrid', 'España'),
//         '625875921',
//         'T-34761234',)

// const cliente1 = new Empresa(
//         'Librería Boracai',
//         new Direccion ('c/ Carranza', '5', 'Cádiz', 'España'),
//         '625493421',
//         'F-76521743')

// const items1 = [
//     new Item('Angular 8.0', 30, 10),
//     new Item('JS para torpes', 32, 12),
//     new Item('Typescrip Avanzado', 45, 8),
//     new Item('Introducción a las aplicaciones Web', 37, 11)
// ]

// const factura_12 = new Factura(
//     tuata, cliente1, items1, '000000012',
//     0.04, 'Contado', new Date()
// )

// factura_12.render()


// const cliente2 = new Empresa(
//     'Librería Pepita',
//     new Direccion ('c/ Burgo', '5', 'Estrasburgo', 'Francia'),
//     '625492190',
//     'F-76534127')

// const items2 = [
//     new Item('Angular 8.0', 30, 20),
//     new Item('Typescrip Avanzado', 45, 12),
//     new Item('Introducción a las aplicaciones Web', 37, 14)
// ]

// const factura_13 = new Factura(
//     tuata, cliente2, items2, '000000013',
//     0.04, 'Transferencia', new Date()
// )

// factura_13.render()

// new Factura (
//     new Empresa( 'Ediciones Tuatalug',
//     new Direccion('c/ Pez', '1', 'Madrid', 'España'),
//     '625875921',
//     'T-34761234',),
//     new Empresa( 'Librería Pepita',
//     new Direccion ('c/ Burgo', '5', 'Estrasburgo', 'Francia'),
//     '625492190',
//     'F-76534127'),
//     [new Item('L1', 40, 12), new Item('L2', 50, 6), 
//     new Item('L3', 56, 17)], '000000014', 0.04, 
//     'Efectivo', new Date()
// ).resumir()