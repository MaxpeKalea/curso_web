export function app() {
    console.log('Cargada app')
    const booksURL = 'https://www.googleapis.com/books/v1/volumes?q='

    // Nodos del DOM
    let btnBuscar = document.querySelector('#btn-buscar')
    let tema = document.querySelector('#tema')
    let resultado = document.querySelector('#resultado')
 
    // Asociación de manejadores de eventos
   
    btnBuscar.addEventListener('click', onClickBuscar2017)


    async function onClickBuscar2017(ev) {
        let url = booksURL + tema
        console.log(url)
        try{
        response = await fetch(url)
        if (response.status == 200) {
            // data = await response.json()  
            // resultado.innerHTML =  data
            let data = JSON.parse(http.responseText) 
                resultado.innerHTML =  data
        } else {
            throw(new Error(response.status))
        }
        }
        catch(error) {
            resultado.innerHTML = ', error de conexión: ' + error
           
        }
       
    }


}
