export function app() {
    console.log('Cargada app') 
    let btnSalir=document.querySelector('#btn-salir')
    let out=document.querySelector('#output')
    let btnCancelar
    let handler

    btnSalir.addEventListener('click', onClick)
    function onClick(ev) {
        let url = 'https://www.google.com'
        let msg= `<section> 
        <p>Yendo a Google</p>
        <button id='btn-cancelar'>Cancelar</button>
        </section>`
        handler=setTimeout(() => {location.assign(url)}, 4000)

        //out.textContent=msg
        out.innerHTML=msg   // inner interpreta etiquetas html como 'p' o 'section' etc
        btnCancelar=document.querySelector('#btn-cancelar')
        btnCancelar.addEventListener('click', onCancel)
    }
    function onCancel() {
        clearTimeout(handler)
        out.innerHTML=''
    }
 }
