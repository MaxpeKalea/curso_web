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


let factura = {
    empresa: {
        nombre: 'Mascotas Pepe',
        direccion: 'calle del Pez Volador 51',
        telefono: '91547596',
        nif: '9678564'
    },
    cliente: {
        nombre: 'Guardería Canina los 101',
        direccion: 'pasaje del can mayor 101',
        telefono: '911101101',
        nif: '3609494'
    },
    articulos: [
                    { descripción: 'pienso', precio: 17.50, cantidad: 23},
                    { descripción: 'pelotas', precio: 3.5, cantidad: 17},
                    { descripción: 'bolsas', precio: 1, cantidad: 30},
        ],
    mostrarFactura: function () {
        console.log(this.id)   
    },
    sumarItems: function () {
        let total1 = articulo.precio[0] * articulo.cantidad[0]
        let total2 = articulo.precio[1] * articulo.cantidad[1]
        let total3 = articulo.precio[2] * articulo.cantidad[2]
        let total = total1 + total2 + total3
        console.log(total)
    },
}


