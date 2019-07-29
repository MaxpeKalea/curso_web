//17:40 3 junio // 18:40 module.exports en el fichero 11js

// () => {} // función anónima


describe('Pruebas de números pares', () => {
let x
    it('debería ser "impar" si n = 1 ', () => {
         x = 1
         expect(esPar(x)).toEqual(false)
    })
    it('debería ser "par" si n = 2 ', () => {
        x = 2
        expect(esPar(x)).toEqual(true)      
   })
    
        x = 345
        x = 98
        x = 0
        x = -4
        x = -5
        x = 4.3
        x = -56.7
        x = 'pepe'
        x = '56'
        // mostrar(x)
})