export function calcularPalabras (texto) {

    texto = input.value
    
   texto = texto.replace (/\r?\n/g,' ')
    
    texto = texto.replace (/[ ]+/g,' ')

    texto = texto.replace (/^ /,'')
    texto = texto.replace (/ $/,'')
    
    let textoSplt = texto.split (' ')
    
    let numeroPalabras = textoSplt.length

    return numeroPalabras
    
}
 
calcularPalabras()