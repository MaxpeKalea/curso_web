export function app() {
    console.log('Cargada app')
    const usersURL = 'https://jsonplaceholder.typicode.com/users'

    // Nodos del DOM
    let btnBuscar = document.querySelector('#btn-buscar')
    let btnBorrar = document.querySelector('#btn-borrar')
    let inId = document.querySelector('#in-id')
    let spanSaludo = document.querySelector('#span-saludo')
 
    // Asociación de manejadores de eventos
   
    btnBuscar.addEventListener('click', onClickBuscar2017)
    btnBorrar.addEventListener('click', onClickBorrar)

    // Funciones manejadoras de eventos
    function onClickBorrar(ev) {
        inId.value = '' 
        spanSaludo.innerHTML = inNombre.value
    } 

    function onClickBuscar(ev) {
        let url = usersURL + '/' + inId.value  
        fetch(url)
        .then(response => {
            if (response.status == 200) {
                return response.json()  // response tiene muchisimos datos y yo solo quiero que me devuelva los json
            }
            console.log(response)
            throw(new Error(response.status))  // si quiero controlar los errores con fetch hago esto
        }) 
        .then((data)=>{
            spanSaludo.innerHTML =  data.username
        })    
        .cath((error)=>{
            spanSaludo.innerHTML = ', error de conexión: ' + error
            //location.assign('./error.html')
        })    
       
    }

    async function onClickBuscar2017(ev) {
        let url = usersURL + '/' + inId.value  
        try{
        response = await fetch(url)
        if (response.status == 200) {
            data = await response.json()  
            spanSaludo.innerHTML =  data.username
        } else {
            throw(new Error(response.status))
        }
        }
        catch(error) {
            spanSaludo.innerHTML = ', error de conexión: ' + error
           
        }
       
    }


}
