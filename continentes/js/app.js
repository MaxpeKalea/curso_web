let elSelect = document.querySelector("select")

elSelect.addEventListener('click', getPaises)

function getPaises(){

console.log(elSelect.value)
let url = 'http://restcountries.eu/rest/v2/region/'
fetch(url+elSelect.value)
.then(function(response) {
return response.json();
})
.then(function(myJson) {

myJson.forEach(item => { 
    
    let paisLi = document.createElement("li");
     paisLi.text = `
 <li>
      ${item.name} 
 </li>`
     paisLi = paisLi.text 
     paises.prepend(paisLi)
     console.log(paisLi)
})
});
}
