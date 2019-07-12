let ob = {} //new Object()
let aDatos = [2, 8, 9, 76] //new Array()

aDatos[100] = 9
console.log(aDatos)
console.log(aDatos[78])

for (let i = 0; i < aDatos.length; i++) {
    const item = aDatos[i];
    if (!item) {
        aDatos[i] = parseInt(Math.random() * 100)
    }    
}

console.log(String(aDatos))
