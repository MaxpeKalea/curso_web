export function app() {  // da igual function o class
    console.log('cargado')
    const store = 'userName' // No es necesaria, podria hacerlo todo con userName, es por comodidad

    //Nodos del DOM

    let btn1 = document.querySelector('#btn-1')
    let btn2 = document.querySelector('#btn-2')
    let inNombre = document.querySelector('#in-nombre')
    let outNombre= document.querySelector('#out-nombre')

    //Asociación de los manejadores de eventos

    btn1.addEventListener('click', onClick1) //si hacen click carga onClik1  // Puedo crear varios manejadores iguales con funciones distintas para cargar varias funciones con un mismo evento -- btn1.addEventListener('click', onClick1.b) 
    btn2.addEventListener('click', onClick2)
    inNombre.addEventListener('input', onInputNombre) // si escriben algo
    // inNombre.addEventListener('change', onChangeNombre)  // si lo envian (en este caso seria el cambio posible)


    //Inicialización de valores (en este caso si el usuario recarga la pag que esta siga recordando su nombre)

    let user = localStorage.getItem(store)
    if (user) {
        inNombre.value = user
        outNombre.innerHTML = user
    }


    //Funciones manejadoras de eventos

    function onClick1(ev) {
        console.log(ev) //muestra los eventos relacionados que han sucedido en la pagina desde su carga
        inNombre.value = ''
        outNombre.innerHTML = ''
        localStorage.removeItem(store)
    }

    function onClick2() {
        localStorage.setItem(store, inNombre.value) // en la const store guardo el nombre del usuario
    }

    function onInputNombre(ev) {
        console.dir(ev.target.value) // el target(disparador) del evento que se esta midiendo es inNombre
        outNombre.innerHTML = ev.target.value
    }
}