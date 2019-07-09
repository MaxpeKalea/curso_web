
function Factura(empresa,cliente,articulo) {
    this.empresa = empresa
    this.cliente = cliente 
    this.articulos = []
}

function Empresa(nombre,direccion,telefono,nif) {
    this.nombre = nombre
    this.direccion = direccion
    this.telefono = telefono
    this.nif = nif
}

function Cliente(nombre,direccion,telefono,nif) {
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

Factura.prototype.añadirArticulos = function(articulo) {
    this.articulos.push(articulo)
}

Factura.prototype.sumarArticulos = function () {
    let total1 = articulo.precio[0] * articulo.cantidad[0]
    let total2 = articulo.precio[1] * articulo.cantidad[1]
    let total3 = articulo.precio[2] * articulo.cantidad[2]
    let total = total1 + total2 + total3
    console.log(total)
} 

const factura1 = new Factura (
    new Empresa('Mascotas Pepe','calle del Pez Volador 51',9154759,'9678564J'), 
    new Cliente('Guardería Canina los 101','pasaje del can mayor 101',911101101,'3609494K') 
 )
const articulos = [new Articulo('pienso', 17.50,23), new Articulo('pelotas', 3.5,17), new Articulo('bolsas', 1,30)]



console.log(factura1,articulos,sumarArticulos)


 

