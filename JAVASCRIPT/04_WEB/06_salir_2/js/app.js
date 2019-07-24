export function app() {
    console.log('Cargada app') 
    let btnSalir=document.querySelector('#btn-salir')
    let btnCancelar=document.querySelector('#btn-cancelar')
    let dlgCancelar=document.querySelector('#dlg-cancelar')
    let handler

    btnSalir.addEventListener('click', onClick)
    btnCancelar.addEventListener('click', onCancel)


    function onClick(ev) {
        let url = 'https://www.google.com'
        handler=setTimeout(() => {location.assign(url)}, 4000)
        dlgCancelar.showModal()
    }
    function onCancel() {
        clearTimeout(handler)
        dlgCancelar.close()
    }
 }
