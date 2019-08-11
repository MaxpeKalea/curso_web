import dialogPolyfill  from '../../node_modules/dialog-polyfill/index.js'


// las funciones siempre se escriben:

// function nombre de la funcion() {}




function main() {

  

    document.querySelector('#btn-info')
    .addEventListener('click', mostrar)
    document.querySelector('#btn-cerrar')
    .addEventListener('click', cerrar)

    function mostrar() {
        document.querySelector('#dlg-sample').open = true
    }
    function cerrar() {
        document.querySelector('#dlg-sample').open = false
    }
}

// otra forma de hacer lo mismo



function main2 () {
    let modal = document.querySelector('#dlg-sample')

    dialogPolyfill.registerDialog(modal);

    document.querySelector('#btn-info')
    .addEventListener('click', onClick)
    document.querySelector('#btn-cerrar')
    .addEventListener('click', onClick)

    function onClick() {
        if (!modal.open) { modal.open = false }
        modal.open = !modal.open
        if (modal.open) { modal.showModal();
        }
    }
    
}

function canvas () {
    let c = document.querySelector('#canvas-sample').getContext('2d')
    c.fillRect(30, 20, 80, 80);

}

// para probar las dos formas en la siguiente linea pondre main o main2

document.addEventListener('DOMContentLoaded',main2)

// canvas

document.addEventListener('DOMContentLoaded',canvas)