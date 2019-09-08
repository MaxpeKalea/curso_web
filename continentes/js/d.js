'use strict'


    console.log('Cargada app')

let url = 'https://restcountries.eu/rest/v2/all'
let aPaises = []
let inCont = document.querySelector('#in-continente')
let outPaises = document.querySelector('#ul-paises')
let btnBuscar = document.querySelector('#btn-buscar')
let html 

btnBuscar.addEventListener('click', onClickPaises)
inCont.addEventListener('change', onClickPaises)

function onClickPaises() {
    fetch(url)
    .then(data => data.json())
    .then(data => {
        aPaises = data
        aPaises = aPaises.map(item => { 
            if (item.region == inCont.value) 
                return item.name
     } )   
     outPaises.innerHTML =  `
     <li>
         ${aPaises} 
     </li>`
     console.log(aPaises) }
           
    )  
 }



// Hasta aqui he clasificado del API solo los nombres de paises y el continente al que pertenecen
// Ahora tengo que conseguir que IF el contenido del inCont es igual a el contenido de region en aPaises.map 
// en outPaises inner html name en forma de ul
