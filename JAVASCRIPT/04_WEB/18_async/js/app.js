export function app() {  // da igual function o class

    console.log('cargado')

    const usersURL = 'https://jsonplaceholder.typicode.com/users/'
    const http = new XMLHttpRequest() // creamos una variable para instanciar en ella un objeto de tipo AJAX o XMLHttp


    //Nodos del DOM

    let btnBuscar = document.querySelector('#btn-buscar')
    let btnBorrar = document.querySelector('#btn-borrar')
    let inId = document.querySelector('#in-id')
    let spanSaludo = document.querySelector('#span-saludo')

    //Asociación de los manejadores de eventos

    btnBuscar.addEventListener('click', onClickBuscar)
    btnBorrar.addEventListener('click', onClickBorrar)

    //Funciones manejadoras de eventos

    function onClickBorrar(ev) {
        inId.value = '' 
        spanSaludo.innerHTML = inNombre.value
    } 


    function onClickBuscar(ev) {

        if(inId.value < 0 || inId.value > 10) { // porque solo hay 10 usuarios por ejemplo
            return   // salir de la funcion sin hacer nada
        }    
        let url = usersURL + '/' + inId.value
        http.addEventListener('readystatechange', leerDatos)  // cuando el servidor me avise de un cambio de estado (tiene 4 estados y el cuarto es cuando ha terminado la carga +info en apuntes)
        http.open('GET', url ) // abre la conexion, sus parametos son(metodo,url) (que, de donde)
        http.send() // manda los datos, sus parametos son(metodo,url) (que, a donde)
        // open y send conviene utilizarlos despues de onreadystatechange
        
    }

    // AJAX  // Es estandar de los navegadores, en node no esta
  

    // Funciones del evento AJAX

    function leerDatos(ev) {
        if(http.readyState == 4 && http.status == 200) {  // porque 4 es que el proceso ha terminado y si devuelve 200 ha ido todo bien 
            let data = JSON.parse(http.responseText) 
            console.log(data)
            spanSaludo.innerHTML = data.username  // la propiedad username sale de la base de datos pero no se puede leer, por eso ponemos antes:  let data = JSON.parse(http.responseText)
      }
    }
}
