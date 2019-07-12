/** funcion (class) articulo
 * @description: crear un objeto usado para representar un articulo de una tienda. 
 * Se caracteriza por descripcion, codigo y precio, calcula el iva y muestra los datos en pantalla.
 * Las funciones se incorporaran en una funcion constructora.
 * @property {string}: descripcion
 * @property {number}: codigo
 * @property {number}: precio
 * @property {number}: iva
 * @method {object} calcularIva
 * @method {void} mostrar
*/


function Articulo(descripcion = '', codigo = 0, precio = 0) {
    this.descripcion = descripcion 
    this.codigo = codigo
    this.precio = precio
}

Articulo.prototype.tipoIva = 0.21
Articulo.prototype.calcularIva = function() {
    return {
        iva: this.precio * this.tipoIva,
        total: this.precio + (this.precio * this.tipoIva)
    }
}

Articulo.prototype.mostrar = function() {
    const importe = this.calcularIva()
    const cadena = `
    Descripción: ${this.descripcion}
    Código: ${this.codigo}
    Precio: ${this.precio.toFixed(2)}
    IVA: ${importe.iva.toFixed(2)}
    Precio Total: ${importe.total.toFixed(2)}
    `
    console.log(cadena)
}

const cuchara = new Articulo ('cuchara', 0731, 0.45)  // esto es lo que convierte mi funcion en constructora.
cuchara.mostrar()
console.log(cuchara)

const plato = new Articulo ('plato', 0713, 0.85) 
plato.mostrar()
console.log(plato)


/** calcular el precio sin iva para que el total resultante sea 22
 * 
 * 22  / (1 + this.tipoIva) = precioSinIva
 * 
 * ó
 * 
 * console.log(22/(1.21)) donde 22 seria el total que quiero tener y 21 el iva
 *
*/

console.log(22/(1.21))