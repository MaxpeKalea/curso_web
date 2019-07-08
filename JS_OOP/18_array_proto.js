const aDatos = ['Marta', 'Josu', 'Alex', 'Manquita']

console.log(aDatos.__proto__)
console.log(Array.prototype)

Array.prototype.saludar = function () {
    console.log('Hola, somos la familia mas guay')
}

aDatos.push('Fernando')
aDatos.saludar()