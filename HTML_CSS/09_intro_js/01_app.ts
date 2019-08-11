

let user = 'Pepe'
let precio = 45.60
let producto = 'Gafas'
// precio = producto *Error de tipos



// En typescript el tipado puede ser fuerte (antes de tener valor se define) (el debil no se puede cambiar)

{
    let b: number // Tipo number, sin valor
    b = 3 // Valor 3
    // b = 'Pepe' *Error de tipos  
}

