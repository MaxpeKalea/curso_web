'use strict'

import {calcularPalabras} from "./modelos.js";

export function app() {
    console.log('Cargada app') 

    const boton = document.querySelector('.btn')
    const input = document.querySelector('input')
    const output = document.querySelector('output')

    
    boton.forEach(btn =>btn.addEventListener(
        'click', onBtnClick));



    function onBtnClick (ev) {
        switch (ev.target.id) {
           
            case calcularPalabras(input.value)
            .render(output.value = `La frase ${texto} tiene ${numeroPalabras} palabras`)
                :break;
    }
    }
}