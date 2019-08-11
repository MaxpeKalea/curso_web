
// Función constructora de objetos triángulos
 
/**Funcion triangulos
 * @property{number}lado1
 * @property{number}lado2
 * @property{number}lado3
 * @methodgetLados
 * @methodgetPerimetro
 * @methodgetTipo
*/
 
function Triangulo(lado1,lado2,lado3) {
    this._lado1 = lado1
    this._lado2 = lado2
    this._lado3 = lado3
}

Triangulo.prototype.getLados = function () {
    return this   
}

Triangulo.prototype.getPerimetro = function () {
    return this._lado1 + this._lado2 + this._lado3 
}

Triangulo.prototype.getTipo = function () {
 
if(lado1==lado2 & lado2==lado3) {
return `equilatero`
 } else if(lado1!==lado2 & lado2!==lado3 & lado1!==lado3) {
return `escaleno`
 } else{
return `isosceles`
 }
}
 
Triangulo.prototype.mostrar = function() {
    const cadena = `
    Lado 1: ${this._lado1}
    Lado 2: ${this._lado2}
    Lado 3: ${this._lado3}
    Perímetro: ${this.getPerimetro}
    Tipo: ${this.getTipo}
    `
    console.log(cadena)
}

const t = new Triangulo (6, 6, 6)  
Triangulo.prototype.mostrar()
Triangulo.prototype.getLados()
Triangulo.prototype.getPerimetro()
console.log(Triangulo(6, 6, 6))