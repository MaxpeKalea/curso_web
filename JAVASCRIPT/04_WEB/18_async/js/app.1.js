export function app() {
    console.log('Cargada app')
    const usersURL = 'https://jsonplaceholder.typicode.com/users'

    // Nodos del DOM
    let btnBuscar = document.querySelector('#btn-buscar')
    let btnBorrar = document.querySelector('#btn-borrar')
    let inId = document.querySelector('#in-id')
    let spanSaludo = document.querySelector('#span-saludo')
 
    // Asociación de manejadores de eventos
   
    btnBuscar.addEventListener('click', onClickBuscar)
    btnBorrar.addEventListener('click', onClickBorrar)

    // Funciones manejadoras de eventos
    function onClickBorrar(ev) {
        inId.value = '' 
        spanSaludo.innerHTML = inNombre.value
    } 

    function onClickBuscar(ev) {
        let url = usersURL + '/' + inId.value        
        ajax('GET', url, leerDatos )
    }


    function leerDatos(http) {
        if (http.readyState == 4) {
            if (http.status == 200) {
            let data = JSON.parse(http.responseText) 
                spanSaludo.innerHTML =  data.username
        } else {

            spanSaludo.innerHTML = ', datos no encontrados'
            //location.assign('./error.html')
        }
    }
    }

    function ajax(metodo, url, callback) {   // creamos una funcion ajax para no tener que repetir estos pasos constantemente y en su lugar invocar esta funcion
        const http = new XMLHttpRequest()
        http.addEventListener('readystatechange', () => { callback(http) })
        http.open(metodo, url)
        http.send() 
    }

}

//REPASO CALLBACK 

// una devolución de llamada o retrollamada (en inglés: callback) 
//es una función "A" que se usa como argumento de otra función "B". 
//Cuando se llama a "B", ésta ejecuta "A". 