document.querySelector('#continentes').addEventListener('change', quePaises);

document.getElementById('pais').innerHTML = pais;





function quePaises() {







    let elSelect = document.getElementById('continentes');







    let continente = elSelect.options[elSelect.selectedIndex].value;







    let url = 'https://restcountries.eu/rest/v2/all';









    fetch(url)







        .then(data => data.json())







        .then(data => {







            let paises = data;







            let aPaises = [];







            paises.forEach(item => {







                if (item.region == continente) {




                    let paisOption = document.createElement('option');

                    paisOption.value = item.name

                    paisOption.text = item.name

                    pais.prepend(paisOption)

                    aPaises.push(`Nombre: ${item.name}/${item.nativeName} -- Capital: ${item.capital} -- Bandera: <img src="${item.flag}" style="max-width: 5%"> -- Población: ${item.population} --`);







                }







            });







            if (aPaises.length > 0) {







                renderPaises(aPaises, continente);







            }







        });







}







function renderPaises(paises, continente) {







    let cabecera = 'Hay ' + paises.length







        + ' países en "' + continente + '"';







    let html = '';







    paises.forEach(item => {







        html += '<li>' + item + '</li>';







    });







    document.getElementById('el-continente').innerHTML = cabecera;







    document.getElementById('sus-paises').innerHTML = html;











}

