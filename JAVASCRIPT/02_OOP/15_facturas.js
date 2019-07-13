// 05 07 16:30/18

/* 
Definir la estructura de un objeto que almacena una factura. 
Las facturas están formadas por:
- la información de la propia empresa:
    - nombre de la empresa
    - dirección
    - teléfono
    - NIF 
- la información del cliente
    - nombre de la empresa
    - dirección
    - teléfono
    - NIF 
- una lista de elementos, cada uno de los cuales dispone de:
    - descripción
    - precio por unidad
    - cantidad 
- otra información básica de la factura
    - el número de dactura
    - tipo de IVA
    - forma de pago
    - la fecha
Añadir al menos dos métodos:
- el que calcula el importe total de la factura
- el que muestra por pantalla la factura 
    o al menos el importe total de la factura.
*/
///////////////////////////////////////////////////////////
///////////////////MI FACTURA 1///////////////////////////
//////////////////////////////////////////////////////////

// let factura = {
//     empresa: {
//         nombre: 'Mascotas Pepe',
//         direccion: 'calle del Pez Volador 51',
//         telefono: '91547596',
//         nif: '9678564'
//     },
//     cliente: {
//         nombre: 'Guardería Canina los 101',
//         direccion: 'pasaje del can mayor 101',
//         telefono: '911101101',
//         nif: '3609494'
//     },
//     articulos: [
//                     { descripción: 'pienso', precio: 17.50, cantidad: 23},
//                     { descripción: 'pelotas', precio: 3.5, cantidad: 17},
//                     { descripción: 'bolsas', precio: 1, cantidad: 30},
//         ],
//     mostrarFactura: function () {
//         console.log(this.id)   
//     },
//     sumarItems: function () {
//         let total1 = articulo.precio[0] * articulo.cantidad[0]
//         let total2 = articulo.precio[1] * articulo.cantidad[1]
//         let total3 = articulo.precio[2] * articulo.cantidad[2]
//         let total = total1 + total2 + total3
//         console.log(total)
//     },
// }


////////////////////////////////////
///////////////////////////////////////
//////////////////////////////////


const {fechaEsp, fijarLongitudCadena} = require('./15_helpers.js')

const templateFactura = {
    empresa: {
        nombre: '',
        direccion: '',
        telefono: '',
        nif: '',
    },
    cliente: {
        nombre: '',
        direccion: '',
        telefono: '',
        nif: '',
    },
    items : [
        {descripcion: '', precioU: 0, cantidad: 0} 
    ],
    numFactura: '',
    tipoIVA: '',
    formaPago: '',
    fecha: new Date()
    }

templateFactura.calcularImporte = function() {}
templateFactura.mostrarImporte = function() {}


const factura = {
    empresa: {
        nombre: 'Ediciones Tuatalug',
        direccion: 'c/ Pez 1, Madrid',
        telefono: '625875921',
        nif: 'T-34761234',
    },
    cliente: {
        nombre: 'Librería Boracai',
        direccion: 'c/ Carranza 5, Cádiz',
        telefono: '625493421',
        nif: 'F-76521743',
    },
    items : [
        {descripcion: 'Angular 8.0', precioU: 30, cantidad: 10},   
        {descripcion: 'JS para torpes', precioU: 32, cantidad: 12},   
        {descripcion: 'Typescrip Avanzado', precioU: 45, cantidad: 8},   
        {descripcion: 'Introducción a las aplicaciones Web', precioU: 37, cantidad: 11}],
    numFactura: '000000012',
    tipoIVA: 0.04,
    formaPago: 'Contado',
    fecha: new Date()
    }

factura.calcularImporte = function() {
    const importe = {} 
    importe.base = 
        this.items
        .map( libro => libro.precioU * libro.cantidad)
        .reduce( (total, item) => total + item ) 
    importe.iva = importe.base * this.tipoIVA
    importe.total = importe.base + importe.iva
    return importe
}

factura.listarItems = function() {
    let items = ``
    this.items.forEach(
        item => {
            let desc = fijarLongitudCadena(item.descripcion, 30)
            let pv = item.precioU
                .toLocaleString('es', {style: 'currency', currency: 'EUR'})
            let cant = item.cantidad
            items += 
`
    ${desc}     ${pv}          ${cant}
`
    })
    return items
}

factura.prepararFactura = function() {
    const importe = this.calcularImporte()
    const factura =
`
    _______________________________________________________________

                                        ${this.empresa.nombre}
                                        ${this.empresa.direccion}
                                        ${this.empresa.telefono}
                                        ${this.empresa.nif}

    Num. Factura: ${this.numFactura}

    ${this.cliente.nombre}
    ${this.cliente.direccion}
    ${this.cliente.telefono}
    ${this.cliente.nif}

    Descripción                         Precio      Cantidad
    _______________________________     _______     ________
    ${this.listarItems()}

    Importe ....................................${importe.base
        .toLocaleString('es', {style: 'currency', currency: 'EUR'})}
    IVA ........................................${importe.iva
        .toLocaleString('es', {style: 'currency', currency: 'EUR'})}

    Importe Total ..............................${importe.total
        .toLocaleString('es', {style: 'currency', currency: 'EUR'})}

    Forma de Pago ..............................${this.formaPago}

    Madrid, ${fechaEsp(this.fecha)}
    ______________________________________________________________
`
    return factura
}

factura.render = function () {
    console.log(this.prepararFactura())
}


factura.render()
