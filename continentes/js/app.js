import { APIPAISES } from './api.js'

export function app() {
    console.log('Cargada app')
} 


    // Nodos del DOM
    let btnBuscar = document.querySelector('#btn-buscar')
    let inContinente = document.querySelector('#in-continente')   
    let ulPaises = document.querySelector('#ul-paises')
    let pError = document.querySelector('#p-error')
    
     // Asociación de manejadores de eventos
    
    btnBuscar.addEventListener('click', onClickBuscar)
    inContinente.addEventListener('change', onClickBuscar)

    // Funciones manejadoras de eventos
    async function onClickBuscar2017() {
        console.log('onClickBuscar2017')
        if (!inClave.value) {
            return
        }
        let url = LBGOOGLE + '/' + inClave.value 
        try {
            let response = await fetch(url)
            if(response.status == 200) {
                let data = await response.json()
                data = data.items
                data = data.map(item => { return {title: item.volumeInfo.title,
                                              authors: item.volumeInfo.authors  } 
                }) 
                console.log(data)
                renderData(data)
            } else {
                throw(new Error(response.status))
            }    
        } catch (error) {
            renderError(error)
        }
    }
