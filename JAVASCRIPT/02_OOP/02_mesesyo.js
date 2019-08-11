

function prepararMeses (id1, id2) {

    // const m = require('./02_data.js')
    
    let {aMeses, aMesesRusos, aMesesIngles} = require('./02_data.js')
    let meses1
    let meses2

    if (meses1.length !== m.aMesesRusos.length) {
        throw new Error('Error de entrada de datos')
    }

    for (let i = 0; i < m.aMeses.length; i++) {
        const item = m.aMeses[i];
        oMeses[item] = m. aMesesRusos[i]
    }

    return oMeses
} 


console.log(prepararMeses())