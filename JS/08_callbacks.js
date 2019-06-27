function calcular (a, b, operacion, callback) {
    let msj = `El resultado de una ${operacion} con ${a} y ${b} es `
    return msj + callback(a,b)
}

console.log(calcular(4, 6, 'suma', (x,y) => x + y))
console.log(calcular(4, 6, 'resta', (x,y) => x - y))