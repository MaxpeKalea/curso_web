function leerDatosAsinc(i, timer = 1000) {
    setTimeout(()=>{
        console.log(`lectura de datos número ${i}`)
        let datos = {}
    },
    timer)
}

console.log(leerDatosAsinc(1,2000))
console.log('Leyendo los datos')
