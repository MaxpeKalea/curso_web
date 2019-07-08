/** funcion articulo
 * @description: crear un objeto usado para representar un articulo de una tienda. 
 * Se caracteriza por descripcion, codigo y precio, calcula el iva y muestra los datos en pantalla.
 * Las funciones se incorporaran en una funcion constructora.
 * @param {string}: descripcion
 * @param {number}: codigo
 * @param {number}: precio
 * 
 * Esta mal no se que poner aqui la verdad no se ni si tenia que poner parametros siendo un objeto ¿?¿?¿?
 *  */


function articulo(descripcion, codigo, precio) {
    this.descripcion = descripcion 
    this.codigo = codigo
    this.precio = precio
}

articulo.prototype.tipoIva = 0.21

const cuchara = new articulo ('cuchara', 0731, 0.45)

this.calcularIva = function() {
    const importe = {}
    importe.iva = this.precio * articulo.prototype.tipoIva
    importe.total = this.precio + importe.iva
    return importe
}

console.log(cuchara, this.calcularIva)